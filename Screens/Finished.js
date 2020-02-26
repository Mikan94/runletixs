import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


// einfache Textausgabe, dass der Lauf beendet/gefinished wurde
export default class Finished extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Finished</Text>
        <Text style={styles.subText}>hier Zeit, KM und Schritte, Übungen anzeigen (Gesamtanzahl)</Text>
        <Text style={styles.subText}>ggf. auf DB speichern und mit onPress in Profil anzeigen als FlatList</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('RouteList')}>
          <Text style={styles.btnText}>Yeah!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    fontWeight: '900',
    justifyContent: 'center',
    color: '#0a2f35',
  },
  subText: {
    color: '#0a2f35',
    fontSize: 16,
  },
  btn: {
    top: 50,
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
