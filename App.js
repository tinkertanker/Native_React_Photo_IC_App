import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroPages from "./screens/IntroScreen.js";
import AlbumUpload from "./screens/Album.js";
import HomeScreen from "./screens/HomeScreen.js";
import { ImageProvider } from "./context/ImageContext.js";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="homescreen" component={HomeScreen} />
          <Stack.Screen name="intro" component={IntroPages} />
          <Stack.Screen name="album" component={AlbumUpload} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
