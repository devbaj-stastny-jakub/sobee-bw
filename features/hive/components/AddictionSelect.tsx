import React from 'react';
import { Image, View } from 'react-native';

import { chevronDownIcon, cigaretIcon } from '@/assets/icons';

const AddictionSelect = () => {
    return (
        <View className="bg-background-white p-1 h-[44px] rounded-full flex-row">
            <View className="h-full aspect-square bg-primary rounded-full flex-row items-center justify-center">
                <Image source={cigaretIcon} className="size-5" />
            </View>
            <View className="h-full aspect-square rounded-full flex-row items-center justify-center">
                <Image source={chevronDownIcon} className="size-4" />
            </View>
        </View>
    );
};

export default AddictionSelect;
