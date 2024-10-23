import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

import APIcall from './components/APIcall';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

       <Stack.Screen name="Request" component={APIcall} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
