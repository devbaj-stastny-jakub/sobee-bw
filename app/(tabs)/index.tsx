import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import Button from '@/components/Button';
import FabButton from '@/components/FabButton';

import { dangerIcon, studyHatIcon } from '@/assets/icons';
import { colors } from '@/constants';
import AddictionSelect from '@/features/hive/components/AddictionSelect';
import Hive from '@/features/hive/components/Hive';
import ResourcesSection from '@/features/hive/components/ResourcesSection';
import StreakClock from '@/features/hive/components/StreakClock';
import TabPage from '@/features/layout/components/TabPage';
import { useUser } from '@/shared/user';

const Index = () => {
    const { user, isLoading: isLoadingUser } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isLoadingUser) {
            return;
        }
        if (user === null) {
            router.replace('/onboarding');
        }
    }, [user, router, isLoadingUser]);

    if (isLoadingUser) {
        return (
            <View className="flex-1 items-center justify-center bg-background-white">
                <ActivityIndicator size="large" color={colors.primary.DEFAULT} />
            </View>
        );
    }

    return (
        <TabPage
            header={
                <View className="flex-row gap-2 justify-between w-full">
                    <View className="flex-row">
                        <AddictionSelect />
                    </View>
                    <View className="flex flex-row gap-2">
                        <FabButton href="/learning" icon={studyHatIcon} color="secondary" />
                        <Button href="/craving" suffixIcon={dangerIcon} color="error">
                            Craving
                        </Button>
                    </View>
                </View>
            }
        >
            <View className="flex-row gap-1 justify-center mb-5 mt-2">
                <Text className="text-xl font-bold">10days</Text>
                <Text className="text-xl">until</Text>
                <Text className="text-xl font-bold">1 month</Text>
                <Text className="text-xl">milestone...</Text>
            </View>
            <Hive />
            <ResourcesSection />
            <StreakClock />
        </TabPage>
    );
};

export default Index;
