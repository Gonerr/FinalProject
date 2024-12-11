import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
    // Загружаем шрифты
    const [fontsLoaded] = useFonts({
        'NotoSans-Italic': require('./assets/fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf'),
        'NotoSans': require('./assets/fonts/NotoSans-VariableFont_wdth,wght.ttf')
    });

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
