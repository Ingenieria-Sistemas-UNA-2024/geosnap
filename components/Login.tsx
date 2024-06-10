import React, { useState } from 'react'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { CircleUserRound } from 'lucide-react-native';

export default function LoginForm() {
    const [click, setClick] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <CircleUserRound color="#848586" size={100} />
            <Text style={styles.title}>Geo-Snap</Text>
            <View style={styles.inputView}>
                <View style={styles.inputDescription}>
                    <Text style={styles.inputDescriptionText}>Correo Electrónico</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#868e94"
                    value={username}
                    onChangeText={setUsername}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
                <View style={styles.inputDescription}>
                    <Text style={styles.inputDescriptionText}>Contraseña</Text>
                    <Pressable onPress={() => Alert.alert("Forget Password!")}>
                        <Text style={styles.forgetText}>¿Has olvidado la contraseña?</Text>
                    </Pressable>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#868e94"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={() => Alert.alert("El Scrum Máster es gay")}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </Pressable>
            </View>
            <Text style={styles.footerText}>No tiene cuenta?<Text style={styles.signup}>  Registrarse</Text></Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#422171"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  inputDescription: {
    alignItems: "flex-start",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputDescriptionText: {
    fontSize: 14,
    color: "#868e94"
  },
  input: {
    height: 50,
    width: 300,
    paddingHorizontal: 20,
    borderColor: "#868e94",
    borderWidth: 1,
    borderRadius: 7,
    color: "#feffff"
  },
  forgetText: {
    fontSize: 11,
    color: "#3366bb",
    margin: 6
  },
  button: {
    backgroundColor: "#422171",
    height: 55,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    margin: 10
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20
  },
  footerText: {
    textAlign: "center",
    color: "gray",
    marginTop: 30
  },
  signup: {
    color: "#3366bb",
    fontSize: 13
  }
});
