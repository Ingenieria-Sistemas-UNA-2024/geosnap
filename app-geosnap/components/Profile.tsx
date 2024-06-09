import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  const name = "James";
  const firstLastName = "Rivera";
  const secondLastName = "Núñez";
  const email = "james.rivera.nunez@est.una.ac.cr";
  const phone = "8707-7994";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GeoSnap</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{name}</Text>
        <Text style={styles.label}>Primer apellido:</Text>
        <Text style={styles.value}>{firstLastName}</Text>
        <Text style={styles.label}>Segundo apellido:</Text>
        <Text style={styles.value}>{secondLastName}</Text>
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.value}>{email}</Text>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>
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
    paddingBottom: 70, // To avoid overlapping with footer
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
});

export default Profile;
