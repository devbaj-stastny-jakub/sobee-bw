import React from 'react';
import { View } from 'react-native';
import { clsx } from 'clsx';

export interface StepperProps<T extends string | number> {
    steps: T[];
    currentStep: T;
}

const Stepper = <T extends string | number>({ currentStep, steps }: StepperProps<T>) => {
    return (
        <View className="flex-row gap-4">
            {steps.map((step) => (
                <View
                    key={step}
                    className={clsx('size-3 rounded-full', {
                        'bg-primary': step === currentStep,
                        'bg-background-section': step !== currentStep,
                    })}
                />
            ))}
        </View>
    );
};

export default Stepper;
