import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getTime, getDay, getMonth, getYear, months } from '../utils/DateFunctions';

const MatchItem = ({ data }) => {

    const renderDescription = (data) => {
        return (data.tournament.tournamentType == 1 ?
            `Group ${data.tournament.group} - ${data.tournament.description}`
            : data.tournament.description)
    }

    if (data == null) return <View><Text>No games available!</Text></View>

    return (

        <View style={styles.container}>

            <View style={{ width: 63, backgroundColor: data.tournament.color, alignItems: 'center', paddingTop: 5 }}>
                <Text style={[styles.date, { fontSize: 20 }]}>{getDay(data.date)}</Text>
                <Text style={[styles.date, { fontSize: 13 }]}>{months[getMonth(data.date) - 1]}</Text>
                <Text style={[styles.date, { fontSize: 11, fontFamily: 'Roboto_300Light' }]}>{getYear(data.date)}</Text>
                <Text style={[styles.date, { fontSize: 11 }]}>{getTime(data.date)}</Text>
            </View>

            <View style={{ flex: 29 }}>
                <View style={{ alignItems: "center", marginTop: 21 }}>
                    <Image source={{ uri: data.homeTeam.logo }} style={styles.image} />
                    <Text style={styles.team}>{data.homeTeam.name}</Text>
                </View>
            </View>

            <View style={{ flex: 22 }}>
                <View style={{ height: 35, alignItems: "center" }}>
                    <Text style={styles.gameData}>{data.tournament.name}</Text>
                    <Text style={styles.gameData}>
                        {renderDescription(data)}
                    </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.goals}>{data.homeGoals}</Text>
                    <Text style={styles.goals}>{data.awayGoals}</Text>
                </View>
            </View>

            <View style={{ flex: 29 }}>
                <View style={{ alignItems: "center", marginTop: 21 }}>
                    <Image source={{ uri: data.awayTeam.logo }} style={styles.image} />
                    <Text style={styles.team}>{data.awayTeam.name}</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ececed',
        height: 80,
        borderBottomColor: '#dfdedf',
        borderBottomWidth: 1
    },
    gameData: {
        fontSize: 10,
        color: '#696969',
        fontFamily: 'Roboto_400Regular'
    },
    date: {
        color: '#ffffff',
        fontFamily: 'Roboto_400Regular'
    },
    image: {
        height: 38,
        width: 38,
    },
    goals: {
        fontSize: 21,
        color: '#696969',
        fontFamily: 'Roboto_900Black'
    },
    team: {
        fontSize: 12,
        fontFamily: 'Roboto_900Black',
        color: '#000000'
    }
});

export default MatchItem;