import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";
import ImageOverlay from "react-native-image-overlay";
import * as MediaLibrary from "expo-media-library";
import ImageContext from "../context/ImageContext";

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

  // if image exist -> it will display this upon rerender
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
      <Text style={styles.homepageHeader}>Camera</Text>
      <View style={styles.cameraBox}>
        {/* <RNCamera style={styles.rnCamera} /> */}
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.camera}
          type={type}
          ratio={"1:1"}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <MaterialCommunityIcons
                name="camera-flip"
                size={40}
                color="white"
                style={{ right: "100%", bottom: "5%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => takePicture()}>
              <Entypo
                name="controller-record"
                size={100}
                color="white"
                style={{
                  right: "20%",
                }}
              />
            </TouchableOpacity>
          </View>
          {/* {image ? (
            <Image source={{ uri: image }} style={{ aspectRatio: 1 }} />
          ) : null} */}
        </Camera>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate("intro")}
        >
          <FontAwesome5
            style={styles.icon}
            name="question-circle"
            color="#853442"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleSpace}></TouchableOpacity>

        <TouchableOpacity
          style={styles.infoICAButton}
          onPress={() => {
            Linking.openURL("https://www.ica.gov.sg/photo-guidelines");
          }}
        >
          <FontAwesome
            style={styles.icon}
            name="id-card-o"
            color="#853442"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleSpace}></TouchableOpacity>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate("album")}
        >
          <FontAwesome
            style={styles.icon}
            name="photo"
            color="#853442"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cameraBox: {
    height: "80%",
    // width: "90%",
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 10,
  },

  homepage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    backgroundColor: "black",
  },

  buttons: {
    flexDirection: "row",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 50,
  },

  homepageHeader: {
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },

  //   text: {
  //     flex: 0.3,
  //     top: 25,
  //     height: 100,
  //     width: "100%",
  //     paddingLeft: 18,
  //     paddingRight: 15,
  //     fontSize: 20,
  //     textAlign: "left",
  //   },

  infoButton: {
    top: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },

  infoICAButton: {
    top: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },

  middleSpace: {
    width: "5%",
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
    width: "94%",
    alignSelf: "center",
  },

  //   container: {
  //     flex: 1,
  //   },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  //   text: {
  //     fontSize: 18,
  //     color: "white",
  //   },
});
