import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from '@/components/Button';
import Label from '@/components/Label';
import NumberInput from '@/components/NumberInput';

import { useFailureForm } from '../context/failureForm';

import { sadBeeImage } from '@/assets/images';
import { colors } from '@/constants';

export interface IntroStepProps {
    step: number;
}

const DiaryStep = ({ step }: IntroStepProps) => {
    const { addStep, nextStep, currentStep } = useFailureForm();
    const [date, setDate] = useState<Date>(new Date());

    const [resourceCount, setResourceCount] = useState<number | null>(null);

    const isFormValid = useMemo(() => {
        return resourceCount !== null;
    }, [resourceCount]);

    const handleDateChange = useCallback((newDate?: Date) => {
        if (newDate) {
            setDate(newDate);
        }
    }, []);

    useEffect(() => {
        addStep(step);
    }, [addStep, step]);

    if (currentStep !== step) {
        return null;
    }

    return (
        <View className="flex-1 flex-col">
            <View className="flex justify-center items-center">
                <Image source={sadBeeImage} className="w-full h-[150px]" resizeMode="contain" />
            </View>
            <View className="flex-col w-full items-center px-5">
                <Text className="text-3xl font-extrabold text-typography-primary">Its ok</Text>
                <Text className="mt-4 text-base text-typography-secondary">
                    {
                        'Slipups are natural part of the process. It is important to stay motivated and keep going.\n\nYou should check out learning centre for some tips'
                    }
                </Text>
            </View>
            <View className="flex-col w-full items-start mt-10 px-5">
                <Label text="How many cigarettes did you smoke?">
                    <NumberInput
                        min={1}
                        max={100000}
                        value={resourceCount}
                        onChange={setResourceCount}
                    />
                </Label>
            </View>
            <View className="flex-col w-full items-start mt-10 px-5">
                <Text className="text-base text-typography-secondary font-medium">
                    When did it happen?
                </Text>
                <View className="flex-row w-full mt-2">
                    <DateTimePicker
                        display="spinner"
                        value={date}
                        accentColor={colors.primary.DEFAULT}
                        themeVariant="light"
                        onChange={(_, newDate) => handleDateChange(newDate)}
                    />
                </View>
            </View>
            <View className="w-full flex-row pt-10 mt-auto">
                <Button onPress={nextStep} fullWidth disabled={!isFormValid}>
                    Keep going
                </Button>
            </View>
        </View>
    );
};

export default DiaryStep;
