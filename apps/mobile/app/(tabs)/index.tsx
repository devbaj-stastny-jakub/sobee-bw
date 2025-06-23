import { Text, View, Image } from 'react-native';

export default function Index() {
    return (
        <View className="flex justify-center items-center flex-row gap-2">
            <Text>Tabs index</Text>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
                className="h-52 w-52"
            />
        </View>
    );
}

export const options = {
  title: 'Home',
  headerShown: false,
};