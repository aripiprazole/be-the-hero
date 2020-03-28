import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Incidents from "./views/Incidents";
import Detail from "./views/Detail";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"Incidents"} component={Incidents} />
        <Stack.Screen name={"Detail"} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
