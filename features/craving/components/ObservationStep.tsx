import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';
import Label from '@/components/Label';
import PillInput from '@/components/PillInput';

import { useCravingForm } from '../context/cravingForm';

import { chevronLeftIcon } from '@/assets/icons';

export interface ObservationStepProps {
    step: number;
}

const ObservationStep = ({ step }: ObservationStepProps) => {
    const { addStep, nextStep, currentStep, previousStep } = useCravingForm();

    const [whereNow, setWhereNow] = useState<string[]>([]);
    const [whatDoing, setWhatDoing] = useState<string[]>([]);
    const [triggeredBy, setTriggeredBy] = useState<string[]>([]);

    useEffect(() => {
        addStep(step);
    }, [addStep, step]);

    if (currentStep !== step) {
        return null;
    }

    return (
        <View className="flex-1 flex-col gap-7">
            <View className="flex-col">
                <Text className="text-base text-typography-secondary mt-4">
                    {`At what point did you start to feel the urge?\nYou don't need to focus on a physical location...\ne.g.: with friends, at a job interview...`}
                </Text>
            </View>
            <Label text="Where are you now?">
                <View className="w-full flex-col gap-2">
                    <PillInput values={whereNow} onChange={setWhereNow} />
                    <View className="flex-row gap-2 flex-wrap">
                        {whereNow.includes('In the office') ? null : (
                            <Pressable
                                onPress={() => setWhereNow([...whereNow, 'In the office'])}
                                className="py-2 px-4 border-[1px] border-gray-300 rounded-full self-start"
                            >
                                <Text className="text-base text-typography-primary font-semibold">
                                    In the office
                                </Text>
                            </Pressable>
                        )}
                        {whereNow.includes('With friends') ? null : (
                            <Pressable
                                onPress={() => setWhereNow([...whereNow, 'With friends'])}
                                className="py-2 px-4 border-[1px] border-gray-300 rounded-full self-start"
                            >
                                <Text className="text-base text-typography-primary font-semibold">
                                    With friends
                                </Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </Label>
            <Label text="What are you doing?">
                <PillInput values={whatDoing} onChange={setWhatDoing} />
            </Label>
            <Label text="What triggered craving?">
                <View className="w-full flex-col gap-2">
                    <PillInput values={triggeredBy} onChange={setTriggeredBy} />
                    <View className="flex-row gap-2 flex-wrap">
                        {triggeredBy.includes('Stress') ? null : (
                            <Pressable
                                onPress={() => setTriggeredBy([...triggeredBy, 'Stress'])}
                                className="py-2 px-4 border-[1px] border-gray-300 rounded-full self-start"
                            >
                                <Text className="text-base text-typography-primary font-semibold">
                                    Stress
                                </Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </Label>
            <View className="w-full flex-row mt-auto gap-3">
                <FabButton
                    color="secondary"
                    icon={chevronLeftIcon}
                    className="border-[1px] border-gray-200"
                    onPress={previousStep}
                />
                <Button fullWidth onPress={nextStep}>
                    Release stress
                </Button>
            </View>
        </View>
    );
};

export default ObservationStep;
