import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

export interface LabelProps {
    text: string;
    children?: ReactNode;
}

const Label = ({ text, children }: LabelProps) => {
    return (
        <View className="flex-col gap-2 w-full">
            <Text className="text-base text-typography-secondary font-semibold">{text}</Text>
            <View className="flex-row">{children}</View>
        </View>
    );
};

export default Label;
