import * as React from 'react';
import {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IntroStack from './screens/IntroScreen.js';
import AlbumUpload from './screens/Album.js';
import { RNCamera } from 'react-native-camera'
import 'react-native-gesture-handler';


const Stack = createStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator 
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="homescreen" component={HomeScreen} /> 
    <Stack.Screen name="intro" component={IntroStack} /> 
    <Stack.Screen name="album" component={AlbumUpload} /> 

  </Stack.Navigator>
</NavigationContainer>
  )
}
 
export function HomeScreen( {navigation} ) {
  return (

<SafeAreaView style={styles.homepage}>
    <Text style={styles.homepageHeader}>camera</Text>

    <View style={styles.cameraBox}>
    <RNCamera style={styles.rnCamera} />
    </View>


    <View style={styles.buttons}>

    <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("intro")}>
        <FontAwesome5
            style={styles.icon}
            name="question-circle"
            color="#853442"
            size={20}/>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.middleSpace}>

    </TouchableOpacity>

    <TouchableOpacity
        style={styles.infoICAButton}
        onPress={ ()=>{ Linking.openURL('https://www.ica.gov.sg/photo-guidelines')}}>
        
        <FontAwesome
            style={styles.icon}
            name="id-card-o"
            color="#853442"
            size={20}/>
    </TouchableOpacity>

    <TouchableOpacity 
    style={styles.middleSpace}>

    </TouchableOpacity>



    <TouchableOpacity
        style={styles.infoButton}
        onPress={() => navigation.navigate("album")}>
        <FontAwesome
            style={styles.icon}
            name="photo"
            color="#853442"
            size={20}/>
    </TouchableOpacity>

    </View>

</SafeAreaView>
  )
}

const styles = StyleSheet.create({

  cameraBox: {
    height: "70%",
    alignSelf:'center',
  },

  homepage: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'baseline', 
    backgroundColor:'black',
  },
  
  buttons: {
 
      flexDirection: 'row',
      width:"100%",
      display: 'flex',
      justifyContent:'center',
      height: 50,     
  },

  homepageHeader: {
    width: "100%",
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 40,
    color: "white",
  },

  text: {
    flex: 0.3,
    top:25,
    height:100,
    width: "100%",
    paddingLeft: 18,
    paddingRight: 15,
    fontSize: 20,
    textAlign: "left",
  },

  infoButton: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },

  infoICAButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },

  middleSpace: {
    width:"5%",
},

  navButton: {
    height: 40,
    width: "100%",
    color: "#853442",
    textAlign: "center",
  },

  buttonText: {
    color: "#853442",
    fontSize: 20,
    textAlign: "center",
  },    

  rnCamera: {
    width: '94%',
    alignSelf: 'center',
  },
});