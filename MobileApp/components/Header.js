import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.navbarInteractive}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name="film" size={25} color="#fff" />
                </TouchableOpacity>
                <View style={styles.items}>
                    <Text style={styles.company2}>FILMS</Text>
                    {/*<TouchableOpacity onPress={() => navigation.navigate('Home')}>*/}
                    {/*    <Text style={styles.navLink}>Home</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => navigation.navigate('Movies')}>*/}
                    {/*    <Text style={styles.navLink}>Movies</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => navigation.navigate('Ticket')}>*/}
                    {/*    <View style={styles.button}>*/}
                    {/*        <Text style={styles.buttonText}>Buy a ticket</Text>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                <TouchableOpacity style={styles.burgerMenu} onPress={toggleMenu}>
                    <Image source={require('../assets/hamburger1.png')} style={styles.image} />
                </TouchableOpacity>
            </View>

            {/* Мобильное меню */}
            {menuOpen && (
                <View style={styles.mobileMenu}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Home'); }} style={styles.branding2}>
                            <Icon name="film" size={48} color="#fff" />
                            <Text style={styles.company1}>FILMS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleMenu} style={styles.menuClose}>
                            <Icon name="times" size={30} color="#fff" margin={35}/>
                        </TouchableOpacity>
                        <View style={styles.items2}>
                            <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Home'); }}>
                                <Text style={styles.navLink}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Movies'); }}>
                                <Text style={styles.navLink}>Movies</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Reviews'); }}>
                                <Text style={styles.navLink1}>Reviews</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button3}>
                            <Text style={styles.text22}>Buy a ticket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
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
    items: {
        flexDirection: 'row',
        alignItems: 'center'
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
    navLink1: {
        marginHorizontal: 10,
        fontSize: 23,
        color: '#ffffff',
        padding: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#e74c3c',
        padding: 20,

        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
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
    text18: {
        fontSize: 16,
        color: '#000'
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
    branding2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    company1: {
        marginLeft: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    company2: {
        fontSize: 24,
        fontWeight: '400',
        color: '#ffffff'
    },
    menuClose: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    items2: {
        marginTop: 20
    },
    button3: {
        marginTop: 20,
        backgroundColor: '#9c2e26',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    text22: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default Header;
