import React, { forwardRef, useEffect } from 'react';
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { clsx } from 'clsx';
import * as Haptics from 'expo-haptics';
import { TabTriggerSlotProps } from 'expo-router/ui';

export interface TabBarItemProps extends TabTriggerSlotProps {
    icon: ImageSourcePropType;
}

const TabBarItem = forwardRef<View, TabBarItemProps>(
    ({ icon, isFocused, style: _style, onPress, ...props }, ref) => {
        const progress = useSharedValue(0);

        const animatedStyle = useAnimatedStyle(() => {
            return {
                backgroundColor: interpolateColor(progress.value, [0, 1], ['#f3f4f600', '#f3f4f6']),
            };
        });

        useEffect(() => {
            progress.value = withSpring(isFocused ? 1 : 0, { duration: 400 });
        }, [isFocused, progress]);

        const handlePress = (event: any) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onPress?.(event);
        };

        return (
            <Animated.View style={animatedStyle} className="rounded-full">
                <Pressable
                    {...props}
                    ref={ref}
                    onPress={handlePress}
                    className={clsx('size-14 flex items-center justify-center rounded-full')}
                >
                    <Image source={icon} className="size-6" />
                </Pressable>
            </Animated.View>
        );
    }
);

TabBarItem.displayName = 'TabBarItem';

export default TabBarItem;
