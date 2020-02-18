import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

export default class RouteList extends Component {
  state = {
    routeList: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/route').then(res => {
      const routeList = res.data;
      this.setState({routeList});
    })
    .catch((error) => {
      console.log(error);
   })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.routeList}              
          renderItem={({item}) => (
            <TouchableOpacity
            style={styles.itemContainer}
              onPress={() => this.props.navigation.navigate('RouteDetail', {
                route: item.coords,
                latitude: item.coords[0].latitude,
                longitude: item.coords[0].longitude,
                name: item.name,
                distance: item.distance,
                exercise: item.exercise,
              })}
            >
              <View>
                <Text style={styles.item}>{item.name}</Text>
                <View style={styles.containerDetails}>
                  <Text style={styles.details}>{item.distance} km</Text>
                  <Text style={styles.details}>{item.exercise} Übungen</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  item: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },
  containerDetails: {
    flex: 2,
    flexDirection: 'row',
  },
  details: {
    fontSize: 18,
    flex: 1,
  }
});