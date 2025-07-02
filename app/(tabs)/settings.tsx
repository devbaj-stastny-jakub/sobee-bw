import React from 'react';
import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import * as Updates from 'expo-updates';

import Button from '@/components/Button';

import { streakRepository, userRepository } from '@/db/repositories';
import BlankPage from '@/features/layout/components/BlankPage';

const Settings = () => {
    const router = useRouter();

    const handleResetAppData = async () => {
        try {
            // Show confirmation dialog
            Alert.alert(
                'Reset App Data',
                'This will delete all your data and restart the app. Are you sure?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Reset',
                        style: 'destructive',
                        onPress: async () => {
                            try {
                                // Reset all app data
                                await userRepository.deleteAll();
                                await streakRepository.deleteAll();

                                // Try to reload the entire app
                                if (Updates.isEnabled) {
                                    await Updates.reloadAsync();
                                } else {
                                    // Fallback for development mode - navigate to root
                                    router.replace('/');
                                }
                            } catch (error) {
                                console.error('Error resetting app:', error);
                                // Final fallback
                                router.replace('/');
                            }
                        },
                    },
                ]
            );
        } catch (error) {
            console.error('Error showing confirmation dialog:', error);
        }
    };

    return (
        <BlankPage scrollable edges={['top', 'left', 'right', 'bottom']}>
            <View className="flex-1 w-full items-center justify-center">
                <View className="flex-row w-full">
                    <Button
                        color="error"
                        className="self-stretch"
                        fullWidth
                        onPress={handleResetAppData}
                    >
                        Reset App Data
                    </Button>
                </View>
            </View>
        </BlankPage>
    );
};

export default Settings;
