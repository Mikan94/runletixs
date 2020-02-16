import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';  
  
export default class ProgressBar extends Component {
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
                style={[  
                    styles.inner,{width: this.state.progressStatus +"%"},  
                ]}  
            />  
            <Animated.Text style={styles.label}>  
                    {this.state.progressStatus } Sekunden  
            </Animated.Text>

      </View>  
    );  
  }
}

const styles = StyleSheet.create({  
    container: {  
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