import { useLayoutEffect } from 'react';
import { router } from 'expo-router';

const Index = () => {
    useLayoutEffect(() => {
        router.navigate('/social/friends');
    }, []);
    return null;
};

export default Index;
