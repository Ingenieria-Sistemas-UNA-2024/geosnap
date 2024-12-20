import Input from "./Input";
import saveUser from "../libs/saveUser";
import React, { useState } from "react";
import { theme } from "../utils/theme";
import { User } from "../types/types";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from "react-native";

const initialUser: User = {
  name: "",
  firstLastName: "",
  secondLastName: "",
  email: "",
  phone: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState<User>(initialUser);
  const [errortext, setErrortext] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (field: keyof User, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleSignUpUser = async(user: User) => {
    for (const [key, value] of Object.entries(user)) {
      if (value.trim() === "") {
        setErrortext(`El campo ${key} es obligatorio y no puede estar vacío.`);
        return;
      }
    }
    try {
      saveUser(user)
      navigation.navigate('Inicio de Sesión')
    } catch (error) {
      setErrortext(`Ocurrio un error a la hora de registrase intentelo de nuevo`);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.backgroundSecundary }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={styles.title}>Crear usuario</Text>
        <KeyboardAvoidingView enabled>
          <Input label="Nombre" onChangeText={(value) => handleInputChange("name", value)} autoCapitalize="sentences" />
          <Input label="Primer Apellido" onChangeText={(value) => handleInputChange("firstLastName", value)} autoCapitalize="sentences" />
          <Input label="Segundo Apellido" onChangeText={(value) => handleInputChange("secondLastName", value)} autoCapitalize="sentences" />
          <Input label="Correo Electrónico" onChangeText={(value) => handleInputChange("email", value)} keyboardType="email-address" />
          <Input label="Teléfono" onChangeText={(value) => handleInputChange("phone", value)} keyboardType="phone-pad" />
          <Input
            label="Contraseña"
            onChangeText={(value) => handleInputChange("password", value)}
            secureTextEntry
            autoCapitalize="sentences"
          />
          {errortext !== "" && <Text style={styles.errorTextStyle}>{errortext}</Text>}
          <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={() => handleSignUpUser(user)}>
            <Text style={styles.buttonTextStyle}>Registrarse</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    textAlign: "center",
    margin: 50,
  },
  buttonStyle: {
    backgroundColor: theme.colors.backgroundPrimary,
    borderWidth: 1,
    color: theme.colors.white,
    borderColor: "#gray",
    height: 40,
    alignItems: "center",
    borderRadius: 7,
    marginHorizontal: 35,
    marginVertical: 20,
  },
  buttonTextStyle: {
    color: theme.colors.white,
    paddingVertical: 10,
    fontSize: theme.fontSizes.button,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: theme.fontSizes.body,
  },
});

export default SignUp;
