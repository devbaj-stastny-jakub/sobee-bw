import React, { forwardRef, ReactNode, useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { clsx } from 'clsx';
import { TabListProps } from 'expo-router/ui';

export interface TabBarListProps extends TabListProps {
    children: ReactNode;
}

const TabBarList = forwardRef<Animated.View, TabBarListProps>(
    ({ children, style, className, ...props }, ref) => {
        const progress = useSharedValue(120);
        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateY: progress.value }, { translateX: '-50%' as any }],
        }));

        useEffect(() => {
            progress.value = withSpring(0, { duration: 1000 });
        }, []);

        return (
            <Animated.View
                ref={ref}
                {...props}
                style={[animatedStyle, style]}
                className={clsx(
                    'absolute left-1/2 bottom-7 bg-white p-2 rounded-full flex flex-row gap-2 shadow-nav',
                    className
                )}
            >
                {children}
            </Animated.View>
        );
    }
);

TabBarList.displayName = 'TabBarList';

export default TabBarList;
