import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Stack } from 'expo-router';

import './global.css';

import { colors } from '@/constants';
import { initializeDatabase } from '@/db';
import { dataSource } from '@/db/dataSource';
import { StreakContextProvider } from '@/shared/streak';
import { UserContextProvider } from '@/shared/user/context';

export default function RootLayout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                if (dataSource.isInitialized === false) {
                    await initializeDatabase();
                }
            } catch (error) {
                console.error('Database initialization error:', error);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 items-center justify-center bg-background-white">
                <ActivityIndicator size="large" color={colors.primary.DEFAULT} />
            </View>
        );
    }

    return (
        <UserContextProvider>
            <StreakContextProvider>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false, animation: 'none' }}
                    />
                    <Stack.Screen
                        name="learning"
                        options={{
                            headerShown: false,
                            animation: 'slide_from_bottom',
                            animationDuration: 200,
                        }}
                    />
                    <Stack.Screen
                        name="craving"
                        options={{
                            headerShown: false,
                            animation: 'fade',
                            animationDuration: 100,
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name="onboarding"
                        options={{
                            headerShown: false,
                            animation: 'none',
                            gestureEnabled: false,
                        }}
                    />
                    <Stack.Screen
                        name="failure"
                        options={{
                            headerShown: false,
                            animation: 'none',
                            gestureEnabled: false,
                        }}
                    />
                </Stack>
            </StreakContextProvider>
        </UserContextProvider>
    );
}
