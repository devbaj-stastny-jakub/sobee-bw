import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@/components/Button';

import { useCravingForm } from '../context/cravingForm';

import { peyImage } from '@/assets/images';

export interface IntroStepProps {
    step: number;
}

const IntroStep = ({ step }: IntroStepProps) => {
    const { addStep, nextStep, currentStep } = useCravingForm();

    useEffect(() => {
        addStep(step);
    }, [addStep, step]);

    if (currentStep !== step) {
        return null;
    }

    return (
        <View className="flex-1 flex-col">
            <View className="flex-col px-5">
                <Text className="font-bold text-4xl">Make a</Text>
                <Text className="font-extrabold text-5xl uppercase">change</Text>
                <Text className="text-base text-typography-secondary mt-4">
                    With a little help, you can identify your habit cycle and improve!
                </Text>
            </View>
            <View className="flex justify-center items-center">
                <Image source={peyImage} className="w-full h-[300px]" resizeMode="contain" />
            </View>
            <View className="w-full flex-row mt-auto">
                <Button fullWidth onPress={nextStep}>
                    Continue
                </Button>
            </View>
        </View>
    );
};

export default IntroStep;
