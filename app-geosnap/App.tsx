// App.tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
        <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161B22',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
