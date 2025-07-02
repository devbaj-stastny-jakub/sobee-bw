import React, { useEffect, useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';

import BooleanTabSwitch from '@/components/BooleanTabSwitch';
import Button from '@/components/Button';
import EmojiFeedback, { EmojiFeedbackValue } from '@/components/EmojiFeedback';
import Label from '@/components/Label';
import NumberInput from '@/components/NumberInput';

import { sadBeeImage } from '@/assets/images';
import ModalPage from '@/features/layout/components/ModalPage';
import { useStreak } from '@/shared/streak';

const FailurePage = () => {
    const [emojiValue, setEmojiValue] = useState<EmojiFeedbackValue | null>(null);
    const [isWillingToDoNextTime, setIsWillingToDoNextTime] = useState<boolean>(true);
    const [resourceCount, setResourceCount] = useState<number | null>(null);
    const { startNewStreak } = useStreak();

    useEffect(() => {
        const run = async () => {
            await startNewStreak(new Date());
        };
        run();
    }, []);

    const isFormValid = useMemo(() => {
        return emojiValue !== null && isWillingToDoNextTime !== null && resourceCount !== null;
    }, [emojiValue, isWillingToDoNextTime, resourceCount]);

    return (
        <ModalPage edges={['left', 'right', 'top', 'bottom']} closeButtonHref={'/'}>
            <View className="flex-col w-full min-h-full">
                <View className="flex justify-center items-center">
                    <Image source={sadBeeImage} className="w-full h-[150px]" resizeMode="contain" />
                </View>
                <View className="flex-col w-full items-center px-5">
                    <Text className="text-3xl font-extrabold text-typography-primary">Its ok</Text>
                    <Text className="mt-4 text-base text-typography-secondary">
                        {
                            'Slipups are natural part of the process. It is important to stay motivated and keep going.\n\nYou should check out learning centre for some tips'
                        }
                    </Text>
                </View>
                <View className="flex-col w-full items-start mt-10 px-5">
                    <Text className="text-base text-typography-secondary font-medium">
                        How effective do you think the exercise was?
                    </Text>
                    <View className="flex-row w-full  mt-2">
                        <EmojiFeedback value={emojiValue} onSelect={setEmojiValue} />
                    </View>
                </View>
                <View className="flex-col w-full items-start mt-10 px-5">
                    <Text className="text-base text-typography-secondary font-medium">
                        Are you willing to do it next time?
                    </Text>
                    <View className="flex-row w-full mt-2">
                        <BooleanTabSwitch
                            value={isWillingToDoNextTime}
                            onSelect={setIsWillingToDoNextTime}
                        />
                    </View>
                </View>
                <View className="flex-col w-full items-start mt-10 px-5">
                    <Label text="How many cigarettes did you smoke?">
                        <NumberInput
                            min={1}
                            max={100000}
                            value={resourceCount}
                            onChange={setResourceCount}
                        />
                    </Label>
                </View>
                <View className="w-full flex-row pt-10 mt-auto">
                    <Button href="/" fullWidth disabled={!isFormValid}>
                        Keep going
                    </Button>
                </View>
            </View>
        </ModalPage>
    );
};

export default FailurePage;
