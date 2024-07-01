import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import _layout from "./tabs/_layout";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tabs" component={_layout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
