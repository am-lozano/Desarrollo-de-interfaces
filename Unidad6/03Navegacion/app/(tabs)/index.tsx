// app/(tabs)/index.tsx
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View>
            <Text>Estás en la página Home</Text>

            <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#9b9b9b",
                    borderTopColor: "#222"
                }
            }}
            ></Tabs>
        </View>
    );
}
