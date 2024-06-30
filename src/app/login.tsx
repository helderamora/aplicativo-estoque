import React, { useState } from "react";
import { Link, router } from "expo-router";

// import { home } from "../routes/index";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fixedPassword = () => {
    const fixedUsername = "helder";
    const fixedPass = "1234";

    if (username === fixedUsername && password === fixedPass) {
      console.log("welcome!");
    } else {
      console.log("Fail!!!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxArrow}>
        <Link asChild href="/">
          <Ionicons name="arrow-back" color="#000" size={30} />
        </Link>
      </View>

      <View style={styles.boxLogin}>
        <View style={styles.inputAreaEmail}>
          <TextInput
            style={styles.inputEmail}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={"#c5c5c5"}
            placeholder="Insira seu usuário"
          />
        </View>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Insira sua senha"
            placeholderTextColor={"#c5c5c5"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePass(!hidePass)}
          >
            {hidePass ? (
              <Ionicons name="eye" color="#000" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#000" size={25} />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonAdd}>
          <Link
            href={"test"}
            style={{ color: "#fff", fontWeight: "bold", fontSize: 22 }}
            onPress={fixedPassword}
          >
            Entrar
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  boxArrow: {
    flex: 0.3,
    width: "82%",
    height: 64,
    position: "absolute",
    top: 24,
  },
  boxLogin: {
    flex: 0.3,
    height: 300,
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 64,
    gap: 18,
  },
  inputAreaEmail: {
    flexDirection: "row",
    width: "82%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 64,
    alignItems: "center",
  },
  inputArea: {
    flexDirection: "row",
    width: "82%",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 64,
    alignItems: "center",
  },
  inputEmail: {
    width: "100%",
    height: 50,
    color: "#000",
    padding: 8,
    paddingLeft: 15,
    fontSize: 20,
  },
  input: {
    width: "85%",
    height: 50,
    color: "#000",
    padding: 8,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "black",
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "#00adda",
    height: 64,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  textBtnEnter: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
