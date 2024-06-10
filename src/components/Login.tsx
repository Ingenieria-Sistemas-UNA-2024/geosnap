import Input from "./Input"
import signInUser from "../libs/signInUser"
import React, { useRef } from "react"
import { theme } from "../utils/theme"
import { Camera } from "lucide-react-native"
import { setUser } from "../redux/userSlice"
import { useAppDispatch } from "../redux/hooks"
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack"
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"

type RootStackParamList = {
  Registro: undefined
  BottomNavigation: undefined
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Registro">

interface LoginProps {
  navigation: LoginScreenNavigationProp
}

const Login: React.FC = () => {
  const email = useRef<string>("")
  const password = useRef<string>("")
  const navigation = useNavigation();
  const dispatch = useAppDispatch()

  const handleSignInPress = async() => {
    if (email.current === "" || password.current === "") {
      Alert.alert("Todos los campos son obligatorios")
      return
    }
    try {
      const user = await signInUser(email.current, password.current)
      dispatch(setUser(user))
      navigation.navigate("TabNavigator")
    } catch (error: any) {
      Alert.alert(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Camera color="#54377f" size={100} />
        <Text style={styles.title}>Geo-Snap</Text>
      </View>
      <View style={{ width: "100%", gap: 20 }}>
        <Input
          label="Correo Electrónico"
          onChangeText={(value) => {
            email.current = value
          }}
          autoCapitalize="none"
        />
        <Input
          label="Contraseña"
          onChangeText={(value) => {
            password.current = value
          }}
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={() => handleSignInPress()}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
        <Text style={styles.footerText}>
          No tiene cuenta?
          <Text style={styles.signup} onPress={() => navigation.navigate("Registro")}>
            {" "}
            Registrarse
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSecundary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 20
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: theme.colors.primary,
    marginTop: 20,
  },
  inputDescriptionText: {
    fontSize: 14,
    color: "#868e94",
    marginBottom: 5,
  },
  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordText: {
    fontSize: 14,
    color: theme.colors.textSecundary,
  },
  forgetText: {
    fontSize: 11,
    color: "#3366bb",
    marginVertical: 6,
    textAlign: "right",
  },
  input: {
    height: 50,
    width: "100%",
    paddingHorizontal: 20,
    borderColor: theme.colors.textSecundary,
    borderWidth: 1,
    borderRadius: 7,
    color: theme.colors.white,
  },
  button: {
    backgroundColor: "#54377f",
    height: 55,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: theme.fontSizes.button,
    fontWeight: "bold",
    margin: 10,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
    marginTop: 30,
  },
  signup: {
    color: "#3366bb",
    fontSize: theme.fontSizes.button,
  },
})

export default Login