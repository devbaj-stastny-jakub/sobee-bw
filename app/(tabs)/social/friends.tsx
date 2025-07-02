import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { SocialTabs } from './_layout';

import { friendPlaceholderImage } from '@/assets/images';
import { getRemainingFriends, getTopThree } from '@/features/community/data/mockFriends';
import TabPage from '@/features/layout/components/TabPage';

const Friends = () => {
    const topThree = getTopThree();
    const remainingFriends = getRemainingFriends();

    return (
        <TabPage header={<SocialTabs />}>
            <View className="w-full flex-col gap-3 items-center mt-4">
                <Text className="text-xl font-semibold text-typography-primary">
                    Leaderboard by streak
                </Text>
                <View className="flex-row gap-1">
                    <View className="h-1 rounded-full w-14 bg-primary" />
                    <View className="h-1 rounded-full w-14 bg-white" />
                    <View className="h-1 rounded-full w-14 bg-white" />
                </View>
                <View className="w-full flex-row justify-center items-end gap-5">
                    {/* 2nd place */}
                    <View className="flex-col items-center justify-center">
                        <Text className="text-base text-typography-tertiary font-medium mb-1">
                            #{topThree[1]?.rank}
                        </Text>
                        <Image
                            source={friendPlaceholderImage}
                            className="size-[60px] rounded-full border-4 border-white"
                        />
                        <Text className="text-xl font-semibold text-typography-primary mt-3 leading-none">
                            {topThree[1]?.streakDays} d.
                        </Text>
                        <Text className="text-base text-typography-tertiary font-medium leading-none mt-1">
                            {topThree[1]?.name}
                        </Text>
                    </View>
                    {/* 1st place */}
                    <View className="flex-col items-center justify-center">
                        <Text className="text-base text-typography-tertiary font-medium mb-1">
                            #{topThree[0]?.rank}
                        </Text>
                        <Image
                            source={friendPlaceholderImage}
                            className="size-[100px] rounded-full border-4 border-white"
                        />
                        <Text className="text-xl font-semibold text-typography-primary mt-3 leading-none">
                            {topThree[0]?.streakDays} d.
                        </Text>
                        <Text className="text-base text-typography-tertiary font-medium leading-none mt-1">
                            {topThree[0]?.name}
                        </Text>
                    </View>
                    {/* 3rd place */}
                    <View className="flex-col items-center justify-center">
                        <Text className="text-base text-typography-tertiary font-medium mb-1">
                            #{topThree[2]?.rank}
                        </Text>
                        <Image
                            source={friendPlaceholderImage}
                            className="size-[60px] rounded-full border-4 border-white"
                        />
                        <Text className="text-xl font-semibold text-typography-primary mt-3 leading-none">
                            {topThree[2]?.streakDays} d.
                        </Text>
                        <Text className="text-base text-typography-tertiary font-medium leading-none mt-1">
                            {topThree[2]?.name}
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView className="p-3 mt-6 bg-background-white rounded-xl flex-col gap-2 flex-1">
                <View className="flex-col gap-2 flex-1 pb-2">
                    {remainingFriends.map((friend) => (
                        <View
                            className="flex-row items-center gap-3 p-2 pl-4 rounded-lg bg-background-section h-14"
                            key={friend.id}
                        >
                            <Text className="text-base font-semibold text-typography-primary">
                                {friend.rank}#
                            </Text>
                            <Image
                                source={friendPlaceholderImage}
                                className="size-10 rounded-full"
                            />
                            <Text className="text-base font-medium text-typography-primary">
                                {friend.name}
                            </Text>
                            <Text className="text-lg text-typography-primary font-medium ml-auto">
                                {friend.streakDays} d.
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </TabPage>
    );
};

export default Friends;
