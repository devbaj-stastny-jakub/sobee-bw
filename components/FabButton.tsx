import React, { forwardRef } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { clsx } from 'clsx';
import { Href, useRouter } from 'expo-router';

import { colors } from '@/constants';

export interface FabButtonProps {
    onPress?: () => void;
    icon: ImageSourcePropType;
    color?: 'primary' | 'secondary' | 'error' | 'success';
    href?: Href;
    className?: string;
}

const colorArgToIconColor = {
    primary: colors.typography.primary,
    secondary: colors.typography.primary,
    error: colors.error.dark,
    success: colors.success.dark,
};

const FabButton = forwardRef<View, FabButtonProps>(
    ({ icon, onPress, href, color = 'primary', className }, ref) => {
        const router = useRouter();

        const handlePress = () => {
            if (href) {
                router.push(href);
            }
            if (onPress) {
                onPress();
            }
        };

        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={handlePress}
                ref={ref}
                className={clsx(
                    'size-[44px] flex flex-shrink-0 justify-center items-center bg-background-white rounded-[16px]',
                    {
                        'bg-background-white': color === 'secondary',
                        'bg-primary': color === 'primary',
                        'bg-error': color === 'error',
                        'bg-success': color === 'success',
                    },
                    className
                )}
            >
                <Image source={icon} className="size-6" tintColor={colorArgToIconColor[color]} />
            </TouchableOpacity>
        );
    }
);

FabButton.displayName = 'FabButton';

export default FabButton;
