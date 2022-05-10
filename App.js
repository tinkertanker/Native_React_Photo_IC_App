import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroStack from "./screens/IntroScreen.js";
import AlbumUpload from "./screens/Album.js";
// import { RNCamera } from "react-native-camera";
import "react-native-gesture-handler";
import { CameraKitCameraScreen } from "react-native-camera-kit";
import HomeScreen from "./screens/HomeScreen.js";
import { ImageProvider } from "./context/ImageContext.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="homescreen" component={HomeScreen} />
          <Stack.Screen name="intro" component={IntroStack} />
          <Stack.Screen name="album" component={AlbumUpload} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageProvider>
  );
}
