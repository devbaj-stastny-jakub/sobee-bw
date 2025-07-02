import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
            <Stack.Screen name="index" />
        </Stack>
    );
};

export default Layout;
