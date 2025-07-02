export interface Friend {
    id: string;
    name: string;
    streakDays: number;
    rank: number;
    avatar?: string;
}

export const mockFriends: Friend[] = [
    {
        id: '1',
        name: 'Sarah',
        streakDays: 1456,
        rank: 1,
    },
    {
        id: '2',
        name: 'Alex',
        streakDays: 1290,
        rank: 2,
    },
    {
        id: '3',
        name: 'Emma',
        streakDays: 987,
        rank: 3,
    },
    {
        id: '4',
        name: 'Jake',
        streakDays: 745,
        rank: 4,
    },
    {
        id: '5',
        name: 'Mia',
        streakDays: 623,
        rank: 5,
    },
    {
        id: '6',
        name: 'Lucas',
        streakDays: 512,
        rank: 6,
    },
    {
        id: '7',
        name: 'Zoe',
        streakDays: 445,
        rank: 7,
    },
    {
        id: '8',
        name: 'Ryan',
        streakDays: 378,
        rank: 8,
    },
    {
        id: '9',
        name: 'Lily',
        streakDays: 298,
        rank: 9,
    },
    {
        id: '10',
        name: 'Noah',
        streakDays: 234,
        rank: 10,
    },
    {
        id: '11',
        name: 'Ava',
        streakDays: 189,
        rank: 11,
    },
    {
        id: '12',
        name: 'Ethan',
        streakDays: 156,
        rank: 12,
    },
    {
        id: '13',
        name: 'Grace',
        streakDays: 123,
        rank: 13,
    },
];

export const getTopThree = (): Friend[] => {
    return mockFriends.slice(0, 3);
};

export const getRemainingFriends = (): Friend[] => {
    return mockFriends.slice(3);
};
