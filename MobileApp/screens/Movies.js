import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
    const navigation = useNavigation();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.131:3000/api/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleMovieClick = (id) => {
        navigation.navigate('MovieDetails', { id });
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Movies</Text> */}

            {/* Movies List */}
            <FlatList
                data={movies}
                keyExtractor={item => item._id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.movieCard}
                        onPress={() => handleMovieClick(item._id)}
                    >
                        <Image
                            source={{ uri: item.poster }}
                            style={styles.poster}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000000',
    },
    // header: {
    //     fontSize: 30,
    //     fontWeight: 'normal',
    //     marginBottom: 16,
    //     textAlign: 'center',
    //     color: 'rgb(225, 71, 71)',
    // },
    movieCard: {
        flex: 1,
        margin: 8,
        alignItems: 'center',
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 2,
    },
    poster: {
        width: '100%',
        height: 250,
    },
});
