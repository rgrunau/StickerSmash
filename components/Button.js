import { StyleSheet, View, Pressable, Text } from "react-native-web";

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => alert("you pressed a button")}
        style={styles.button}
      >
        <Text styles={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    width: 320,
    height: 68,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 16,
  },
});
