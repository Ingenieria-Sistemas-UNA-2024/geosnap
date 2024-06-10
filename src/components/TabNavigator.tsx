import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import Home from './Home';
import Profile from './Profile';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Photo, User } from '../types/types';
import { useAppSelector } from '../redux/hooks';
import savePhoto from '../libs/savePhoto';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const user: User = useAppSelector((state)=>state.user.user)
  const [image, setImage] = useState();

  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: false,
        quality: 1,
      });
      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (file && file instanceof File) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      } else {
        reject(new Error('El objeto proporcionado no es un archivo válido.'));
      }
    });
  };

  const saveImage = async (image: any) => {
    try {
      const locationData = await getCurrentLocation();
      setImage(image);
      if (!locationData) {
        throw new Error("Faltan cordenadas");
      }
  
      if (image instanceof File || image instanceof Blob) {
        const photoData = await convertFileToBase64(image as File);
        console.log(photoData);
        const photo: Photo = {
          photoData,
          latitude: locationData.latitude.toString(),
          longitude: locationData.longitude.toString(),
          userID: user.userID,
        };
        savePhoto(photo);
      } else {
        console.error("El objeto proporcionado no es un archivo válido.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return null;
      }

      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
      return { latitude, longitude };
    } catch (error) {
      console.log('Error getting location:', error);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' as const : 'home' as const;
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'user' as const : 'user' as const;
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#422171',
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
      <TouchableOpacity style={styles.cameraButton} onPress={uploadImage}>
        <Plus size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#7f7f7f',
  },
  cameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#422171',
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});