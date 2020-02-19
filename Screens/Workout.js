import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
const icon = (<Icon name="street-view" size={64} color="#000"/>)
const pause = (<Icon name="pause" size={24} color="#fff" />)
const play = (<Icon name="play" size={24} color="#fff" />)
const running = (<Icon name="running" size={24} color="#fff" />)

import ProgressBarWorkout from '../Components/ProgressBarWorkout';
  
export default class Workout extends Component {  
    state={  
        progressStatus: 60,
        x: 0,
        workoutList: [],
        startDisable: false,
    }  
  
    componentDidMount(){
      const randomNumber = [Math.floor(Math.random()*10)];
      axios.get('http://localhost:5000/workout').then(res => {
      const workoutList = res.data[randomNumber];
      this.setState({workoutList});
    })
    .catch((error) => {
      console.log(error);
    })
  } 

  anim = new Animated.Value(60);  
  onButtonStart(){
    this.setState({startDisable: true});
    this.ProgressBarWorkout.startProgressbar();
    
  }

  onButtonStopp(){
    this.setState({startDisable: false});
    this.ProgressBarWorkout.stoppProgressbar(); 
}

  render() {
    return (  
      <View style={styles.mainContainer}>
        <View style={styles.containerContent}>
          <Text style={styles.icon}>{icon}</Text>
          <Text style={styles.head}>{this.state.workoutList.title}</Text>
          <Text style={styles.body}>{this.state.workoutList.description}</Text>
          <ProgressBarWorkout ref={ref => (this.ProgressBarWorkout = ref)} />
        </View>
            
        <View style={styles.contentButton}>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Run')}
            activeOpacity={0.6}
            style={[styles.button, {backgroundColor: '#f7a325'}]}>
            <Text style={styles.buttonText}>{running}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onButtonStopp}
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
            onPress={this.onButtonStart}
            activeOpacity={0.6}
            style={[
              styles.button,
              {borderTopLeftRadius: 0},
              {borderBottomLeftRadius: 0},
              {backgroundColor: this.state.startDisable ? '#B0BEC5' : '#f7a325'},]}
              disabled={this.state.startDisable}>
              <Text style={styles.buttonText}>{play}</Text>
          </TouchableOpacity>
        </View>
      </View>  
    );  
  }  
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerContent: {
    top: 150,
  },
  icon: {
    marginBottom: 20,
    textAlign: 'center'
  },
  head: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center'
  },
  body: {
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
    textAlign: 'center'
  },
  contentButton: {
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
});  