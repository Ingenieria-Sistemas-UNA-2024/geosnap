// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import TabNavigator from './components/TabNavigator';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio de Sesión" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Registro" component={SignUp} />
        <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Perfil" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
