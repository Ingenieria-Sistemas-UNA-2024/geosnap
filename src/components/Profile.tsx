import React from 'react';
import { User } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../redux/hooks';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = () => {
  const user: User = useAppSelector((state)=>state.user.user)
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Inicio de Sesión');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GeoSnap</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{user.name}</Text>
        <Text style={styles.label}>Primer apellido:</Text>
        <Text style={styles.value}>{user.firstLastName}</Text>
        <Text style={styles.label}>Segundo apellido:</Text>
        <Text style={styles.value}>{user.secondLastName}</Text>
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.value}>{user.email}</Text>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
    paddingBottom: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#422171',
    marginBottom: 20,
  },
  userInfo: {
    width: '100%',
    paddingTop: 50,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginTop: 5,
  },
  logoutButton: {
    marginTop: 70,
    backgroundColor: '#422171',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
