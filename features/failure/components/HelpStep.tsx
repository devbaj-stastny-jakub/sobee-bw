import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';

import { useFailureForm } from '../context/failureForm';

import { chevronRightIcon } from '@/assets/icons';
import { happyBeeImage } from '@/assets/images';
import { mockLearningItems } from '@/features/learning/data';

export interface HelpStepProps {
    step: number;
}

const HelpStep = ({ step }: HelpStepProps) => {
    const { addStep, nextStep, currentStep } = useFailureForm();

    useEffect(() => {
        addStep(step);
    }, [addStep, step]);

    if (currentStep !== step) {
        return null;
    }

    return (
        <View className="flex-1 flex-col">
            <View className="flex justify-center items-center">
                <Image source={happyBeeImage} className="w-full h-[150px]" resizeMode="contain" />
            </View>
            <View className="flex-col w-full items-center px-5">
                <Text className="text-3xl font-extrabold text-typography-primary">
                    It&apos;s about growth
                </Text>
                <Text className="mt-4 text-base text-typography-secondary">
                    {
                        'Reserve some time to understand your habit and find out what you can do to get better.\n\nLets explore some helpful ideas based on your cravings and previous failures...'
                    }
                </Text>
            </View>
            <View className="flex-col gap-4 mt-10">
                {mockLearningItems.slice(0, 3).map(({ id, image, title, description }) => (
                    <View className="flex-row gap-3 items-center w-full" key={id}>
                        <Image source={image} className="size-[50px] rounded-xl" />
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
            <View className="w-full flex-row pt-10 mt-auto">
                <Button onPress={nextStep} fullWidth href="/">
                    Keep going
                </Button>
            </View>
        </View>
    );
};

export default HelpStep;
