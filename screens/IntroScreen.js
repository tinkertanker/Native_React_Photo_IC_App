import * as React from 'react';
import {useState} from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HomeScreen, App } from '../App';

const Stack = createStackNavigator()

export default function IntroStack() {
    return (
        <Stack.Navigator 
        screenOptions={{headerShown: false}}>
            <Stack.Screen name="1" component={Page1} />
            <Stack.Screen name="2" component={Page2} />
            <Stack.Screen name="3" component={Page3} />
            <Stack.Screen name="4" component={Page4} />
            <Stack.Screen name="camera" component={LaunchCamera} />
        </Stack.Navigator>
    )
}

export function Page1( {navigation} ) {
    return (      
        <View style={styles.introContainer}>
            <Text style={styles.introHeader}>Real-Time</Text>
            <Text style={styles.introHeader}>Suggestions</Text>
            <Text style={styles.text}>
            We use your device's sensors to provide real-time suggestions and recommendations on how to better align yourself. Listen to the suggestions so ICA won't complain so much.
            </Text>

            <View style={styles.buttonsLR}>
    
            <TouchableOpacity 
                style={styles.leftButton} 
                onPress={() => navigation.navigate("homescreen")}>
                <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.middleSpace}>
            </TouchableOpacity>
        
            <TouchableOpacity
                style={styles.rightButton}
                onPress={() => navigation.navigate("2")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-right"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>
            </View>
      </View>
    );
  }
   
export function Page2( {navigation} ) {
    return (
        <View style={styles.introContainer}>
            <Text style={styles.introHeader}>No Template,</Text>
            <Text style={styles.introHeader}>No Problem.</Text>
            <Text style={styles.text}>
            Why align to a template when the template can align to you? We use facial recognition to help you crop, reframe, edit, resize... basically it's magic.
            </Text>

            <View style={styles.buttonsLR}>

            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => navigation.navigate("1")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-left"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.middleSpace}>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.rightButton}
                onPress={() => navigation.navigate("3")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-right"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>
            </View>
        </View>
    )
  }
   
export function Page3( {navigation} ) {
    return (
        <View style={styles.introContainer}>
            <Text style={styles.introHeader}>Upload</Text>
            <Text style={styles.introHeader}>Your Photos.</Text>
            <Text style={styles.text}>
            If you'd like to use a better camera to take your photo, go ahead. After that, you can import the photo into the app and we'll still do our magic and give you a perfect IC Photo.
            </Text>

            <View style={styles.buttonsLR}>

            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => navigation.navigate("2")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-left"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.middleSpace}>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.rightButton}
                onPress={() => navigation.navigate("4")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-right"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>
            </View>
        </View>
    )
  }
   
export function Page4( {navigation} ) {
    return (
        <View style={styles.introContainer}>
            <Text style={styles.introHeader}>Somethings</Text>
            <Text style={styles.introHeader}>Cannot Fix</Text>
            <Text style={styles.text}>
                Take your image against a well-lit plain white background with no shadow. If you're taking your own picture, stand and hold the phone upright with both hands.
            </Text>

            <View style={styles.buttonsLR}>

            <TouchableOpacity
                style={styles.leftButton}
                onPress={() => navigation.navigate("3")}>
                <FontAwesome5
                    style={styles.icon}
                    name="arrow-left"
                    color="#853442"
                    size={20}/>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.middleSpace}>
            </TouchableOpacity>
  
            <TouchableOpacity 
                style={styles.rightButton} 
                onPress={() => navigation.navigate("homescreen")}>
                <Text style={styles.buttonText}>Let's Go!</Text>
            </TouchableOpacity> 

            </View>
        </View>
    )
  }
   
  export function LaunchCamera( {navigation} ) {
    return (
        <View style={styles.introContainer}>
            <Text style={{width: "100%", fontWeight: 'bold', textAlign: "center", fontSize: 40,}}>
                Launch camera
            </Text>

            <View style={styles.buttonsLR}>

            <TouchableOpacity 
                style={styles.navButton} 
                onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <Text style={styles.buttonText}>Back to Intro Screen</Text>
            </TouchableOpacity>

            </View>
        </View>
    )
  }
  
const styles = StyleSheet.create({

    middleSpace: {
        width:"40%",
    },
  
    introContainer: {
      flex:1, 
      width: "100%",
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:'white',
    },
  
    introHeader: {
      width: "100%",
      paddingLeft: 18,
      fontWeight: 'bold',
      textAlign: "left",
      fontSize: 40,
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

    skipButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 4,
        alignSelf: "flex-start",
        textAlign: "center",
      },

    buttonsLR: {
        flexDirection: 'row',
        width:"100%",
        display: 'flex',
        justifyContent:'center',        
    },

    leftButton: {
        paddingHorizontal: 40,
        paddingVertical: 5,
    },

    rightButton: {
        paddingHorizontal: 40,
        paddingVertical: 5,
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
  });