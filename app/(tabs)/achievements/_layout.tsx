import React from 'react';
import { View } from 'react-native';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';

import Button from '@/components/Button';

import { badgeIcon, flagIcon } from '@/assets/icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <TabSlot />
            <TabList className="hidden">
                <TabTrigger name="badges" href="/achievements/badges" />
                <TabTrigger name="milestones" href="/achievements/milestones" />
            </TabList>
        </Tabs>
    );
};

export const AchievementsTabs = () => {
    return (
        <View className="flex-row gap-2 w-full">
            <Button
                href="/achievements/badges"
                prefixIcon={badgeIcon}
                color={({ active }) => (active ? 'primary' : 'secondary')}
            >
                Badges
            </Button>
            <Button
                href="/achievements/milestones"
                prefixIcon={flagIcon}
                color={({ active }) => (active ? 'primary' : 'secondary')}
            >
                Milestones
            </Button>
        </View>
    );
};

export default TabsLayout;
