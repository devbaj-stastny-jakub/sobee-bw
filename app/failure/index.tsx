import React from 'react';
import { View } from 'react-native';

import FailureForm from '@/features/failure/components/FailureForm';
import { FailureFormContextProvider } from '@/features/failure/context/failureForm';
import ModalPage from '@/features/layout/components/ModalPage';

const CravingPage = () => {
    return (
        <ModalPage edges={['bottom', 'left', 'right', 'top']}>
            <View className="flex-col flex-1">
                <FailureFormContextProvider>
                    <FailureForm />
                </FailureFormContextProvider>
            </View>
        </ModalPage>
    );
};

export default CravingPage;
