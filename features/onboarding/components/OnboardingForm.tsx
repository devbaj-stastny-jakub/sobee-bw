import React from 'react';
import { View } from 'react-native';

import AddictionStep from './AddictionStep';
import FormProgress from './FormProgress';
import IntroStep from './IntroStep';
import MeasuringStep from './MeasuringStep';
import StartDateStep from './StartDateStep';
import StepWrapper from './StepWrapper';

const OnboardingForm = () => {
    return (
        <View className="flex-1 flex-col">
            <StepWrapper step={{ name: 'intro', order: 1 }} Element={IntroStep} />
            <StepWrapper step={{ name: 'addiction', order: 2 }} Element={AddictionStep} />
            <StepWrapper step={{ name: 'startDate', order: 3 }} Element={StartDateStep} />
            <StepWrapper step={{ name: 'measuring', order: 4 }} Element={MeasuringStep} />
            <View className="mt-5">
                <FormProgress />
            </View>
        </View>
    );
};

export default OnboardingForm;
