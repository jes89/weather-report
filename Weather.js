import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';

const weatherCases = {
    Rain : {
        colors : ['#00C6FB','#005BEA'],
        title : 'Raining like a MF',
        subTitle : 'For more info look outside',
        icon : 'ios-rainy'
    },
    Clear : {
        colors : ['#FEF253','#FF7300'],
        title : 'Sunny as fuck',
        subTitle : 'Go get your ass burnt',
        icon : 'ios-sunny'
    },
    Thunderstorm : {
        colors : ['#00ECBC','#007ADF'],
        title : 'Thunderstorm in the house',
        subTitle : 'Actually, outside of the house',
        icon : 'ios-thunderstorm'
    },
    Clouds : {
        colors : ['#D7D2CC','#304352'],
        title : 'Clouds',
        subTitle : 'I know, fucking boring',
        icon : 'ios-cloudy'
    },
    Snow : {
        colors : ['#7DE2FC','#B9B6E5'],
        title : 'Cold as balls',
        subTitle : 'Do you want to build a snowman? Fuck no',
        icon : 'ios-snow'
    },
    Drizzle : {
        colors : ['#D7D2CC','#304352'],
        title : 'Drizzle',
        subTitle : 'Do not get your freezing ass ',
        icon : 'ios-cloudy'
    },
    Haze : {
        colors : ['#D7D2CC','#304352'],
        title : 'Fucking Haze',
        subTitle : 'Do not get your freezing ass',
        icon : 'ios-cloudy'
    }
}

function Weather ( {temp, weatherName} ) {

    const weatherCase = weatherCases[weatherName];

    return(
        <LinearGradient colors={weatherCase.colors} style={styles.container} >
            <View style={styles.upper} >
                <Ionicons color='white' size={144} name={weatherCase.icon} ></Ionicons>
                <Text style={styles.temp}>{Math.floor(temp - 273.15)}˚</Text>
            </View>
            <View> 
                <Text style={styles.title} >{weatherCase.title}</Text>
                <Text style={styles.subTitle}>{weatherCase.subTitle}</Text>
            </View>
        </LinearGradient>
    )
}    

Weather.prototype = {
    temp : PropTypes.number.isrequired,
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    upper : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'transparent',
    },
    temp : {
        fontSize : 48,
        backgroundColor : 'transparent',
        color : 'white',
        marginTop : 10,
    },
    lower : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        paddingLeft : 25
    },
    title : {
        fontSize : 38,
        backgroundColor : 'transparent',
        color : 'white',
        marginLeft : 20,
    },
    subTitle : {
        fontSize : 24,
        backgroundColor : 'transparent',
        color : 'white',
        marginBottom : 24,
        marginLeft : 20
    }
})

export default Weather; 