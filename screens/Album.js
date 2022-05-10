import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageContext from "../context/ImageContext";

export default function AlbumUpload({ navigation }) {
  const { image, setImage } = useContext(ImageContext);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      navigation.navigate("homescreen");
    }
  };

  return (
    <View>
      <Text style={styles.introHeader}>Upload from album!</Text>
      <TouchableOpacity onPress={() => pickImage()}>
        <Text style={styles.buttonText}>Pick from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => navigation.navigate("homescreen")}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cancelButton: {
    paddingHorizontal: 40,
    paddingVertical: 5,
  },

  introHeader: {
    width: "100%",
    paddingVertical: "50%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
  },
  buttonText: {
    color: "#853442",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});
