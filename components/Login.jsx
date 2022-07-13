import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 240, width: 240, resizeMode: "contain" }}
        source={require("./images/logo.png")}
      />
      <View>
        <TextInput
          placeholder="Username or E-mail"
          style={styles.btn}
        ></TextInput>
        <TextInput placeholder="Password" style={styles.btn}></TextInput>
        <Button title="Login"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 250,
    borderWidth: 2,
    borderColor: "#777",
    ...padding(10, 20, 10, 20),
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
});
