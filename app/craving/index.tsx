import React from 'react';
import { View } from 'react-native';

import CravingForm from '@/features/craving/components/CravingForm';
import { CravingFormContextProvider } from '@/features/craving/context/cravingForm';
import ModalPage from '@/features/layout/components/ModalPage';

const CravingPage = () => {
    return (
        <ModalPage edges={['bottom', 'left', 'right', 'top']} closeButtonHref={'/'}>
            <View className="flex-col flex-1">
                <CravingFormContextProvider>
                    <CravingForm />
                </CravingFormContextProvider>
            </View>
        </ModalPage>
    );
};

export default CravingPage;
