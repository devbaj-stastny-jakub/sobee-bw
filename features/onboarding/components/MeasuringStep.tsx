import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';

import Button from '@/components/Button';
import DoubleSwitch from '@/components/DoubleSwitch';
import FabButton from '@/components/FabButton';
import NumberInput from '@/components/NumberInput';

import { useOnboardingForm } from '../context';

import { chevronLeftIcon } from '@/assets/icons';
import { userRepository } from '@/db/repositories';
import { useStreak } from '@/shared/streak';
import { useUser } from '@/shared/user';

export interface MeasuringStepProps {
    stepName: string;
}

const MeasuringStep = ({ stepName }: MeasuringStepProps) => {
    const { currentStep, previousStep } = useOnboardingForm();
    const { refetchUser } = useUser();
    const { startNewStreak } = useStreak();

    const [resourceToTrack, _setResourceToTrack] = useState<'Time' | 'Money'>('Money');
    const [packCost, setPackCost] = useState<number | null>(null);
    const [packsPerWeek, setPacksPerWeek] = useState<number | null>(null);

    if (currentStep?.name !== stepName) return null;

    const handleStartJourney = async () => {
        await userRepository.save({ name: 'Jakub', userId: 1 });
        await refetchUser();
        await startNewStreak(new Date());
        router.replace('/');
    };

    return (
        <View className="flex-1 flex-col justify-center gap-10">
            <View className="w-full flex-col gap-4">
                <View className="w-full flex-col gap-2">
                    <Text className="font-bold text-4xl">Measure your savings</Text>
                    <Text className="text-lg leading-6 text-typography-secondary font-medium">
                        Track how many resources have you saved during your absinence.
                    </Text>
                </View>
                <DoubleSwitch
                    value={resourceToTrack}
                    options={['Time', 'Money']}
                    onSelect={() => {}}
                />
            </View>

            <View className="w-full flex-col gap-4">
                <Text className="font-bold text-4xl">Cost of one cigaret</Text>
                <View className="flex-row gap-2 items-center">
                    <View className="flex-1">
                        <NumberInput
                            value={packCost}
                            onChange={setPackCost}
                            placeholder="Cost of one cigaret"
                        />
                    </View>
                    <Button color="secondary" className="border-[1px] border-gray-300 h-[53px]">
                        CZK
                    </Button>
                </View>
            </View>

            <View className="w-full flex-col gap-4">
                <Text className="font-bold text-4xl">Cigarets per week</Text>
                <NumberInput
                    value={packsPerWeek}
                    onChange={setPacksPerWeek}
                    placeholder="Average consumption per week"
                />
            </View>

            <View className="w-full flex-row gap-2 mt-8">
                <FabButton
                    color="secondary"
                    onPress={previousStep}
                    icon={chevronLeftIcon}
                    className="border-[1px] border-gray-300"
                />
                <Button fullWidth onPress={handleStartJourney} disabled={false}>
                    Start your journey
                </Button>
            </View>
        </View>
    );
};

export default MeasuringStep;
