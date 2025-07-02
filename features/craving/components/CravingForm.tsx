import React from 'react';
import { View } from 'react-native';

import Stepper from '@/components/Stepper';

import { useCravingForm } from '../context/cravingForm';

import ExerciseStep from './ExerciseStep';
import IntroStep from './IntroStep';
import ObservationStep from './ObservationStep';

const CravingForm = () => {
    const { steps, currentStep } = useCravingForm();

    return (
        <View className="flex-1 flex-col">
            <IntroStep step={1} />
            <ObservationStep step={2} />
            <ExerciseStep step={3} />
            <View className="flex-row w-full justify-center mt-5">
                <Stepper steps={steps} currentStep={currentStep} />
            </View>
        </View>
    );
};

export default CravingForm;
