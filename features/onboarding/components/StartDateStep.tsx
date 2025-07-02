import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';

import { useOnboardingForm } from '../context';

import { chevronLeftIcon } from '@/assets/icons';
import { colors } from '@/constants';

export interface StartDateStepProps {
    stepName: string;
}

const StartDateStep = ({ stepName }: StartDateStepProps) => {
    const { currentStep, nextStep, previousStep } = useOnboardingForm();
    const [date, setDate] = useState<Date>(new Date());

    const handleDateChange = useCallback((newDate?: Date) => {
        if (newDate) {
            setDate(newDate);
        }
    }, []);

    if (currentStep?.name !== stepName) {
        return null;
    }

    return (
        <View className="flex-1 flex-col justify-center">
            <View className="flex-1 flex-col justify-center">
                <View className="w-full flex-col items-center justify-center gap-2 mb-6">
                    <Text className="font-bold text-4xl">When did you start?</Text>
                </View>
                <DateTimePicker
                    display="inline"
                    value={date}
                    accentColor={colors.primary.DEFAULT}
                    themeVariant="light"
                    onChange={(_, newDate) => handleDateChange(newDate)}
                />
                <View className="w-full flex-row gap-2 mt-8">
                    <FabButton
                        color="secondary"
                        onPress={previousStep}
                        icon={chevronLeftIcon}
                        className="border-[1px] border-gray-300"
                    />
                    <Button fullWidth onPress={nextStep} disabled={false}>
                        Continue
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default StartDateStep;
