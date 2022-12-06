import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/theme";

function BButton({ title = "title", bgColor = colors.green, onButtonPress }) {
  return (
    <TouchableOpacity
      style={[styles.btnClr, { backgroundColor: colors.primary }]}
      onPress={onButtonPress}
    >
      <Text style={styles.btnTitle}> {title} </Text>
    </TouchableOpacity>
  );
}

export { BButton };

const styles = StyleSheet.create({
  btnClr: {
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
});
