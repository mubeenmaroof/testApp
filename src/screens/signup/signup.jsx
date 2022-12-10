import { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BButton } from "../../components/BButton";
import { Input } from "../../components/input";
import { colors, modifiers } from "../../utils/theme";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";
import { firebase } from "../../services/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";
import { MediaPicker } from "../../components/mediapicker";
import { CustomCamera } from "../../components/customCamera";

function Signup({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [userName, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [isPickerShown, setIsPickerShown] = useState(false);
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [imageFromPicker, setImageFromPicker] = useState();
  const [imageFromCamera, setImageFromCamera] = useState();

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };
  const onSignupPress = () => {
    console.log(userName, email, password);
    firebase.firestore().collection("users").doc("id002").set({
      user_name: userName,
      user_email: email,
      user_password: password,
    });
  };
  const goToSignin = () => {
    navigation.navigate("Signin");
  };
  const onImagePressed = () => {
    if (isPickerShown === true) {
      setIsPickerShown(false);
    } else if (isPickerShown === false) {
      setIsPickerShown(true);
    }
    //setIsPickerShown(!setIsPickerShown);
  };

  const onImageCameFromgallery = (image) => {
    setImageFromPicker(image.uri);
    setIsPickerShown(false);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bgcolor }}>
      <Header title={"Sign up"} />
      <TouchableOpacity onPress={onImagePressed}>
        <View style={styles.pickImageCircle}>
          <Image
            source={{ uri: imageFromPicker || imageFromCamera }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
            resizeMode={"contain"}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.formCon}>
        <Input
          placeholder={"User Name"}
          showIcon={true}
          onChange={setUserName}
          iconeName={"person-outline"}
        />
        <Input
          placeholder={"Email"}
          showIcon={true}
          onChange={setEmail}
          iconeName={"mail-outline"}
        />
        <Input
          placeholder={"Password"}
          isSecure={!showPass}
          onChange={setPassword}
          showIcon={true}
          iconeName={showPass === false ? "eye-outline" : "eye-off-outline"}
          onIconPress={handleShowPass}
        />
        <View style={styles.textButtonCon}>
          <TextButton
            title={"Already have an account Sign in?"}
            onPress={goToSignin}
          />
        </View>

        <BButton title={"Sign up"} onButtonPress={onSignupPress} />
      </View>
      <MediaPicker
        show={isPickerShown}
        onClose={onImagePressed}
        onImagePickerSelected={(imageSelected) => {
          onImageCameFromgallery(imageSelected);
        }}
        onCameraPressed={() => {
          setIsCameraShown(!isCameraShown);
        }}
      />
      <CustomCamera
        show={isCameraShown}
        onClose={() => setIsCameraShown(false)}
        onPicturetaken={(response) => {
          setIsCameraShown(false);
          setIsPickerShown(false);
          setImageFromCamera(response.uri);
        }}
      />
    </ScrollView>
  );
}
export { Signup };

const styles = StyleSheet.create({
  formCon: {
    height: 500,
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
  textButtonCon: {
    alignItems: "flex-end",
  },
  siginIn: {
    alignItems: "center",
  },
  pickImageCircle: {
    backgroundColor: "orange",
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
