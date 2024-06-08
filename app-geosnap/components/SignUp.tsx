import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function SignUp () {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#161B22'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text style={styles.title}>Crear usuario</Text>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Nombre</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Primer Apellido</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Segundo Apellido</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Correo Electronico</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Teléfono</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAddress) =>
                setUserAddress(UserAddress)
              }
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.inputDescription}>Contraseña</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAddress) =>
                setUserAddress(UserAddress)
              }
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => {}}>
            <Text style={styles.buttonTextStyle}>Registrarse</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    margin: 50,
  },
  SectionStyle: {
    flexDirection: 'column',
    height: 80,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#422171',
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: '#gray',
    height: 40,
    alignItems: 'center',
    borderRadius: 7,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#dadae8',
  },
  inputDescription: {
    color: 'gray',
    marginBottom: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
