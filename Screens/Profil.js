import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


//Profilansicht des Nutzers
//kann noch ausgebaut werden, siehe Anweisung unten
export default class Profil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profil</Text>
        <Text>ggf. Flatlist mit gemachten Läufen anzeigen, aus DB fetchen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
    left: 30,
  },
  text: {
    fontSize: 64,
    fontWeight: '900',
  }
});
