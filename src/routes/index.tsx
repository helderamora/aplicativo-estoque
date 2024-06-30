import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Produtos</Text>
    </View>
  );
}

function Stock() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Estoque</Text>
    </View>
  );
}

function Datacritica() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Validade</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Produtos" component={HomeScreen} />
      <Tab.Screen name="Estoque" component={Stock} />
      <Tab.Screen name="Validade" component={Datacritica} />
    </Tab.Navigator>
  );
}

export default function home() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
