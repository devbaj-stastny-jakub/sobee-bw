import { createContext, useContext, useEffect, useState } from 'react';
import { IsNull } from 'typeorm';

import { availableMilestones } from '../constants';
import { Milestone } from '../types';
import { getDurationOfStreak } from '../utils';

import { Streak } from '@/db/entities/streak';
import { streakRepository } from '@/db/repositories';

export type StreakContextState = {
    currentStreak: Streak | null;
    milestoneInProgress: Milestone | null;
    acquiredMilestones: Milestone[];
    milestones: Milestone[];
    currentMilestoneProgress: number;
    isLoading: boolean;

    fetchCurrentStreak: () => Promise<void>;
    startNewStreak: (startDate: Date) => Promise<void>;
};

const streakContextDefaultValues: StreakContextState = {
    currentStreak: null,
    isLoading: true,
    milestoneInProgress: null,
    acquiredMilestones: [],
    milestones: [],
    currentMilestoneProgress: 0,

    fetchCurrentStreak: async () => {},
    startNewStreak: async () => {},
};

const StreakContext = createContext<StreakContextState>(streakContextDefaultValues);

interface StreakContextProviderProps {
    children: React.ReactNode;
}

export const StreakContextProvider = ({ children }: StreakContextProviderProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentStreak, setCurrentStreak] = useState<StreakContextState['currentStreak']>(null);
    const [milestoneInProgress, setMilestoneInProgress] =
        useState<StreakContextState['milestoneInProgress']>(null);
    const [currentMilestoneProgress, setCurrentMilestoneProgress] =
        useState<StreakContextState['currentMilestoneProgress']>(0);

    const fetchCurrentStreak = async () => {
        setIsLoading(true);
        try {
            const streak = await streakRepository.findOne({
                where: { endDate: IsNull() },
            });
            if (streak === null) {
                setCurrentStreak(null);
                return;
            }
            setCurrentStreak(streak);
        } catch (error) {
            console.error('Failed to fetch current streak:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const startNewStreak = async (startDate: Date) => {
        if (isLoading) return;

        const currentStreak = await streakRepository.findOne({
            where: { endDate: IsNull() },
        });
        if (currentStreak) {
            await streakRepository.update(currentStreak.streakId, { endDate: new Date() });
        }
        const newStreak = await streakRepository.save({ startDate });
        setCurrentStreak(newStreak);
    };

    useEffect(() => {
        if (currentStreak === null) return;
        const interval = setInterval(() => {
            const sortedMilestones = availableMilestones.toReversed();
            const previousMilestone = sortedMilestones.find(({ requiredDuration }) => {
                return getDurationOfStreak(currentStreak).asSeconds() > requiredDuration;
            });
            if (!previousMilestone) return;

            const msInProgress = sortedMilestones[sortedMilestones.indexOf(previousMilestone) - 1];
            if (!msInProgress) return;

            setMilestoneInProgress(msInProgress);

            const secondsToAchieveMilestone =
                msInProgress.requiredDuration - previousMilestone.requiredDuration;
            const secondsInCurrentMilestone =
                getDurationOfStreak(currentStreak).asSeconds() - previousMilestone.requiredDuration;
            const currentMilestoneProgress = secondsInCurrentMilestone / secondsToAchieveMilestone;

            setCurrentMilestoneProgress(currentMilestoneProgress);
        }, 1000);
        return () => clearInterval(interval);
    }, [currentStreak]);

    useEffect(() => {
        fetchCurrentStreak();
    }, []);

    return (
        <StreakContext.Provider
            value={{
                currentStreak,
                fetchCurrentStreak,
                acquiredMilestones: [],
                currentMilestoneProgress,
                milestoneInProgress,
                isLoading,
                startNewStreak,
                milestones: availableMilestones,
            }}
        >
            {children}
        </StreakContext.Provider>
    );
};

export const useStreak = () => {
    const context = useContext(StreakContext);
    if (!context) {
        throw new Error('useStreak must be used within a StreakContextProvider');
    }
    return context;
};
