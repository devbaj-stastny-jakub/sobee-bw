import { friendPlaceholderImage } from '@/assets/images';

export const mockPosts = [
    {
        id: 1,
        user: {
            name: 'Honza38',
            avatar: friendPlaceholderImage,
        },
        date: '1.7. 2025',
        content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        reactions: {
            beer: 4,
            honey: 2,
        },
        comments: [
            {
                id: 1,
                user: 'Tereza15',
                content:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
        ],
    },
    {
        id: 2,
        user: {
            name: 'Petr22',
            avatar: friendPlaceholderImage,
        },
        date: '30.6. 2025',
        content:
            'Just completed my first week smoke-free! Feeling amazing and already noticing improvements in my breathing. Thanks to everyone in this community for the support!',
        reactions: {
            beer: 12,
            honey: 8,
        },
        comments: [
            {
                id: 1,
                user: 'Marie99',
                content: "Congratulations! Keep it up, you're doing great!",
            },
            {
                id: 2,
                user: 'David44',
                content: "That's awesome! I'm on day 3 myself, hoping to get where you are soon.",
            },
        ],
    },
    {
        id: 3,
        user: {
            name: 'Anna_K',
            avatar: friendPlaceholderImage,
        },
        date: '29.6. 2025',
        content:
            "Does anyone have tips for dealing with cravings during stressful work meetings? I find that's my biggest trigger.",
        reactions: {
            beer: 7,
            honey: 15,
        },
        comments: [
            {
                id: 1,
                user: 'TomFit',
                content:
                    'I use breathing exercises - 4 counts in, hold for 4, out for 4. Really helps!',
            },
        ],
    },
    {
        id: 4,
        user: {
            name: 'HealthyMike',
            avatar: friendPlaceholderImage,
        },
        date: '28.6. 2025',
        content:
            "6 months smoke-free today! 🎉 My advice: take it one day at a time and celebrate every small victory. You've got this!",
        reactions: {
            beer: 25,
            honey: 18,
        },
        comments: [
            {
                id: 1,
                user: 'Sarah_S',
                content:
                    "Amazing achievement! You're an inspiration to all of us starting this journey.",
            },
            {
                id: 2,
                user: 'JohnnyB',
                content: "Wow, 6 months! I can't wait to get there. Any tips for the 3-month mark?",
            },
        ],
    },
    {
        id: 5,
        user: {
            name: 'ZenMaster',
            avatar: friendPlaceholderImage,
        },
        date: '27.6. 2025',
        content:
            "Remember: every cigarette you don't smoke is a victory. Even if you slipup, tomorrow is a new day to start again. Be kind to yourself. 💪",
        reactions: {
            beer: 18,
            honey: 22,
        },
        comments: [],
    },
];
