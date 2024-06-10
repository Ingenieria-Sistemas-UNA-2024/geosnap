import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Camera  } from 'lucide-react-native';

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Registro: undefined;
  BottomNavigation: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: LoginProps): JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUpPress = () => {
        navigation.navigate('Registro');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Camera  color="#54377f" size={100} />
                <Text style={styles.title}>Geo-Snap</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputView}>
                    <Text style={styles.inputDescriptionText}>Correo Electrónico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=''
                        placeholderTextColor="#868e94"
                        value={username}
                        onChangeText={setUsername}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputView}>
                    <View style={styles.passwordRow}>
                        <Text style={styles.passwordText}>Contraseña</Text>
                        <Pressable onPress={() => Alert.alert("Módulo en mantenimiento")}>
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
                    <Pressable style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </Pressable>
                </View>
                <Text style={styles.footerText}>
                    No tiene cuenta?
                    <Text style={styles.signup} onPress={handleSignUpPress}>  Registrarse</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#54377f',
    marginTop: 20,
  },
  formContainer: {
    width: '80%',
  },
  inputView: {
    marginBottom: 20,
  },
  inputDescriptionText: {
    fontSize: 14,
    color: '#868e94',
    marginBottom: 5,
  },
  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passwordText: {
    fontSize: 14,
    color: '#868e94',
  },
  forgetText: {
    fontSize: 11,
    color: '#3366bb',
    marginVertical: 6,
    textAlign: 'right',
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#868e94',
    borderWidth: 1,
    borderRadius: 7,
    color: '#feffff',
  },
  buttonView: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#54377f',
    height: 55,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 30,
  },
  signup: {
    color: '#3366bb',
    fontSize: 13,
  }
});