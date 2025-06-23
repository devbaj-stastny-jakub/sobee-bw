import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
    return (
        <SafeAreaView className="bg-red-500 flex-1" edges={['top', 'left', 'right']}>
            <ScrollView className="bg-green-500">
                {Array.from({ length: 100 }).map((_, i) => (
                    <Text key={i} className="text-base mb-4">
                        Item {i + 1}
                    </Text>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Index;
