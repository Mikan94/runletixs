import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';  
  
export default class ProgressBarWorkout extends Component {
  constructor(props){
    super(props);
    this.startProgressbar = this.startProgressbar.bind(this);
    this.stoppProgressbar = this.stoppProgressbar.bind(this);
    }

    state={  
        progressStatus: 60,
    }  
  
    componentDidMount(){
    } 

  anim = new Animated.Value(60);  
  startProgressbar(){
      _animateHandler = Animated.timing(
        this.anim.addListener(({value})=> {  
          this.setState({progressStatus: parseInt(value,10)});  
      }),
      Animated.timing(this.anim,{  
           toValue: 0,  
           duration: 59000,  
      }).start()
      );
  }

  stoppProgressbar(){
    _animateHandler = Animated.timing(
    Animated.timing(this.anim).stop()
    );
}

  render() {  
    return (  
      <View style={styles.container}>  
        <Animated.View  
          style={[styles.inner, {width: this.state.progressStatus *5},]}/>  
        <Animated.Text style={styles.label}>  
          {this.state.progressStatus } Sekunden  
        </Animated.Text>
      </View>  
    );  
  }
}

const styles = StyleSheet.create({  
  container: {  
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,  
  },  
  inner:{  
    width: "90%",  
    height: 50,  
    borderRadius: 15,  
    backgroundColor: '#f56038',  
  },  
  label:{  
    fontSize: 24,
    fontWeight: '500',  
    color: '#0a2f35',
    position: 'absolute',
    padding: 10,  
  }  
});  