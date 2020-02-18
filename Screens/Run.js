import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';

import ProgressBar from '../Components/ProgressBar';
import ViewMap from '../Components/ViewMap';
import StoppWatch from '../Components/StoppWatch';
import CountingSteps from '../Components/CountingSteps';

export default class Run extends Component{
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      startDisable: false,
      distanceTravelled: 0,
    }
  }

  _onButtonStart = () => {
    this.setState({startDisable: true});
    this.CountingSteps.startCountingSteps();
    this.StoppWatch.startStoppWatch();
    this.ProgressBar.startProgressbar();
    this.ViewMap.startMap();

  }; 

  _onButtonStop = () => {
    this.StoppWatch.stoppStoppWatch();
    this.ProgressBar.stoppProgressbar();
    this.ViewMap.stoppMap();
  };

  render() {
    const distanceTravelled = this.distanceTravelled;

    return (
      <View style={styles.MainContainer}>
        <ViewMap ref={ref => (this.ViewMap = ref)} />

        <View style={styles.containerInfo}>
          <View stlye={styles.containerWatchBar}>
            <StoppWatch ref={ref => (this.StoppWatch = ref)} />
            <ProgressBar ref={ref => (this.ProgressBar = ref)} />
          </View>
            
            <CountingSteps ref={ref => (this.CountingSteps = ref)}/>
        </View>
        
        

        <TouchableOpacity
          onPress={this._onButtonStart}
          activeOpacity={0.6}
          style={[
            styles.button,
            {backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00'},
          ]}
          disabled={this.state.startDisable}
        >
  <Text style={styles.buttonText}>{this.distanceTravelled}START</Text>
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
  },
  containerWatchBar: {

  },
  containerInfo: {
   
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
