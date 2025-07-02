import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { useOnboardingForm } from '../context';

import { happyBeeImage } from '@/assets/images';

export interface IntroStepProps {
    stepName: string;
}

const IntroStep = ({ stepName }: IntroStepProps) => {
    const { currentStep, nextStep } = useOnboardingForm();

    if (currentStep === undefined || currentStep?.name !== stepName) {
        return null;
    }

    return (
        <Pressable onPress={nextStep} className="flex-1 flex-col">
            <View className="h-[90%] flex-col justify-center">
                <View className="w-full flex-row justify-center">
                    <Image source={happyBeeImage} className="size-[200px]" resizeMode="contain" />
                </View>
                <View className="w-full flex-col items-center justify-center gap-2 mt-12 mb-10">
                    <Text className="font-bold text-4xl">Congratulations!</Text>
                    <Text className="text-lg leading-6 text-typography-secondary font-medium text-center">
                        You made the first step and the most important one - make an initiative
                    </Text>
                </View>
            </View>
            <View className=" h-[10%] w-full flex-row justify-center">
                <Text className="text-xl font-semibold text-gray-300">tap to continue...</Text>
            </View>
        </Pressable>
    );
};

export default IntroStep;
