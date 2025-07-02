import React, { ReactNode, useCallback } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { Href, useNavigation, useRouter } from 'expo-router';

import FabButton from '@/components/FabButton';

import { xIcon } from '@/assets/icons';
import AnimatePage from '@/features/animation/components/AnimatePage';

export interface ModalPageProps {
    scrollable?: boolean;
    title?: string;
    children?: ReactNode;
    edges?: Edges;
    closeButtonHref?: Href;
}

const ModalPage = ({ children, scrollable, title, edges, closeButtonHref }: ModalPageProps) => {
    const navigation = useNavigation();
    const router = useRouter();

    const handleClose = useCallback(() => {
        if (closeButtonHref) {
            router.push(closeButtonHref);
            return;
        }
        navigation.goBack();
    }, [closeButtonHref, router, navigation]);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <AnimatePage>
                <SafeAreaView
                    className="flex-1 bg-background-white"
                    edges={edges || ['top', 'left', 'right']}
                >
                    <View className="w-full flex-row justify-center min-h-16 mb-4 items-center relative">
                        <FabButton
                            color="secondary"
                            icon={xIcon}
                            className="absolute border-[1px] border-gray-200  top-5 right-5"
                            onPress={handleClose}
                        />
                        {title && (
                            <Text className="text-3xl font-bold text-typography-primary text-center mt-3">
                                {title}
                            </Text>
                        )}
                    </View>
                    <KeyboardAvoidingView className="flex-1 flex-col" behavior="padding">
                        <ScrollView
                            className="flex-1 px-5 flex-col"
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{
                                flexGrow: 1,
                            }}
                        >
                            {children}
                            {scrollable && <View className="h-5" />}
                        </ScrollView>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </AnimatePage>
        </>
    );
};

export default ModalPage;
