import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigation = useNavigation();

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={closeMenu}>
            <View style={styles.header}>
                {/* Основная навигационная панель */}
                <View style={styles.navbarInteractive}>
                    {/* Логотип */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name="film" size={25} color="#fff" />
                    </TouchableOpacity>

                    {/* Название компании */}
                    <Text style={styles.company2}>FILMS</Text>

                    {/* Бургер-меню */}
                    <TouchableOpacity style={styles.burgerMenu} onPress={toggleMenu}>
                        <Image source={require('../assets/hamburger1.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>

                {/* Мобильное меню */}
                {menuOpen && (
                    <TouchableOpacity activeOpacity={1} style={styles.mobileMenu} onPress={() => {}}>
                        <View style={styles.nav}>
                            <TouchableOpacity
                                onPress={() => { toggleMenu(); navigation.navigate('Home'); }}
                                style={styles.navLink}
                            >
                                <Text style={styles.text}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { toggleMenu(); navigation.navigate('Movies'); }}
                                style={styles.navLink}
                            >
                                <Text style={styles.text}>Movies</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { toggleMenu(); navigation.navigate('Reviews'); }}
                                style={styles.navLink}
                            >
                                <Text style={styles.text}>Reviews</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        position: 'fixed'
    },
    navbarInteractive: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    navLink: {
        marginHorizontal: 10,
        fontSize: 23,
        color: '#ffffff',
        padding: 20,
        borderBottomWidth: 1,
        borderStyle: "solid",
        textTransform: 'uppercase',
        borderColor: '#e74c3c',
        fontWeight: '500'
    },
    burgerMenu: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    mobileMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#000000',
        zIndex: 1000,
        borderBottomWidth: 1,
        borderBottomColor: '#191919'
    },
    nav: {
        padding: 40
    },
    company2: {
        fontSize: 24,
        fontWeight: '400',
        color: '#ffffff'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default Header;
