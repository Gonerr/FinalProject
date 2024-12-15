import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Movies from './screens/Movies';
import Header from './components/Header';
import MovieDetails from './screens/MovieDetails';

const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'NotoSans-Italic': require('./assets/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf'),
        'NotoSans': require('./assets/fonts/NotoSans-VariableFont_wdth,wght.ttf')
    });

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator
                screenOptions={{
                    header: (props) => <Header {...props} />,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Movies" component={Movies} />
                <Stack.Screen name="MovieDetails" component={MovieDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

