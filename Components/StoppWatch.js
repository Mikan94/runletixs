import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';

export default class StoppWatch extends Component{
  constructor(props) {
    super(props);
    this.startStoppWatch = this.startStoppWatch.bind(this);
    this.stoppStoppWatch = this.stoppStoppWatch.bind(this);

    this.state = {
        timer: null,
        minutes_Counter: '00',
        seconds_Counter: '00',
        startDisable: false
    }
  }

  startStoppWatch = () => {
 
    let timer = setInterval(() => {
 
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }

    stoppStoppWatch = () => {
        clearInterval(this.state.timer);
        this.setState({startDisable : false})
  };

  render() {
    return (
      <View>
        <Text style={styles.container}>
          {this.state.minutes_Counter} : {this.state.seconds_Counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 48,
    color: '#000',
    fontWeight: '800',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});
