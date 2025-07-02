import React, { useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';

import BooleanTabSwitch from '@/components/BooleanTabSwitch';
import Button from '@/components/Button';
import EmojiFeedback, { EmojiFeedbackValue } from '@/components/EmojiFeedback';

import { peyImage } from '@/assets/images';
import ModalPage from '@/features/layout/components/ModalPage';

const SuccessPage = () => {
    const [emojiValue, setEmojiValue] = useState<EmojiFeedbackValue | null>(null);
    const [isWillingToDoNextTime, setIsWillingToDoNextTime] = useState<boolean>(true);

    const isFormValid = useMemo(() => {
        return emojiValue !== null && isWillingToDoNextTime !== null;
    }, [emojiValue, isWillingToDoNextTime]);

    return (
        <ModalPage edges={['bottom', 'left', 'right', 'top']} closeButtonHref={'/'}>
            <View className="flex justify-center items-center">
                <Image source={peyImage} className="w-full h-[200px]" resizeMode="contain" />
            </View>
            <View className="flex-col w-full items-center">
                <Text className="text-3xl font-extrabold text-typography-primary">Great job!!</Text>
            </View>
            <View className="flex-col w-full items-start mt-4 px-5">
                <Text className="text-base text-typography-secondary font-medium">
                    How effective do you think the exercise was?
                </Text>
                <View className="flex-row w-full  mt-5">
                    <EmojiFeedback value={emojiValue} onSelect={setEmojiValue} />
                </View>
            </View>
            <View className="flex-col w-full items-start mt-10  px-5">
                <Text className="text-base text-typography-secondary font-medium">
                    Are you willing to do it next time?
                </Text>
                <View className="flex-row w-full mt-5">
                    <BooleanTabSwitch
                        value={isWillingToDoNextTime}
                        onSelect={setIsWillingToDoNextTime}
                    />
                </View>
            </View>
            <View className="w-full flex-row mt-auto pt-2">
                <Button href="/" fullWidth disabled={!isFormValid}>
                    Finish
                </Button>
            </View>
        </ModalPage>
    );
};

export default SuccessPage;
