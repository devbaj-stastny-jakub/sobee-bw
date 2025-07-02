import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { clsx } from 'clsx';

export interface BooleanTabSwitchProps {
    onSelect: (value: boolean) => void;
    value: boolean;
}

const BooleanTabSwitch = ({ onSelect, value }: BooleanTabSwitchProps) => {
    return (
        <View className="w-full flex-row gap-1 p-1 bg-background-section rounded-full">
            <Pressable
                onPress={() => onSelect(true)}
                className={clsx(
                    'flex-1 py-3 px-2 rounded-full flex-row justify-center items-center',
                    {
                        'bg-primary': value === true,
                    }
                )}
            >
                <Text
                    className={clsx('text-base font-semibold', {
                        'text-typography-primary': value === false,
                        'text-white': value === true,
                    })}
                >
                    Yes
                </Text>
            </Pressable>
            <Pressable
                onPress={() => onSelect(false)}
                className={clsx(
                    'flex-1 py-3 px-2 rounded-full flex-row justify-center items-center',
                    {
                        'bg-primary': value === false,
                    }
                )}
            >
                <Text
                    className={clsx('text-base font-semibold ', {
                        'text-white': value === false,
                        'text-typography-primary': value === true,
                    })}
                >
                    No
                </Text>
            </Pressable>
        </View>
    );
};

export default BooleanTabSwitch;
