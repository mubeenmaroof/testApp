import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BButton } from "../../components/BButton";
import { Input } from "../../components/input";
import { colors, modifiers } from "../../utils/theme";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";

function Signup({ navigation }) {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
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
          iconeName={"person-outline"}
        />
        <Input
          placeholder={"Email"}
          showIcon={true}
          iconeName={"mail-outline"}
        />
        <Input
          placeholder={"Password"}
          isSecure={!showPass}
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

        <BButton title={"Sign up"} />
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
