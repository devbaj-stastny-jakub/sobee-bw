import React from 'react';
import { Image, Text, View } from 'react-native';

import { AchievementsTabs } from './_layout';

import { badgePlaceholderImage } from '@/assets/images';
import { generateMockBadges } from '@/features/achievements/data';
import TabPage from '@/features/layout/components/TabPage';

const mockBadges = generateMockBadges();
const featuredBadges = mockBadges.filter((badge) => badge.featured);
const allBadges = mockBadges;

const Badges = () => {
    return (
        <TabPage scrollable header={<AchievementsTabs />}>
            <View className="w-full my-4 flex-row justify-center">
                <Text className="text-typography-tertiary text-base font-medium">
                    Your most inspireble badges
                </Text>
            </View>
            <View className="flex-row w-full gap-3 justify-between items-center mb-6">
                {featuredBadges.map((badge, index) => (
                    <View className="flex-col items-center" key={badge.id}>
                        <Image
                            source={badgePlaceholderImage}
                            className={index === 1 ? 'size-36' : 'size-24'}
                            style={{ opacity: badge.earned ? 1 : 0.5 }}
                        />
                        <Text className="font-medium text-base text-typography-primary text-center">
                            {badge.name}
                        </Text>
                    </View>
                ))}
            </View>
            <View className="bg-background-white px-2 py-4 rounded-xl flex-row flex-wrap gap-y-8 justify-between">
                {allBadges.map((badge) => (
                    <View className="flex-col items-center w-1/3" key={badge.id}>
                        <Image
                            source={badgePlaceholderImage}
                            className="size-28"
                            style={{ opacity: badge.earned ? 1 : 0.5 }}
                        />
                        <Text
                            lineBreakMode="middle"
                            className="max-w-full font-medium text-base text-typography-primary text-center"
                        >
                            {badge.name}
                        </Text>
                    </View>
                ))}
            </View>
        </TabPage>
    );
};

export default Badges;
