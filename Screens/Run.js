import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const close = (<Icon name="door-open" size={24} color="#fff" />)
const pause = (<Icon name="pause" size={24} color="#fff" />)
const play = (<Icon name="play" size={24} color="#fff" />)
const dumbbell = (<Icon name="dumbbell" size={24} color="#fff" />)

//Imort einzelner Komponenten
import ProgressBar from '../Components/ProgressBar';
import ViewMap from '../Components/ViewMap';
import StoppWatch from '../Components/StoppWatch';
import CountingSteps from '../Components/CountingSteps';
import CalcDistance from '../Components/CalcDistance';

export default class Run extends Component{
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      startDisable: false,
    }
  }

  //Mit onPress wird diese Funktion ausgeführt, die dann in den Componenten
  //weitere Funktionen ausführt
  _onButtonStart = () => {
    this.setState({startDisable: true});
    this.CountingSteps.startCountingSteps();
    this.StoppWatch.startStoppWatch();
    this.ProgressBar.startProgressbar();
    this.ViewMap.startMap();

  }; 

   //Mit onPress wird diese Funktion ausgeführt, die dann in den Componenten
  //weitere Funktionen ausführt
  _onButtonStop = () => {
    this.setState({startDisable: false});
    this.StoppWatch.stoppStoppWatch();
    this.ProgressBar.stoppProgressbar();
    this.ViewMap.stoppMap();
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ViewMap ref={ref => (this.ViewMap = ref)} />

        <View style={styles.containerInfo}>
          <View stlye={styles.containerWatchBar}>
            <StoppWatch ref={ref => (this.StoppWatch = ref)} />
            <ProgressBar ref={ref => (this.ProgressBar = ref)} />
          </View>
          <View style={styles.containerDistanceSteps}>
            <CalcDistance style={styles.details} ref={ref => (this.CalcDistance = ref)} />
            <CountingSteps style={styles.details} ref={ref => (this.CountingSteps = ref)}/>
          </View> 
        </View>
        
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Finished')}
            activeOpacity={0.6}
            style={[styles.button, {backgroundColor: '#f7a325'}]}>
              <Text style={styles.buttonText}>{close}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onButtonStop}
            activeOpacity={0.6}
            style={[
              styles.button,
              {borderTopRightRadius: 0},
              {borderBottomRightRadius: 0},
              {marginRight: -5},
              {backgroundColor: this.state.startDisable ? '#f7a325' : '#B0BEC5'},]}>
                <Text style={styles.buttonText}>{pause}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onButtonStart}
            activeOpacity={0.6}
            style={[
              styles.button,
              {borderTopLeftRadius: 0},
              {borderBottomLeftRadius: 0},
              {backgroundColor: this.state.startDisable ? '#B0BEC5' : '#f7a325'},]}
              disabled={this.state.startDisable}>
                <Text style={styles.buttonText}>{play}</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Workout')}
            activeOpacity={0.6}
            style={[styles.button, {backgroundColor: '#f7a325'}]}>
              <Text style={styles.buttonText}>{dumbbell}</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  containerDistanceSteps: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowColor: "#000",
    shadowOffset: {
	  width: 3,
	  height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    width: '20%',
    padding: 16,
    borderRadius: 10,
    margin: 5,
    bottom: 32,
    justifyContent: 'center',
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
  },
  details: {
    
  }

});
