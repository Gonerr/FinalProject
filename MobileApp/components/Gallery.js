import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gallery = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.gallery}>
            <View style={styles.sectionTitle}>
                <Text style={styles.heading}>
                    {props.heading1 ? props.heading1 : "Explore Our movie Gallery"}
                </Text>
                <Text style={styles.content}>
                    {props.content1 ? props.content1 : "Browse through a stunning collection of movie posters from various genres and eras. Find your favorites and get ready for an immersive cinema experience."}
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image
                        alt={props.image1Alt}
                        source={{ uri: "https://i.pinimg.com/736x/6a/f5/a1/6af5a1c2a2c00f55a216dd9a74e1e1cc.jpg" }}
                        style={styles.image}
                    />
                    <Image
                        alt={props.image2Alt}
                        source={{ uri: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/57d9492f-84a9-4749-aeb1-d172d60c7793/1920x" }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.column}>
                    <Image
                        alt={props.image3Alt}
                        source={{ uri: "https://images.kinorium.com/movie/poster/472809/w1500_44943050.jpg" }}
                        style={styles.imageWide}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Movies')}>
                        <Text style={styles.buttonText}>
                            {props.text ? props.text : "Buy a ticket"}
                        </Text>
                    </TouchableOpacity>
                    <Image
                        alt={props.image4Alt}
                        source={{ uri: "https://avatars.dzeninfra.ru/get-zen_doc/751940/pub_5e7d004d6c402b45fcb1649d_5e7d01918b63b9743c9ae4df/scale_1200" }}
                        style={styles.imageWide}
                    />
                    <Image
                        alt={props.image5Alt}
                        source={{ uri: "https://cdn1.ozone.ru/s3/multimedia-t/6292258685.jpg" }}
                        style={styles.imageWide}
                    />
                </View>
                <View style={styles.row}>
                    <Image
                        alt={props.image6Alt}
                        source={{ uri: "https://cdn.ananasposter.ru/image/cache/catalog/poster/pos23/29/70462-1000x830.jpg" }}
                        style={styles.image}
                    />
                    <Image
                        alt={props.image7Alt}
                        source={{ uri: "https://cdn1.ozone.ru/s3/multimedia-f/6667782603.jpg" }}
                        style={styles.image}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gallery: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    sectionTitle: {
        alignItems: 'center',
        marginBottom: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666'
    },
    container: {
        flex: 1,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%'
    },
    image: {
        width: '48%',
        height: 200,
        resizeMode: 'cover'
    },
    imageWide: {
        width: '100%',
        height: 300,
        resizeMode: 'cover'
    },
    button: {
        backgroundColor: '#9c2e26',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        margin: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default Gallery;
