import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
const running = (<Icon name="running" size="20" color="#0a2f35" />)
const dumbbell = (<Icon name="dumbbell" size="20" color="#0a2f35" />)

export default class RouteDetail extends Component {

  //Konstanten-Erstellung von den Daten, die der vorherige Screen (RouteList) diesem übergeben hat
  render() { 
    const route = this.props.navigation.getParam('route', 'no data')
    const latitude = this.props.navigation.getParam('latitude', 'no data')
    const longitude = this.props.navigation.getParam('longitude', 'no data')
    const name = this.props.navigation.getParam('name', 'no data')
    const distance = this.props.navigation.getParam('distance', 'no data')
    const exercise = this.props.navigation.getParam('exercise', 'no data')

    return (
      <View style={styles.container}>
        {/*MapView zeigt Google Maps die zuvor ausgewählte Route an */}
        <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

        {/* Polygon nimmt sich die Coordinaten aus Route und erstellte eine Route mt Markerns */}
        <Polygon
          coordinates={route}/>

          <Marker.Animated
            ref={marker => {this.marker = marker;}}
            coordinate={{latitude: latitude, longitude: longitude }}>
          </Marker.Animated>
        </MapView>

        {/* wiederholte Infomrationsausgabe aus dem vorherigen Screen (RouteList) */}
        <View style={styles.itemContainer}> 
              <Text style={styles.item}>{name}</Text>
              <View style={styles.containerDetails}>
                <Text style={styles.details}>{running}   {distance} km</Text>
                <Text style={styles.details}>{dumbbell}   {exercise} Übungen</Text>
              </View>
          </View>
          
          {/* Button führt zum nächsten Screen (Run), wo die AKtivität startet */}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Run')}>
              <Text style={styles.btnText}>Let's go</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0a2f35',
    marginBottom: 20,
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
    color: '#0a2f35'
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
