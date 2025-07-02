import React from 'react';
import { Image, Text, View } from 'react-native';

import { beeImage, honeyImage } from '@/assets/images';

const ResourcesSection = () => {
    return (
        <View className="flex-row justify-between">
            <View className="py-3 px-5 bg-background-white self-start rounded-[16px] flex flex-row items-center h-[44px] gap-1">
                <Text className="text-xl text-typography-primary font-medium">2</Text>
                <Text className="text-xl text-primary font-medium">x</Text>
                <Image source={beeImage} className="size-[24px]" />
            </View>
            <View className="py-3 px-5 bg-background-white self-start rounded-[16px] flex flex-row items-center h-[44px] gap-1">
                <Text className="text-xl text-typography-primary font-medium">37</Text>
                <Text className="text-xl text-primary font-medium">x</Text>
                <Image source={honeyImage} className="size-[24px]" />
            </View>
        </View>
    );
};

export default ResourcesSection;
