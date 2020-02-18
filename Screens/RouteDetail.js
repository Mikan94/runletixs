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
        </MapView>

        <View style={styles.itemContainer}> 
              <Text style={styles.item}>{name}</Text>
              <View style={styles.containerDetails}>
                <Text style={styles.details}>{distance} km</Text>
                <Text style={styles.details}>{exercise} Übungen</Text>
              </View>
          </View>
          
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Run')}>
              <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  itemContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item: {
    fontSize: 24,
    fontWeight: '800',
  },
  containerDetails: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    fontSize: 18,
    flex: 1,
  }, 
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 50,
  },
  btn: {
    backgroundColor: '#f7a325',
    color: 'white',
    height: 50,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  }
});
