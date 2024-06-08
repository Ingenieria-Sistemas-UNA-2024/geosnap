// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio de Sesión" component={Login} />
        <Stack.Screen name="Registro" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
