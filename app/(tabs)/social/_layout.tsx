import React from 'react';
import { View } from 'react-native';
import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';

import { addUserIcon, heartIcon, peopleIcon } from '@/assets/icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <TabSlot />
            <TabList className="hidden">
                <TabTrigger name="social-index" href="/social" />
                <TabTrigger name="community" href="/social/community" />
                <TabTrigger name="friends" href="/social/friends" />
            </TabList>
        </Tabs>
    );
};

export const SocialTabs = () => {
    return (
        <View className="flex-row gap-2 w-full">
            <Button
                href="/social/friends"
                prefixIcon={heartIcon}
                color={({ active }) => (active ? 'primary' : 'secondary')}
            >
                Friends
            </Button>
            <Button
                href="/social/community"
                prefixIcon={peopleIcon}
                color={({ active }) => (active ? 'primary' : 'secondary')}
            >
                Community
            </Button>
            <View className="ml-auto">
                <FabButton icon={addUserIcon} color="secondary" />
            </View>
        </View>
    );
};

export default TabsLayout;
