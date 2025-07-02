import React from 'react';
import { Image, TextInput as NativeTextInput, View } from 'react-native';

import { sendIcon } from '@/assets/icons';

export interface TextInputProps {
    value: string | null;
    onChange: (value: string | null) => void;
    placeholder?: string;
    sendIconSuffix?: boolean;
}

const TextInput = ({ placeholder, value, onChange, sendIconSuffix }: TextInputProps) => {
    return (
        <View className="h-[53px] w-full bg-background-white border-[1px] border-gray-300 rounded-xl flex-row overflow-hidden">
            <View className="flex-1 pl-3 py-2 flex-row items-center">
                <NativeTextInput
                    value={value === null ? '' : String(value)}
                    onChangeText={(text) => onChange(text)}
                    placeholder={placeholder}
                    className="flex-1 text-typography-primary placeholder:text-typography-secondary"
                />
                {sendIconSuffix && <Image source={sendIcon} className="size-6 mr-3" />}
            </View>
        </View>
    );
};

export default TextInput;
