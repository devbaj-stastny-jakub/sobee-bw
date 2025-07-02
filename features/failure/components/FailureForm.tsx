import React from 'react';
import { View } from 'react-native';

import Stepper from '@/components/Stepper';

import { useFailureForm } from '../context/failureForm';

import DiaryStep from './DiaryStep';
import HelpStep from './HelpStep';
import ObservationStep from './ObservationStep';

const FailureForm = () => {
    const { steps, currentStep } = useFailureForm();

    return (
        <View className="flex-1 flex-col">
            <DiaryStep step={1} />
            <ObservationStep step={2} />
            <HelpStep step={3} />
            <View className="flex-row w-full justify-center mt-5">
                <Stepper steps={steps} currentStep={currentStep} />
            </View>
        </View>
    );
};

export default FailureForm;
