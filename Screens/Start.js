import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const running = (<Icon name="running" size="20" color="#fff" />)

//einfache Ansicht mit dem "Logo" der App, die dann weiter in das Geschehen führt
export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Runletix</Text>
        <Text style={styles.subText}>Make something, that matters</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('RouteList')}>
          <Text style={styles.btnText}>{running}  Let's go</Text>
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
