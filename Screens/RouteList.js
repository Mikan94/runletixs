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
            <Text style={styles.details}>{item.distance}km {item.exercise}Übungen</Text>
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
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  details: {
    fontSize: 14,
    paddingBottom: 50,
  }
});