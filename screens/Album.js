import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function AlbumUpload({ navigation }) {
  return (
    <View>
      <Text style={styles.introHeader}>Upload from album!</Text>

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
  },
});
