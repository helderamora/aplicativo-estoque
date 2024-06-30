import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.titleBox}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.titleBox}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.titleBox}>Box 3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  box1: {
    flex: 0.1,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#da6eee",
    borderRadius: 5,
  },
  box2: {
    flex: 0.75,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0058a8",
    borderRadius: 5,
  },
  box3: {
    flex: 0.12,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#73b03f",
    borderRadius: 5,
  },
  titleBox: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
