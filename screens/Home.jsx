import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
    const router = useRouter();
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => router.push('/about')}>
                <Text>About Screen</Text>
            </TouchableOpacity>
        </View>
    )
}