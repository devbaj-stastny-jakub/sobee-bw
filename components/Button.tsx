import React, { forwardRef, ReactNode, useMemo } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { clsx } from 'clsx';
import { Href, usePathname, useRouter } from 'expo-router';

import { colors } from '@/constants';

type Color = 'primary' | 'secondary' | 'error' | 'success';
export interface ButtonProps {
    onPress?: () => void;
    children: ReactNode;
    prefixIcon?: ImageSourcePropType;
    suffixIcon?: ImageSourcePropType;
    color?: Color | ((args: { active: boolean }) => Color);
    fullWidth?: boolean;
    className?: string;
    href?: Href;
    disabled?: boolean;
    noTint?: boolean;
}

const colorArgToIconColor = {
    primary: colors.white,
    secondary: colors.typography.primary,
    error: colors.error.dark,
    success: colors.success.dark,
};

const Button = forwardRef<View, ButtonProps>(
    (
        {
            onPress,
            prefixIcon,
            suffixIcon,
            children,
            color = 'primary',
            className,
            fullWidth,
            href,
            disabled = false,
            noTint = false,
        },
        ref
    ) => {
        const router = useRouter();
        const pathName = usePathname();

        const isActive = useMemo(() => {
            if (!href) return false;
            return href === pathName;
        }, [pathName, href]);

        const computedColor = useMemo(() => {
            if (typeof color === 'function') {
                return color({ active: isActive });
            }
            return color;
        }, [color, isActive]);

        const handlePress = () => {
            if (disabled) return;
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
                    'py-3 px-5 bg-background-white self-start rounded-[16px] flex-row items-center h-[44px]',
                    {
                        'pl-4': !!prefixIcon,
                        'pr-4': !!suffixIcon,
                        'bg-primary': computedColor === 'primary',
                        'bg-white': computedColor === 'secondary',
                        'bg-error': computedColor === 'error',
                        'bg-success': computedColor === 'success',
                        'flex-1': fullWidth,
                        'opacity-50': disabled,
                    },
                    className
                )}
            >
                {prefixIcon && (
                    <Image
                        tintColor={noTint ? undefined : colorArgToIconColor[computedColor]}
                        source={prefixIcon}
                        className="size-5 mr-2"
                    />
                )}
                <Text
                    className={clsx('text-base text-typography-primary font-semibold', {
                        'text-typography-primary': computedColor === 'secondary',
                        'text-white':
                            computedColor === 'error' ||
                            computedColor === 'success' ||
                            computedColor === 'primary',
                        'text-center flex-1': fullWidth,
                    })}
                >
                    {children}
                </Text>
                {suffixIcon && (
                    <Image
                        tintColor={noTint ? undefined : colorArgToIconColor[computedColor]}
                        source={suffixIcon}
                        className="size-5 ml-2"
                    />
                )}
            </TouchableOpacity>
        );
    }
);

Button.displayName = 'Button';

export default Button;
