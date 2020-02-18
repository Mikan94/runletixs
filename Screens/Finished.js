import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Finished extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Finished</Text>
        <Text>hier Zeit, KM und Schritte, Übungen anzeigen (Gesamtanzahl)</Text>
        <Text>ggf. auf DB speichern und mit onPress in Profil anzeigen als FlatList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 36,
    padding: 20,
    textAlign: 'center',
  },
});
