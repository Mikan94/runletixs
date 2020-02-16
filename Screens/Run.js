import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {Pedometer} from 'expo-sensors';

import ProgressBar from '../Components/ProgressBar';
import ViewMap from '../Components/ViewMap';

export default class Run extends Component{
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false,
      isPedometerAvailable: "checking",
      currentStepCount: 0,
    }
  }

  _onButtonStart = () => {
    let timer = setInterval(() => {
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;

      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }

      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({timer});

    this.setState({startDisable: true});
    this._subscribe();

    this.ProgressBar.startProgressbar();
    this.ViewMap.startMap();

  }; 

  _onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable: false});
    this.ProgressBar.stoppProgressbar();
    this.ViewMap.stoppMap();
  };

  _subscribe = () => {
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


  render() {
    return (
      <View style={styles.MainContainer}>
        <ViewMap ref={ref => (this.ViewMap = ref)} />

        

        <ProgressBar ref={ref => (this.ProgressBar = ref)} />


        <Text style={styles.counterText}>{this.state.currentStepCount}</Text>

        <Text style={styles.counterText}>
          {this.state.minutes_Counter} : {this.state.seconds_Counter}
        </Text>

        <TouchableOpacity
          onPress={this._onButtonStart}
          activeOpacity={0.6}
          style={[
            styles.button,
            {backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00'},
          ]}
          disabled={this.state.startDisable}
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._onButtonStop}
          activeOpacity={0.6}
          style={[styles.button, {backgroundColor: '#FF6F00'}]}
        >
          <Text style={styles.buttonText}>STOP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Finished')}
          activeOpacity={0.6}
          style={[styles.button, {backgroundColor: '#FF6F00'}]}
        >
          <Text style={styles.buttonText}>Beenden</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Workout')}
          activeOpacity={0.6}
          style={[styles.button, {backgroundColor: '#FF6F00'}]}
        >
          <Text style={styles.buttonText}>Übung</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: '80%',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  counterText: {
    fontSize: 48,
    color: '#000',
    fontWeight: '800',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  label:{  
    fontSize:23,  
    color: "black",  
    position: "absolute",  
    zIndex: 1,  
    alignSelf: "center",  
  } 

});
