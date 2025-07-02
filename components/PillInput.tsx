import React, { useState } from 'react';
import { Pressable, Text, TextInput } from 'react-native';

export interface PillInputProps {
    values: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
}

const PillInput = ({ onChange, values, placeholder }: PillInputProps) => {
    const [textValue, setTextValue] = useState('');

    const handleRemoveValue = (value: string) => {
        const newValues = values.filter((v) => v !== value);
        onChange(newValues);
    };

    const handleAddValue = (value: string) => {
        value = value.trim();

        if (value.length === 0) {
            setTextValue('');
            return;
        }

        if (values.includes(value)) {
            setTextValue('');
            return;
        }

        onChange([...values, value]);
        setTextValue('');
    };

    return (
        <Pressable className="w-full px-3 py-2 min-h-[53px] bg-background-white border-[1px] border-gray-300 rounded-xl flex-row items-center flex-wrap gap-2">
            {values.map((value, index) => (
                <Pressable
                    onPress={() => handleRemoveValue(value)}
                    className="py-2 px-4 border-[1px] border-gray-300 rounded-full self-start"
                    key={value + index}
                >
                    <Text className="text-base text-typography-primary font-semibold">{value}</Text>
                </Pressable>
            ))}
            <TextInput
                value={textValue}
                className="flex-1 min-w-28 h-[37px] placeholder:text-typography-secondary"
                onChange={(e) => setTextValue(e.nativeEvent.text)}
                placeholder={placeholder || 'Type value and press enter...'}
                onSubmitEditing={(e) => handleAddValue(e.nativeEvent.text)}
                returnKeyType="done"
            />
        </Pressable>
    );
};

export default PillInput;
