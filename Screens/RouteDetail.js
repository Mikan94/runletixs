import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

export default class RouteDetail extends Component {
  render() { 
    const route = this.props.navigation.getParam('route', 'no data')
    const latitude = this.props.navigation.getParam('latitude', 'no data')
    const longitude = this.props.navigation.getParam('longitude', 'no data')
    const name = this.props.navigation.getParam('name', 'no data')
    const distance = this.props.navigation.getParam('distance', 'no data')
    const exercise = this.props.navigation.getParam('exercise', 'no data')
    const alertTime = distance/exercise;

    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

        <Polygon
          coordinates={route}/>

          <Marker
         coordinate={{latitude: latitude, longitude: longitude }}>
          </Marker>

          <View>
            <Text>Name: {name}</Text>
            <Text>Distanz: {distance}km </Text>
            <Text>Übungen: {exercise}</Text>
            <Text>Time: {alertTime}</Text>
          </View>
        </MapView>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Run')}>
            <Text style={styles.text}>starten</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },  
  btn: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'red',
    bottom: 50,
    position: 'absolute',
  },
  btn2: {
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'red',
    bottom: 150,
    position: 'absolute',
  }
});
