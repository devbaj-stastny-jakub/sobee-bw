import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { Streak } from '@/db/entities';
import { getSinceOfStreak, useStreak } from '@/shared/streak';

const getUnits = (currentStreak: Streak | null) => {
    if (!currentStreak) return [];

    const [firstUnit, secondUnit, thirdUnit] = [
        { unit: '', value: 0 },
        { unit: '', value: 0 },
        { unit: '', value: 0 },
    ];
    const since = getSinceOfStreak(currentStreak);

    const unitOrder = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    const biggestUnit = Object.keys(since).reduce((a, b) =>
        since[a as keyof typeof since] > since[b as keyof typeof since] ? a : b
    ) as keyof typeof since;

    thirdUnit.unit = unitOrder[Math.min(unitOrder.length - 1, unitOrder.indexOf(biggestUnit) + 2)];
    secondUnit.unit = unitOrder[unitOrder.indexOf(thirdUnit.unit) - 1];
    firstUnit.unit = unitOrder[unitOrder.indexOf(secondUnit.unit) - 1];

    firstUnit.value = since[firstUnit.unit as keyof typeof since];
    secondUnit.value = since[secondUnit.unit as keyof typeof since];
    thirdUnit.value = since[thirdUnit.unit as keyof typeof since];

    return [firstUnit, secondUnit, thirdUnit];
};

const StreakClock = () => {
    const { currentStreak, isLoading } = useStreak();
    const [units, setUnits] = React.useState(() => getUnits(currentStreak));

    useEffect(() => {
        if (isLoading) return;
        const interval = setInterval(() => {
            setUnits(getUnits(currentStreak));
        }, 1000);
        return () => clearInterval(interval);
    }, [currentStreak, isLoading]);

    return (
        <View className="flex-row my-5 justify-center items-center overflow-hidden">
            <View className="flex-col items-center w-1/3 pr-[10px] relative overflow-visible">
                <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    className="text-[70px] font-extrabold  whitespace-nowrap"
                >
                    {units[0]?.value ? units[0].value.toString().padStart(2, '0') : '00'}
                </Text>
                <Text className="text-base text-typography-tertiary">
                    {units[0]?.unit || 'years'}
                </Text>
                <View className="bg-primary radius-full w-[2px] h-[40px] mb-7 absolute right-0 top-8" />
            </View>
            <View className="flex-col items-center w-1/3 px-[10px] overflow-visible">
                <Text numberOfLines={1} ellipsizeMode="clip" className="text-[70px] font-extrabold">
                    {units[1]?.value ? units[1].value.toString().padStart(2, '0') : '00'}
                </Text>
                <Text className="text-base text-typography-tertiary">{units[1]?.unit}</Text>
            </View>

            <View className="flex-col items-center w-1/3 pl-[10px] relative overflow-visible">
                <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    className="text-[70px] font-extrabold  whitespace-nowrap"
                >
                    {units[2]?.value ? units[2].value.toString().padStart(2, '0') : '00'}
                </Text>
                <Text className="text-base text-typography-tertiary">{units[2]?.unit}</Text>
                <View className="bg-primary radius-full w-[2px] h-[40px] mb-7 absolute left-0 top-8" />
            </View>
        </View>
    );
};

// <View className="bg-primary radius-full w-[2px] h-[40px] mb-7" />

export default StreakClock;
