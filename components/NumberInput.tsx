import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

import { minusIcon, plusIcon } from '@/assets/icons';
import { colors } from '@/constants';

export interface NumberInputProps {
    value: number | null;
    onChange: (value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
}

const NumberInput = ({ placeholder, value, onChange, max, min, step = 1 }: NumberInputProps) => {
    const handleIncrease = () => {
        if (value === null) {
            if (max === undefined) {
                onChange(step);
                return;
            }
            onChange(Math.min(step, max));
            return;
        }

        if (value !== null) {
            if (max !== undefined && value + step > max) {
                onChange(max);
                return;
            }
            onChange(value + step);
        }
    };
    const handleDecrease = () => {
        if (value === null) {
            if (min === undefined) {
                onChange(-step);
                return;
            }
            onChange(Math.max(-step, min));
            return;
        }

        if (value !== null) {
            if (min !== undefined && value - step < min) {
                onChange(min);
                return;
            }
            onChange(value - step);
        }
    };
    const handleInputChange = (value: string) => {
        value = value.trim();

        if (value.length === 0) {
            onChange(null);
            return;
        }
        const newValue = Number(value);
        if (isFinite(newValue) === false) {
            onChange(null);
            return;
        }
        if (!isNaN(newValue)) {
            onChange(newValue);
        }
    };

    return (
        <View className="h-[53px] w-full bg-background-white border-[1px] border-gray-300 rounded-xl flex-row overflow-hidden">
            <View className="flex-1 pl-3 py-2">
                <TextInput
                    value={value === null ? '' : String(value)}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                    placeholder={placeholder}
                    className="flex-1 text-typography-primary placeholder:text-typography-secondary"
                />
            </View>

            <View className="flex-row border-l-[1px] border-gray-300 shrink-0">
                <Pressable
                    onPress={handleDecrease}
                    className="h-full aspect-square justify-center items-center active:bg-gray-100"
                >
                    <Image
                        source={minusIcon}
                        className="size-6"
                        tintColor={colors.typography.primary}
                    />
                </Pressable>
                <View className="w-[1px] bg-gray-300 h-8 self-center" />
                <Pressable
                    onPress={handleIncrease}
                    className="h-full aspect-square justify-center items-center active:bg-gray-100"
                >
                    <Image
                        source={plusIcon}
                        className="size-6"
                        tintColor={colors.typography.primary}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default NumberInput;
