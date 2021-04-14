import React from 'react';
import { useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import MatchItem from '../components/MatchItem';
import tasksApi from '../api/tasksApi';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Roboto_300Light, Roboto_900Black, Roboto_400Regular } from '@expo-google-fonts/roboto';

const ResultsScreen = () => {
    const [games, setGames] = useState(null);

    let [fontsLoaded] = useFonts({
        Roboto_300Light, Roboto_900Black, Roboto_400Regular
    });

    useEffect(() => {
        getGames();
    }, []);

    const getGames = async () => {
        const response = await tasksApi.get('/api/games/');
        const sortedGames = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setGames(sortedGames);
    }

    if (!fontsLoaded) return <AppLoading />

    return (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={games}
            style={{ marginBottom: 40 }}
            renderItem={({ item }) => {
                return (
                    <View>
                        <MatchItem data={item} />
                    </View>
                )
            }}
        />
    )
}

ResultsScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: '#051749' },
    headerTitleStyle: { color: '#ffffff' },
    headerTitleAlign: 'left',
    headerTintColor: '#ffffff',
    headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => { console.log('Go back'); }}>
            <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
    )
});

export default ResultsScreen;