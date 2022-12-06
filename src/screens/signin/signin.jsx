import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BButton } from "../../components/BButton";
import { Input } from "../../components/input";
import { colors, modifiers } from "../../utils/theme";
import { Header } from "../../components/header";
import { TextButton } from "../../components/textButton";

function Signin({ navigation }) {
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  };
  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bgcolor }}>
      <Header title={"Sign in"} />
      <View style={styles.formCon}>
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
          <TextButton title={"Forgot Your Password"} />
        </View>

        <BButton title={"Sign in"} />
        <View style={styles.siginup}>
          <TextButton
            title={"Dont Have an account yet signup?"}
            onPress={goToSignup}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export { Signin };

const styles = StyleSheet.create({
  formCon: {
    height: 500,
    justifyContent: "center",
    paddingHorizontal: modifiers.containerPadding,
  },
  textButtonCon: {
    alignItems: "flex-end",
  },
  siginup: {
    alignItems: "center",
  },
});
