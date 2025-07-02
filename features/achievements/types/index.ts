export type Badge = {
    id: number;
    name: string;
    description: string;
    earned: boolean;
    featured: boolean;
    category: 'milestone' | 'social' | 'wellness' | 'habit' | 'learning';
    earnedDate?: Date;
};
