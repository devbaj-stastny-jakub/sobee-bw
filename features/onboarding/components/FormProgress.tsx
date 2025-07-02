import React, { useMemo } from 'react';
import { View } from 'react-native';

import LinearProgress from '@/components/LinearProgress';

import { useOnboardingForm } from '../context';

const FormProgress = () => {
    const { steps, currentStep } = useOnboardingForm();

    const progress = useMemo(() => {
        const totalSteps = steps.size;
        if (totalSteps === 0) return 0;
        if (!currentStep) return 0;
        const currentStepIndex = currentStep.order;
        return Math.min(currentStepIndex / totalSteps, 1);
    }, [steps, currentStep]);

    return (
        <View className="flex-row w-full justify-center ">
            <LinearProgress progress={progress} />
        </View>
    );
};

export default FormProgress;
