import { Badge } from '../types';

export const generateMockBadges = (): Badge[] => {
    const badges: Badge[] = [
        // Featured badges
        {
            id: 1,
            name: 'First Step',
            description: 'Started your recovery journey',
            earned: true,
            featured: true,
            category: 'milestone',
            earnedDate: new Date('2024-06-01'),
        },
        {
            id: 2,
            name: 'Week Warrior',
            description: '7 days clean and strong',
            earned: true,
            featured: true,
            category: 'milestone',
            earnedDate: new Date('2024-06-08'),
        },
        {
            id: 3,
            name: 'Month Master',
            description: '30 days of freedom',
            earned: true,
            featured: true,
            category: 'milestone',
        },
        // Additional earned badges
        {
            id: 4,
            name: 'Early Bird',
            description: 'Checked in before 8 AM',
            earned: true,
            featured: false,
            category: 'habit',
            earnedDate: new Date('2024-06-02'),
        },
        {
            id: 5,
            name: 'Social Butterfly',
            description: 'Connected with the community',
            earned: true,
            featured: false,
            category: 'social',
            earnedDate: new Date('2024-06-05'),
        },
        {
            id: 6,
            name: 'Mindful Moment',
            description: 'Completed your first meditation',
            earned: true,
            featured: false,
            category: 'wellness',
            earnedDate: new Date('2024-06-03'),
        },
        // Future goals
        {
            id: 7,
            name: 'Consistency Champion',
            description: '60 days without relapse',
            earned: false,
            featured: false,
            category: 'milestone',
        },
        {
            id: 8,
            name: 'Support Star',
            description: 'Helped 10 community members',
            earned: false,
            featured: false,
            category: 'social',
        },
        {
            id: 9,
            name: 'Learning Leader',
            description: 'Completed all wellness courses',
            earned: false,
            featured: false,
            category: 'learning',
        },
        {
            id: 10,
            name: 'Habit Master',
            description: 'Tracked habits for 30 days',
            earned: false,
            featured: false,
            category: 'habit',
        },
    ];

    return badges;
};
