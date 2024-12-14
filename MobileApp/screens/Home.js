import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Home = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header/>

            {/* Hero Section */}
            <View style={styles.hero}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1668890094751-6986d0ca9dfc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxNb3ZpZSUyMHRoZWF0ZXJ8ZW58MHx8fHwxNzMzNDI2NDc5fDA&ixlib=rb-4.0.3&w=1500" }}
                    style={styles.heroImage}
                />
                <View style={styles.overlay}>
                    <Text style={styles.title}>Create new experiences with us</Text>
                    <Text style={styles.description1}>
                        Explore the latest blockbusters and classic movies by buying tickets
                        from us and sharing reviews of the films you've seen
                    </Text>
                </View>
            </View>

            {/* About Section */}
            <View style={styles.about}>
                <Text style={styles.subsubtitle}>Discover the magic</Text>
                <Text style={styles.subtitle}>
                    Your ultimate movie experience awaits
                </Text>
                <Text style={styles.description2}>
                    Immerse yourself in the world of cinema with Films, a website dedicated to providing a one-of-a-kind movie experience in St Petersburg. Discover a wide range of films, purchase tickets for the latest blockbusters, exchange reviews, and interact with a vibrant community of film aficionados. Embark on your cinematic adventure today!
                </Text>
            </View>

            <Gallery/>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'rgb(0, 0, 0)',
    },
    hero: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroImage: {
        width: '100%',
        height: 350,
        backgroundColor: '#ccc',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'normal',
        textTransform: 'uppercase',
        color: 'rgb(255, 255, 255)',
        textAlign: 'left',
    },
    description1: {
        fontSize: 16,
        color: 'rgb(255, 255, 255)',
        textAlign: 'left',
        marginTop: 16
    },
    about: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        marginHorizontal: 40,
        gap: 15,
    },
    subsubtitle: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'rgb(225, 71, 71)',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 22,
        color: 'rgb(255, 255, 255)',
        textTransform: 'uppercase',
        marginHorizontal: 50,
        textAlign: 'center',
    },
    description2: {
        fontSize: 16,
        color: 'rgb(255, 255, 255)',
        textAlign: 'justify',
    },
});
