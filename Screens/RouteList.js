import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class RouteList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
              {
                name: "Zollverein",
                coords: [
                  {name: "1", latitude: 37.8025259, longitude: -122.4351431},
                  {name: "2", latitude: 37.7896386, longitude: -122.421646},
                  {name: "3", latitude: 37.7665248, longitude: -122.4161628},
                  {name: "4", latitude: 37.7734153, longitude: -122.4577787},
                  {name: "5", latitude: 37.7948605, longitude: -122.4596065}
                  ],
                distance: "1",
                exercise: "10"
              },
              {
                name: "Bottrop",
                coords: [
                  {name: "1", latitude: 36.8025259, longitude: -122.4451431},
                  {name: "2", latitude: 36.7896386, longitude: -122.431646},
                  {name: "3", latitude: 36.7665248, longitude: -122.4261628},
                  {name: "4", latitude: 36.7734153, longitude: -122.4677787},
                  {name: "5", latitude: 36.7948605, longitude: -122.4796065},
                ],
                distance: "30",
                exercise: "8"
              },
              {
                name: "Alcatraz",
                coords: [
                  {name: "1", latitude: 36.8025259, longitude: -122.4451431},
                  {name: "2", latitude: 36.7896386, longitude: -122.431646},
                  {name: "3", latitude: 36.7665248, longitude: -122.4261628},
                  {name: "4", latitude: 36.7734153, longitude: -122.4677787},
                  {name: "5", latitude: 36.7948605, longitude: -122.4796065},
                ],
                distance: "15",
                exercise: "15"
              },
              {
                name: "Baldeneysee",
                coords: [
                  {name: "1", latitude: 36.7025259, longitude: -122.4451431},
                  {name: "2", latitude: 36.6896386, longitude: -122.431646},
                  {name: "3", latitude: 36.4665248, longitude: -122.4261628},
                  {name: "4", latitude: 36.6734153, longitude: -122.4677787},
                  {name: "5", latitude: 36.6948605, longitude: -122.4796065},
                ],
                distance: "5",
                exercise: "8"
              },
          ]}
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