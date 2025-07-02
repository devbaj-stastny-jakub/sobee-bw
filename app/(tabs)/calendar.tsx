import React, { useLayoutEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';

import { calendarIcon, chevronDownIcon, dangerIcon } from '@/assets/icons';
import TabPage from '@/features/layout/components/TabPage';

const Calendar = () => {
    const daysWrapperRef = useRef<View>(null);
    const [dayCellSize, setDayCellSize] = useState(0);

    useLayoutEffect(() => {
        if (!daysWrapperRef.current) return;
        daysWrapperRef.current.measure((_x, _y, width) => {
            const cellSize = width / 7 - 1.7;
            setDayCellSize(cellSize);
        });
    }, []);

    return (
        <TabPage
            scrollable
            header={
                <View className="flex-row gap-2 justify-between w-full">
                    <Button
                        fullWidth
                        color="secondary"
                        suffixIcon={chevronDownIcon}
                        className="justify-between"
                    >
                        Last 30 days
                    </Button>
                    <FabButton color="secondary" icon={calendarIcon} />
                    <Button color="error" suffixIcon={dangerIcon} href="/failure">
                        Slipup
                    </Button>
                </View>
            }
        >
            <View className="flex-col bg-background-white rounded-xl">
                <View className="px-3 py-4 flex-row gap-10">
                    <View className="flex-row gap-2 items-center">
                        <View className="rounded-full bg-error h-full w-[10px]" />
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Failures
                            </Text>
                            <View className="flex-row gap-3">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    3
                                </Text>
                                <View className="bg-[#FFC8C8] py-1 px-2 rounded-full">
                                    <Text className="text-base text-[#EF6161] font-medium">
                                        + 12%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="flex-row gap-2 items-center">
                        <View className="rounded-full bg-warning h-full w-[10px]" />
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Cravings
                            </Text>
                            <View className="flex-row gap-3">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    3
                                </Text>
                                <View className="bg-[#C7F3B8] py-1 px-2 rounded-full">
                                    <Text className="text-base text-[#3C8027] font-medium">
                                        - 10%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="p-4 border-y-2 border-gray-200">
                    <View ref={daysWrapperRef} className="flex-row flex-wrap gap-0.5">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <View
                                key={index}
                                className="aspect-square bg-success"
                                style={{ height: dayCellSize }}
                            />
                        ))}
                    </View>
                </View>
                <View className="px-4 py-4">
                    <View className="flex-col gap-1">
                        <Text className="text-base text-typography-secondary font-medium">
                            Success rate
                        </Text>
                        <View className="flex-row gap-3">
                            <Text className="text-2xl text-typography-primary font-bold">75%</Text>
                            <View className="bg-[#C7F3B8] py-1 px-2 rounded-full">
                                <Text className="text-base text-[#3C8027] font-medium">+ 30%</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex-row w-full mt-2">
                <View className="w-1/2 pr-1">
                    <View className="flex-col bg-background-white rounded-xl gap-2  px-4 py-4">
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Current streak
                            </Text>
                            <View className="flex-row gap-2 items-baseline">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    432
                                </Text>
                                <Text className="text-base text-typography-secondary font-medium">
                                    days
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="w-1/2 pl-1">
                    <View className="flex-col bg-background-white rounded-xl gap-2 px-4 py-4">
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Longest streak
                            </Text>
                            <View className="flex-row gap-2 items-baseline">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    432
                                </Text>
                                <Text className="text-base text-typography-secondary font-medium">
                                    days
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex-row w-full mt-2">
                <View className="w-full">
                    <View className="flex-col bg-background-white rounded-xl gap-2  px-4 py-4">
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Resources saved
                            </Text>
                            <View className="flex-row gap-2 items-baseline">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    1234
                                </Text>
                                <Text className="text-base text-typography-secondary font-medium">
                                    crowns
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="flex-row w-full mt-2">
                <View className="w-1/2 pr-1">
                    <View className="flex-col bg-background-white rounded-xl gap-2  px-4 py-4">
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Start date
                            </Text>
                            <View className="flex-row gap-2 items-baseline">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    22.6.2002
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="w-1/2 pl-1">
                    <View className="flex-col bg-background-white rounded-xl gap-2 px-4 py-4">
                        <View className="flex-col gap-1">
                            <Text className="text-base text-typography-secondary font-medium">
                                Since start
                            </Text>
                            <View className="flex-row gap-2 items-baseline">
                                <Text className="text-2xl text-typography-primary font-bold">
                                    832
                                </Text>
                                <Text className="text-base text-typography-secondary font-medium">
                                    days
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TabPage>
    );
};

export default Calendar;
