import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

const MovieDetails = ({ route }) => {
    const { id } = route.params;
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://192.168.1.131:3000/api/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!movie) {
        return <Text style={styles.error}>Movie not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: movie.poster }} style={styles.poster} />
            <View style={styles.block}>
                <Text style={styles.text}>{movie.title}</Text>
                <Text style={styles.text2}>Rating: {movie.rating}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.text}>Directed by:</Text>
                <Text style={styles.text2}>{movie.director}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.text}>Genres:</Text>
                <Text style={styles.text2}>{movie.genre}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.text}>Year of creation:</Text>
                <Text style={styles.text2}>{movie.year}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.text}>Description:</Text>
                <Text style={styles.text2}>{movie.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    block: {
        width: 350,
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    poster: {
        width: 350,
        height: 500,
        marginBottom: 30,
        borderRadius: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(191, 38, 38)',
    },
    text2: {
        fontSize: 18,
        fontWeight: 'normal',
        color: 'rgb(255, 255, 255)',
    },
    error: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MovieDetails;
