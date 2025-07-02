import React, { ReactNode, useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { useFocusEffect } from 'expo-router';

export interface AnimatePageProps {
    children: ReactNode;
    className?: string;
    fadeInitialValue?: number;
    fadeDuration?: number;
    translateYInitialValue?: number;
    translateYFromValue?: number;
    translateYDuration?: number;
    style?: any;
}

const AnimatePage = ({
    children,
    className = 'flex-1',
    fadeInitialValue = 0,
    fadeDuration = 150,
    translateYInitialValue = 20,
    translateYFromValue = 5,
    translateYDuration = 300,
    style = {},
}: AnimatePageProps) => {
    const fadeAnim = useRef(new Animated.Value(fadeInitialValue)).current;
    const translateYAnim = useRef(new Animated.Value(translateYInitialValue)).current;

    const playAnimation = useCallback(() => {
        fadeAnim.setValue(fadeInitialValue);
        translateYAnim.setValue(translateYFromValue);

        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: fadeDuration,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: translateYDuration,
                useNativeDriver: true,
            }),
        ]).start();
    }, [
        fadeAnim,
        translateYAnim,
        fadeInitialValue,
        fadeDuration,
        translateYFromValue,
        translateYDuration,
    ]);

    useFocusEffect(playAnimation);

    return (
        <Animated.View
            className={className}
            style={{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }],
                ...style,
            }}
        >
            {children}
        </Animated.View>
    );
};

export default AnimatePage;
