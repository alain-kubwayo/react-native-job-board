import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded, setFontsLoaded] = useFonts({
        'nunito-bold': require('../assets/fonts/Nunito-Bold.ttf'),
        'nunito-regular': require('../assets/fonts/Nunito-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) await SplashScreen.hideAsync();
    }, [fontsLoaded])
    if(!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
}
