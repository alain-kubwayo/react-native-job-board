import { useState } from "react";

import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Button } from "react-native";

import { Stack, useRouter } from "expo-router";

export default function Home() {

    const router = useRouter();

    const pressHandler = () => {
        router.push('/about');
    }

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
                <Button
                    title='Go to review details' 
                    onPress={pressHandler}
                />
            </ScrollView>
        </SafeAreaView>
    )
}