import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = 'a3b078c1bf4eca9caea4e1442483f486';
 
export default class App extends Component {
  
  state = {
    isLocation : false,
    error : null,
    temperature : null,
    name : null,
    location : null,
    selectedView : null,
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  componentDidMount(){

    navigator.geolocation.getCurrentPosition( (position) => {
      
      const coordsObj = position.coords;
      
      this._getWeather(coordsObj.latitude, coordsObj.longitude);
    },
    error => {
      this.setState({
        error,
      })
    })
  }

  

  _getWeather (lat, long) {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`;

    fetch(requestUrl)
    .then(response => response.json())
    .then(jsonData => {

      this.setState({
        temperature : jsonData.main.temp,
        name : jsonData.weather[0].main,
        isLocation : true,
      })
    })
  }

  render() {
    
    const { isLocation, temperature, name } = this.state;

    return (
      <View style={styles.container}>
          <StatusBar hidden={true}></StatusBar>
          {isLocation ? <Weather temp={temperature} weatherName={name} /> : <View style={styles.loadding} >
          <Text style={styles.loaddingText} >Getting the fucking weather </Text>
          </View>}
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#FFF'
  },
  loadding : {
    flex:1,
    backgroundColor : '#FDF6AA', 
    justifyContent : 'flex-end',
    paddingLeft : 25,
  },
  loaddingText : {
    fontSize : 38,
     marginBottom : 100, 
  }
})