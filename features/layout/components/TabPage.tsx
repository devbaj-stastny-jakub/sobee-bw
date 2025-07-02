import React, { ReactNode } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimatePage from '@/features/animation/components/AnimatePage';

export interface TabPageProps {
    scrollable?: boolean;
    children?: ReactNode;
    header?: ReactNode;
}

const TabPage = ({ children, header, scrollable }: TabPageProps) => {
    const WrapperElement = scrollable ? ScrollView : View;

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <AnimatePage>
                <SafeAreaView
                    className="bg-background-yellow flex-1"
                    edges={['top', 'left', 'right']}
                >
                    {header && (
                        <View className="w-full px-5 pb-3 h-[55px] flex flex-row">{header}</View>
                    )}
                    <WrapperElement className="flex-1 px-5 flex flex-col">
                        {children}
                        <View className="pb-[100px]" />
                    </WrapperElement>
                </SafeAreaView>
            </AnimatePage>
        </>
    );
};

export default TabPage;
