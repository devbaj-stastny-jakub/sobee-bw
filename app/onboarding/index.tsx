import React from 'react';
import { View } from 'react-native';

import BlankPage from '@/features/layout/components/BlankPage';
import OnboardingForm from '@/features/onboarding/components/OnboardingForm';
import { OnboardingFormContextProvider } from '@/features/onboarding/context';

const OnboardingPage = () => {
    return (
        <BlankPage edges={['bottom', 'left', 'right', 'top']}>
            <View className="flex-col flex-1">
                <OnboardingFormContextProvider>
                    <OnboardingForm />
                </OnboardingFormContextProvider>
            </View>
        </BlankPage>
    );
};

export default OnboardingPage;
