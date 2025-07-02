import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import TextInput from '@/components/TextInput';

import { SocialTabs } from './_layout';

import { beerEmoji, honeyEmoji } from '@/assets/images';
import { mockPosts } from '@/features/community/data';
import TabPage from '@/features/layout/components/TabPage';

const Community = () => {
    const [message, setMessage] = useState<string | null>(null);
    return (
        <TabPage scrollable header={<SocialTabs />}>
            <View className="flex-col flex-1 w-full gap-8">
                <View>
                    <TextInput
                        placeholder="Do you want to share something?"
                        value={message}
                        onChange={setMessage}
                        sendIconSuffix
                    />
                </View>
                {mockPosts.map(({ id, user, date, content, reactions, comments }) => (
                    <View className="flex-col w-full" key={id}>
                        <View className="p-4 bg-background-white rounded-xl rounded-br-none flex-col gap-2">
                            <View className="flex-row items-center gap-2">
                                <Image
                                    source={user.avatar}
                                    className="size-12 rounded-full border-4 border-white"
                                />
                                <View className="flex-col">
                                    <Text className="text-typography-primary text-base font-medium">
                                        {user.name}
                                    </Text>
                                    <Text className="text-typography-primary text-xs">{date}</Text>
                                </View>
                            </View>
                            <Text className="text-sm text-typography-primary">{content}</Text>
                            <View className="flex-row gap-3 items-center mt-1">
                                <View className="flex-row gap-1 p-2">
                                    <Image source={beerEmoji} className="size-5" />
                                    <Text>{reactions.beer}</Text>
                                </View>
                                <View className="flex-row gap-1 p-2">
                                    <Image source={honeyEmoji} className="size-5" />
                                    <Text>{reactions.honey}</Text>
                                </View>
                                <Text className="text-sm text-typography-secondary ml-auto">
                                    Add comment
                                </Text>
                            </View>
                        </View>
                        {comments.length > 0 && (
                            <View className="ml-5 bg-background-section p-3 rounded-b-xl flex-col gap-1">
                                {comments.map(({ id, user, content }) => (
                                    <View key={id} className="mb-2 last:mb-0">
                                        <Text className="text-sm text-typography-primary font-medium">
                                            {user}
                                        </Text>
                                        <Text className="text-sm text-typography-primary">
                                            {content}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </TabPage>
    );
};

export default Community;
