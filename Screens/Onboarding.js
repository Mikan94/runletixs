import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';

export default class Onboarding extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
      >
        <View
          style={{
            backgroundColor: '#f1f3f6',
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>QR Code auf Route finden</Text>
        </View>

        <View
          style={{
            backgroundColor: '#f1f3f6',
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>QR Code scannen</Text>
        </View>

        <View
          style={{
            backgroundColor: '#f1f3f6',
            flex: 1,
            marginTop: 20,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Übung ausführen</Text>
          <Button
            title="weiter"
            onPress={() => this.props.navigation.navigate('Menu')}
          />
        </View>
      </ScrollView>
    );
  }
}
