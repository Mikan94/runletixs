import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
  
export default class Workout extends Component {  
    state={  
        progressStatus: 60,
        x: 0,
        workoutList: [],
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

  onButtonStopp(){
    _animateHandler = Animated.timing(
    Animated.timing(this.anim).stop()
    );
}

  render() {
    return (  
      <View style={styles.container}>  

    <Text>{this.state.workoutList.title}</Text>
  <Text>{this.state.workoutList.description}</Text>

  <View style={styles.containerProgressBar}>

            <Animated.View  
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
            <Animated.Text style={styles.label}>  
                    {this.state.progressStatus } Sekunden  
            </Animated.Text>  

           

            <TouchableOpacity onPress={() => this.onButtonStart()} style={styles.btnContent}>
            <View><Text>Start Animated</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onButtonStopp()} style={styles.btnContent}>
            <View><Text>Stopp Animated</Text></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContent} onPress={() => this.props.navigation.navigate('Run')}>
            <View><Text>Fetisch!</Text></View>
            </TouchableOpacity>
              </View>
      </View>  
    );  
  }  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerProgressBar: {  
    width: "100%",
    height: 40,
    padding: 3,  
    borderColor: "#FAA",  
    borderWidth: 3,  
    borderRadius: 30,  
    marginTop: 200,  
    justifyContent: "center",  
  },  
  inner:{  
    width: "100%",  
    height: 30,  
    borderRadius: 15,  
    backgroundColor:"green",  
  },  
  label:{  
    fontSize:23,  
    color: "black",  
    position: "absolute",  
    zIndex: 1,  
    alignSelf: "center",  
  }  
});  