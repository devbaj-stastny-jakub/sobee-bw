import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import { clsx } from 'clsx';

import {
    badFaceEmojiImage,
    neutralFaceEmojiImage,
    smileFaceEmojiImage,
    starsFaceEmojiImage,
} from '@/assets/images';

export type EmojiFeedbackValue = 'useless' | 'not_bad' | 'helped' | 'life_saver';

export interface EmojiFeedbackProps {
    onSelect: (value: EmojiFeedbackValue) => void;
    value: EmojiFeedbackValue | null;
}

const possibleValues: EmojiFeedbackValue[] = ['useless', 'not_bad', 'helped', 'life_saver'];
const emojiValueToImage: Record<EmojiFeedbackValue, ImageSourcePropType> = {
    useless: badFaceEmojiImage,
    not_bad: neutralFaceEmojiImage,
    helped: smileFaceEmojiImage,
    life_saver: starsFaceEmojiImage,
};
const emojiValueToText: Record<EmojiFeedbackValue, string> = {
    useless: 'useless',
    not_bad: 'not\nbad',
    helped: 'helped',
    life_saver: 'life\nsaver',
};

const EmojiFeedback = ({ onSelect, value }: EmojiFeedbackProps) => {
    const handleSelect = (emojiValue: EmojiFeedbackValue) => {
        if (value === emojiValue) return;
        onSelect(emojiValue);
    };

    return (
        <View className="flex-row justify-between gap-2 w-full">
            {possibleValues.map((emojiValue) => (
                <Pressable
                    onPress={() => handleSelect(emojiValue)}
                    key={emojiValue}
                    className={clsx(
                        'flex-col items-center gap-2 bg-background-section rounded-full px-2 pt-3 pb-5 w-[60px]',
                        {
                            'bg-primary': value === emojiValue,
                        }
                    )}
                >
                    <Image source={emojiValueToImage[emojiValue]} className="size-8" />
                    <Text
                        className={clsx(
                            'text-xs font-medium text-typography-secondary text-center',
                            {
                                'text-white': value === emojiValue,
                            }
                        )}
                    >
                        {emojiValueToText[emojiValue]}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default EmojiFeedback;
