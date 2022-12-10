import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState, useRef } from "react";
import Modal from "react-native-modal";
import { BButton } from "./BButton";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function MediaPicker({
  show,
  onClose,
  onCameraPressed,
  onImagePickerSelected,
}) {
  const pickImageFromGallery = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
      .then((response) => {
        if (response.canceled) {
          alert("no selected");
        } else {
          onImagePickerSelected(response.assets[0]);
        }
      })
      .catch((error) => {
        alert("Not");
      });
  };

  return (
    <View>
      <Modal
        animationIn={"wobble"}
        animationOut={"swing"}
        animationOutTiming={1500}
        isVisible={show}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <View
          style={{
            height: "35%",
            backgroundColor: "white",
            padding: 10,
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.circleView}
              onPress={onCameraPressed}
            >
              <Ionicons name={"camera-sharp"} size={50} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleView}
              onPress={pickImageFromGallery}
            >
              <Ionicons name={"images-sharp"} size={50} color={"white"} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <BButton title={"Cancel"} onButtonPress={onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export { MediaPicker };

const styles = StyleSheet.create({
  circleView: {
    backgroundColor: "orange",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
