import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BButton } from "../../components/BButton";
import { Input } from "../../components/input";
import { colors, modifiers } from "../../utils/theme";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";
import {firebase} from "../../services/firebaseConfig",

function Signup({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [userNmae, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };
  const onSignupPress = () => {
    console.log(userNmae, email, password);
    firebase
    .firestore()
    .collection('users')
    .doc('dummy id')
    .set({
      user_name:userNmae,
      user_email:email,
      user_password:password.
    })
  };
  const goToSignin = () => {
    navigation.navigate("Signin");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bgcolor }}>
      <Header title={"Sign up"} />
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
});
