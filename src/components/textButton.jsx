import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, modifiers } from "../utils/theme";

function TextButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonCon} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons
        name={"arrow-forward"}
        size={24}
        style={styles.backIcon}
        color={colors.primary}
      ></Ionicons>
    </TouchableOpacity>
  );
}

export { TextButton };

const styles = StyleSheet.create({
  buttonCon: {
    paddingHorizontal: modifiers.containerPadding,
    flexDirection: "row",
  },
  title: {
    fontWeight: "medium",
  },
  backIcon: {
    marginLeft: 10,
  },
});
