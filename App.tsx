import Home from "./src/components/Home"
import React from "react"
import Login from "./src/components/Login"
import store from "./src/redux/store"
import SignUp from "./src/components/SignUp"
import Profile from "./src/components/Profile"
import TabNavigator from "./src/components/TabNavigator"
import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Inicio de Sesión" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Registro" component={SignUp} />
          <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
