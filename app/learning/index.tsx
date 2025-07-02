import React from 'react';
import { Image, Text, View } from 'react-native';

import FabButton from '@/components/FabButton';

import { chevronRightIcon } from '@/assets/icons';
import ModalPage from '@/features/layout/components/ModalPage';
import { mockLearningItems } from '@/features/learning/data';

const LearningPage = () => {
    return (
        <ModalPage scrollable title={`Master the\nprocess`}>
            <View className="flex-col gap-4 mt-3 min-h-full">
                {mockLearningItems.map(({ id, image, title, description }) => (
                    <View className="flex-row gap-3 items-center w-full" key={id}>
                        <Image source={image} className="size-[70px] rounded-xl" />
                        <View className="flex-1">
                            <Text className="text-xl font-semibold text-typography-primary">
                                {title}
                            </Text>
                            <Text
                                className="text-base text-typography-secondary"
                                ellipsizeMode="tail"
                                numberOfLines={1}
                            >
                                {description}
                            </Text>
                        </View>
                        <View className="ml-auto">
                            <FabButton color="secondary" icon={chevronRightIcon} />
                        </View>
                    </View>
                ))}
            </View>
        </ModalPage>
    );
};

export default LearningPage;
