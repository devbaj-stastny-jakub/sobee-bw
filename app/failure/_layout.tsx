import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'fade', animationDuration: 100 }}>
            <Stack.Screen name="index" />
        </Stack>
    );
};

export default Layout;
