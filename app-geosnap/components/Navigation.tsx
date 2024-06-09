// Main.js
import React, {useState,useEffect,useRef} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Home, Plus, User } from 'lucide-react-native';
import { NavigationProp } from '@react-navigation/native';

type NavigationProps = {
    navigation: NavigationProp<any>;
};

export default function Navigation({ navigation }: NavigationProps){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
                <Home size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Camera')}>
                <Plus size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
                <User size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000000',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#422171',
        position: 'relative',
        bottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
});
