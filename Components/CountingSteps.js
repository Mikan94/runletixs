import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import {Pedometer} from 'expo-sensors';
import Icon from 'react-native-vector-icons/FontAwesome5';
const shoeprints = (<Icon name="shoe-prints" size="24" color="#0a2f35" />)

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
  <Text style={styles.text}>{this.state.currentStepCount} {shoeprints}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: '500',
    color: '#0a2f35',
  }
});
