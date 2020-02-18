import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import {Pedometer} from 'expo-sensors';

export default class CountingSteps extends Component{
  constructor(props) {
    super(props);
    this.startCountingSteps = this.startCountingSteps.bind(this);

    this.state = {
      isPedometerAvailable: "checking",
      currentStepCount: 0,
    }
  }

  startCountingSteps = () => {
    this._subscription = Pedometer.watchStepCount(result => {
        this.setState({
          currentStepCount: result.steps
        });
      });
  
      Pedometer.isAvailableAsync().then(
        result => {
          this.setState({
            isPedometerAvailable: String(result)
          });
        },
        error => {
          this.setState({
            isPedometerAvailable: "Could not get isPedometerAvailable: " + error
          });
        }
      );
  
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);
      Pedometer.getStepCountAsync(start, end).then(
        result => {
          this.setState({ pastStepCount: result.steps });
        },
        error => {
          this.setState({
            pastStepCount: "Could not get stepCount: " + error
          });
        }
      );
  }; 

  stoppCountingSteps = () => {
  };

  render() {
    return (
      <View>
        <Text style={styles.counterText}>{this.state.currentStepCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 48,
    color: '#000',
    fontWeight: '800',

  },
});
