import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

const NavigationTry = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name = "Profile" component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTry;


