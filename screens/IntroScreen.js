import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

export default function IntroPages() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="1" component={Page1} />
      <Stack.Screen name="2" component={Page2} />
      <Stack.Screen name="3" component={Page3} />
      <Stack.Screen name="4" component={Page4} />
    </Stack.Navigator>
  );
}

export function Page1({ navigation }) {
  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introHeader}>Real-Time</Text>
        <Text style={styles.introHeader}>Suggestions</Text>
        <Text style={styles.introBody}>
          We use your device's sensors to provide real-time suggestions and
          recommendations on how to better align yourself. Listen to the
          suggestions so ICA won't complain so much.
        </Text>
      </View>

      <View style={styles.navigationButtonBox}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("homescreen")}
        >
          <Text style={styles.navigationButtonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("2")}
        >
          <FontAwesome5 name="arrow-right" color="#853442" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Page2({ navigation }) {
  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introHeader}>No Template,</Text>
        <Text style={styles.introHeader}>No Problem.</Text>
        <Text style={styles.introBody}>
          Why align to a template when the template can align to you? We use
          facial recognition to help you crop, reframe, edit, resize...
          basically it's magic.
        </Text>
      </View>

      <View style={styles.navigationButtonBox}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("1")}
        >
          <FontAwesome5 name="arrow-left" color="#853442" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("3")}
        >
          <FontAwesome5 name="arrow-right" color="#853442" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Page3({ navigation }) {
  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introHeader}>Upload</Text>
        <Text style={styles.introHeader}>Your Photos.</Text>
        <Text style={styles.introBody}>
          If you'd like to use a better camera to take your photo, go ahead.
          After that, you can import the photo into the app and we'll still do
          our magic and give you a perfect IC Photo.
        </Text>
      </View>

      <View style={styles.navigationButtonBox}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("2")}
        >
          <FontAwesome5 name="arrow-left" color="#853442" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("4")}
        >
          <FontAwesome5 name="arrow-right" color="#853442" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function Page4({ navigation }) {
  return (
    <View style={styles.introContainer}>
      <View style={styles.introTextContainer}>
        <Text style={styles.introHeader}>Somethings</Text>
        <Text style={styles.introHeader}>Cannot Fix</Text>
        <Text style={styles.introBody}>
          Take your image against a well-lit plain white background with no
          shadow. If you're taking your own picture, stand and hold the phone
          upright with both hands.
        </Text>
      </View>

      <View style={styles.navigationButtonBox}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("3")}
        >
          <FontAwesome5 name="arrow-left" color="#853442" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate("homescreen")}
        >
          <Text style={styles.navigationButtonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 70,
  },

  introTextContainer: {
    flex: 0.9,
    width: "100%",
    justifyContent: "center",
  },

  introHeader: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 40,
    paddingHorizontal: 20,
  },

  introBody: {
    top: 25,
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: "left",
  },

  navigationButtonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },

  navigationButton: {
    padding: 15,
  },

  navigationButtonText: {
    color: "#853442",
    fontSize: 20,
  },
});
