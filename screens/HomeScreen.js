// WORK ON:
// TIMER AND ALBUM INTERFACE

import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import ImageOverlay from "react-native-image-overlay";
import ImageContext from "../context/ImageContext";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  //   const [image, setImage] = useState(null);

  const { image, setImage } = useContext(ImageContext);

  const savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(image).then(() => {
      setImage(null);
    });
  };
  const deletePhoto = () => {
    setImage(null);
  };

  const option = {
    quailty: 1,
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(option);
      setImage(data.uri);
    }
  };

  //   const DisplayButton = () => {
  //     if (image) {
  //       return (
  //         <ImageOverlay
  //           source={{ uri: image }}
  //           style={{ aspectRatio: 1 }}
  //           overlayAlpha={0}
  //         >
  //           {/* <Image source={{ uri: image }} style={{ aspectRatio: 1 }} /> */}
  //           <TouchableOpacity>
  //             <MaterialIcons name="save-alt" size={40} color="white" style={{}} />
  //           </TouchableOpacity>
  //         </ImageOverlay>
  //       );
  //     }
  //   };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (hasMediaLibraryPermission === null) {
    return <View />;
  }
  if (hasMediaLibraryPermission === false) {
    return <Text>No access to files</Text>;
  }

  // If image exist -> it will display this upon rerender
  if (image) {
    return (
      <SafeAreaView style={styles.homepage}>
        <ImageOverlay
          source={{ uri: image }}
          //   style={{ aspectRatio: 1, flex: 1 }}
          overlayAlpha={0}
        >
          {/* <Image source={{ uri: image }} style={{ aspectRatio: 1 }} /> */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => savePhoto()}>
              <MaterialIcons
                name="save-alt"
                size={40}
                color="white"
                style={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePhoto()}>
              <Entypo
                name="trash"
                size={40}
                color="white"
                style={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>
          </View>
        </ImageOverlay>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.homepage}>
      <View style={styles.cameraBox}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          type={type}
          ratio={"1:1"}
        >
          <View style={styles.buttonsContainer}>
            <View style={styles.topRowButtonBox}>
              <TouchableOpacity
                style={styles.infoAlbumButton}
                onPress={() => navigation.navigate("intro")}
              >
                <FontAwesome
                  name="question-circle-o"
                  color="#853442"
                  size={20}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.infoICAButton}
                onPress={() => {
                  Linking.openURL("https://www.ica.gov.sg/photo-guidelines");
                }}
              >
                <FontAwesome5 name="id-card" color="#853442" size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.infoAlbumButton}
                onPress={() => navigation.navigate("album")}
              >
                <FontAwesome name="photo" color="#853442" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.cameraButtonsBox}>
              <TouchableOpacity
                style={styles.timerAndFlipButton}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons name="timer-outline" size={28} color="#A6A4A5" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cameraButton}
                onPress={() => takePicture()}
              >
                <MaterialCommunityIcons
                  name="circle-slice-8"
                  size={65}
                  color="#853442"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.timerAndFlipButton}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={28}
                  color="#A6A4A5"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cameraBox: {
    height: "90%",
    width: "100%",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "black",
  },

  homepage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "black",
  },

  camera: {
    flex: 1,
    //aspectRatio: 1,
  },

  // Container for Row 1 and 2 Buttons

  buttonsContainer: {
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    width: "70%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },

  // Row 1 Buttons

  topRowButtonBox: {
    flexDirection: "row",
    width: "70%",
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    // flex: 1,
  },

  infoAlbumButton: {
    top: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: 15,
  },

  infoICAButton: {
    top: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },

  // Row 2 Buttons

  cameraButtonsBox: {
    width: "90%",
    height: "11%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 28,
    marginBottom: 10,
  },

  timerAndFlipButton: {
    alignItems: "center",
    justifyContent: "space-around",
  },

  cameraButton: {
    alignItems: "center",
    justifyContent: "space-around",
  },
});
