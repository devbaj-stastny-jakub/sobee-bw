import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { clsx } from 'clsx';

export interface DoubleSwitchProps<T extends string> {
    onSelect: (value: T) => void;
    value: T;
    options: [T, T];
}

const DoubleSwitch = <T extends string>({ onSelect, value, options }: DoubleSwitchProps<T>) => {
    return (
        <View className="w-full flex-row gap-1 p-1 bg-background-section rounded-full">
            <Pressable
                onPress={() => onSelect(options[0])}
                className={clsx(
                    'flex-1 py-3 px-2 rounded-full flex-row justify-center items-center',
                    {
                        'bg-primary': value === options[0],
                    }
                )}
            >
                <Text
                    className={clsx('text-base font-semibold', {
                        'text-typography-primary': value === options[1],
                        'text-white': value === options[0],
                    })}
                >
                    {options[0]}
                </Text>
            </Pressable>
            <Pressable
                onPress={() => onSelect(options[1])}
                className={clsx(
                    'flex-1 py-3 px-2 rounded-full flex-row justify-center items-center',
                    {
                        'bg-primary': value === options[1],
                    }
                )}
            >
                <Text
                    className={clsx('text-base font-semibold ', {
                        'text-white': value === options[1],
                        'text-typography-primary': value === options[0],
                    })}
                >
                    {options[1]}
                </Text>
            </Pressable>
        </View>
    );
};

export default DoubleSwitch;
