import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface LinearProgressProps {
    progress: number; // 0 to 1
}

const LinearProgress = ({ progress }: LinearProgressProps) => {
    const progressValue = useSharedValue(0);
    const clampedProgress = Math.min(Math.max(progress, 0), 1);

    useEffect(() => {
        progressValue.value = withTiming(clampedProgress, { duration: 500 });
    }, [clampedProgress, progressValue]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${progressValue.value * 100}%`,
        };
    });

    return (
        <View className="h-[10px] flex-row bg-background-section w-full rounded-full overflow-hidden">
            <Animated.View className="h-full bg-primary" style={animatedStyle} />
        </View>
    );
};

export default LinearProgress;
