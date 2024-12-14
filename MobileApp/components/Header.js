import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation(); // Для работы с навигацией React Navigation

    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>My App</Text>
            </View>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('About')}>
                    <Text style={styles.navText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.navText}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#333',
    },
    logoContainer: {
        flex: 1,
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    navContainer: {
        flexDirection: 'row',
    },
    navItem: {
        marginHorizontal: 10,
    },
    navText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Header;
