import { Camera, CameraType } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

function CustomCamera({ show, onClose, onPicturetaken }) {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const cameraRef = useRef();

  useEffect(() => {
    Camera.requestCameraPermissionsAsync();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const __takePicture = () => {
    if (cameraRef) {
      cameraRef.current
        .takePictureAsync()
        .then((response) => {
          onPicturetaken(response);
        })
        .catch((error) => {
          alert(error);
        });
    }
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
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.topButtonView}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraType}
            >
              <Ionicons name={"camera-reverse"} color={"white"} size={50} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flipButton} onPress={onClose}>
              <Ionicons name={"close-circle"} color={"white"} size={50} />
            </TouchableOpacity>
          </View>
        </Camera>
      </Modal>
    </View>
  );
}

export { CustomCamera };

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  flipButton: {
    height: 100,
    width: 100,
    padding: 10,
  },
  topButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
