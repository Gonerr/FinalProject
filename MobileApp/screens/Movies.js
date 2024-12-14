import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Movies = () => {
    const navigation = useNavigation();
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        // Fetch movies from the API
        fetch('http://192.168.1.131:3000/api/movies') //IPCONFIG IPv4-адрес ВМЕСТО МОЕГО IP (LOCALHOST НЕ ПОДОЙДЕТ)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setFilteredMovies(data);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredMovies];
        if (order === 'newest') {
            sorted.sort((a, b) => b.year - a.year);
        } else if (order === 'oldest') {
            sorted.sort((a, b) => a.year - b.year);
        }
        setFilteredMovies(sorted);
    };

    const handleMovieClick = (id) => {
        navigation.navigate('MovieDetails', { id }); // Navigate to the movie details screen with movie ID
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Movies</Text>

            {/* Search Bar */}
            <TextInput
                style={styles.searchInput}
                placeholder="Search for a movie..."
                value={searchQuery}
                onChangeText={handleSearch}
            />

            {/* Sorting Options */}
            <View style={styles.sortOptions}>
                <TouchableOpacity onPress={() => handleSort('newest')}>
                    <Text style={[styles.sortButton, sortOrder === 'newest' && styles.activeSort]}>
                        Newest
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSort('oldest')}>
                    <Text style={[styles.sortButton, sortOrder === 'oldest' && styles.activeSort]}>
                        Oldest
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Movies List */}
            <FlatList
                data={filteredMovies}
                keyExtractor={(item) => item._id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.movieCard}
                        onPress={() => handleMovieClick(item._id)}
                    >
                        <Image
                            source={{ uri: item.poster }}
                            style={styles.poster}
                            resizeMode="cover"
                        />
                        <Text style={styles.movieTitle}>{item.title}</Text>
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
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    sortOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    sortButton: {
        fontSize: 16,
        color: '#007bff',
    },
    activeSort: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    movieCard: {
        flex: 1,
        margin: 8,
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 2,
    },
    poster: {
        width: '100%',
        height: 150,
    },
    movieTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
    },
});
