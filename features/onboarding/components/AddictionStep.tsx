import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Button from '@/components/Button';

import { useOnboardingForm } from '../context';

import { beerEmoji, cigaretEmoji, honeyEmoji } from '@/assets/images';

export interface AddictionStepProps {
    stepName: string;
}

const addictions = [
    {
        key: 'cigarettes',
        label: 'Cigarettes',
        icon: cigaretEmoji,
        disabled: false,
    },
    {
        key: 'alcohol',
        label: 'Alcohol',
        icon: beerEmoji,
        disabled: true,
    },
    {
        key: 'sugar',
        label: 'Sugar',
        icon: honeyEmoji,
        disabled: true,
    },
];

const AddictionStep = ({ stepName }: AddictionStepProps) => {
    const { currentStep, nextStep } = useOnboardingForm();
    const [selectedAddiction, setSelectedAddiction] = useState<string | null>(null);

    if (currentStep?.name !== stepName) return null;

    const handleSelectAddiction = (addiction: string) => {
        setSelectedAddiction(addiction);
        nextStep();
    };

    return (
        <View className="flex-1 flex-col justify-center">
            <View className="flex-1 flex-col justify-center">
                <View className="w-full flex-col items-center justify-center gap-2 mb-6">
                    <Text className="font-bold text-4xl">What is that?</Text>
                </View>
                <View className="self-center w-60 flex-col gap-2 justify-center items-center">
                    {addictions.map(({ key, label, icon, disabled }) => (
                        <Button
                            key={key}
                            prefixIcon={icon}
                            color={selectedAddiction === key ? 'primary' : 'secondary'}
                            className="border-2 border-primary self-center"
                            noTint
                            fullWidth
                            onPress={() => handleSelectAddiction(key)}
                            disabled={disabled}
                        >
                            {label}
                        </Button>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default AddictionStep;
