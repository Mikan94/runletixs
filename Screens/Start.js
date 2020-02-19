import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Start extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Logo oder Icon einfügen</Text>
        <Button
          title="weiter"
          onPress={() => this.props.navigation.navigate('RouteList')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
});
