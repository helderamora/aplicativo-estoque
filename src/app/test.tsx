import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function Test() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
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
});
