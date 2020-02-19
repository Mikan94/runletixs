import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Setting</Text>
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
