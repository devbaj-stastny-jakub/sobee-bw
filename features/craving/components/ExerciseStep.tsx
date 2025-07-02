import React, { useEffect, useMemo } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@/components/Button';

import { useCravingForm } from '../context/cravingForm';
import { exercises } from '../data';

import { happyBeeImage } from '@/assets/images';

export interface ExerciseStepProps {
    step: number;
}

const ExerciseStep = ({ step }: ExerciseStepProps) => {
    const { addStep, nextStep, currentStep } = useCravingForm();
    const exerciseIdx = useMemo(() => Math.floor(Math.random() * exercises.length), []);

    useEffect(() => {
        addStep(step);
    }, [addStep, step]);

    if (currentStep !== step) {
        return null;
    }

    const currentExercise = exercises[exerciseIdx];

    return (
        <View className="flex-1 flex-col">
            <Image source={happyBeeImage} className="w-full h-[150px]" resizeMode="contain" />
            <View className="mt-4">
                <Text className="font-extrabold text-4xl text-center">{currentExercise.title}</Text>
                <Text className="font-semibold text-xl text-center mt-2">{`This is what you are going to do...`}</Text>
            </View>
            <View className="flex-col gap-2 mt-6">
                {currentExercise.steps.map((desc, idx) => (
                    <View
                        key={idx}
                        className="flex-row items-center gap-2 py-2 px-4 bg-background-section rounded-lg"
                    >
                        <Text className="text-lg font-semibold">{idx + 1}.</Text>
                        <Text className="text-base">{desc}</Text>
                    </View>
                ))}
            </View>
            <View className="w-full flex-col mt-auto gap-3">
                <View className="flex-row">
                    <Button href="/craving/success" fullWidth onPress={nextStep}>
                        I made it through
                    </Button>
                </View>
                <View className="flex-row">
                    <Button
                        href="/craving/failure"
                        fullWidth
                        onPress={nextStep}
                        color={'secondary'}
                        className="border-[1px] border-gray-300"
                    >
                        I slipped
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default ExerciseStep;
