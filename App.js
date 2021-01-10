import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreen } from "react-native-screen";
import MealsNavigator from "./navigation/MealsNavigat";
enableScreen();

const fetchFonts = () => {
  return font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigator />;
}
