import React from 'react';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import { calendarIcon, homeIcon, peopleGroupIcon, settingsIcon, trophyIcon } from '@/assets/icons';
import TabBarItem from '@/features/layout/components/TabBarItem';

const TabsLayout = () => {
    return (
        <Tabs>
            <TabSlot />
            <TabList className="absolute left-1/2 -translate-x-1/2 bottom-7 bg-white p-2 rounded-full flex flex-row gap-2">
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
            </TabList>
        </Tabs>
    );
};

export default TabsLayout;
