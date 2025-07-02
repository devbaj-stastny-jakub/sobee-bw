import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';

import AnimatePage from '@/features/animation/components/AnimatePage';

export interface BlankPageProps {
    scrollable?: boolean;
    children?: ReactNode;
    edges?: Edges;
}

const BlankPage = ({ children, scrollable, edges }: BlankPageProps) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <AnimatePage>
                <SafeAreaView
                    className="flex-1 bg-background-white"
                    edges={edges || ['top', 'left', 'right']}
                >
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

export default BlankPage;
