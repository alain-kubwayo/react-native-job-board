import { useState } from "react";

import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import { Stack, useRouter } from "expo-router";

export default function Home() {

    const router = useRouter();

    return (
        <SafeAreaView>
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: 'coral'},
                    headerShadowVisible: false,
                    headerLeft: () => (<Text>Menu</Text>),
                    headerRight: () => (<Text>Profile</Text>)
                }} 
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text>Welcome</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/about')}>
                <Text>About Screen</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}