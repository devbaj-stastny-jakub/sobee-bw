import React from 'react';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';

import { calendarIcon, homeIcon, peopleGroupIcon, settingsIcon, trophyIcon } from '@/assets/icons';
import TabBarItem from '@/features/layout/components/TabBarItem';
import TabBarList from '@/features/layout/components/TabBarList';

const TabsLayout = () => {
    return (
        <Tabs>
            <TabSlot />
            <TabList asChild>
                <TabBarList>
                    <TabTrigger name="achievements" href="/achievements" asChild>
                        <TabBarItem icon={trophyIcon} />
                    </TabTrigger>
                    <TabTrigger name="calendar" href="/calendar" asChild>
                        <TabBarItem icon={calendarIcon} />
                    </TabTrigger>
                    <TabTrigger name="index" href="/" asChild>
                        <TabBarItem icon={homeIcon} />
                    </TabTrigger>
                    <TabTrigger name="social" href="/social" asChild>
                        <TabBarItem icon={peopleGroupIcon} />
                    </TabTrigger>
                    <TabTrigger name="settings" href="/settings" asChild>
                        <TabBarItem icon={settingsIcon} />
                    </TabTrigger>
                </TabBarList>
            </TabList>
        </Tabs>
    );
};

export default TabsLayout;
