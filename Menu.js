import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Profil from './Screens/Profil';
import Setting from './Screens/Setting';
import RouteList from './Screens/RouteList';
import RouteDetail from './Screens/RouteDetail';
import Run from './Screens/Run';
import Workout from './Screens/Workout';
import Finished from './Screens/Finished';

class Menu extends Component {
}

const MenuStack = createStackNavigator({
  RouteList: {
    screen: RouteList,
    navigationOptions: {
      header: null,
    },
  },
  RouteDetail: {
    screen: RouteDetail,
  },
  Run: {
    screen: Run,
  },
  Workout: {
    screen: Workout,
    navigationOptions: {
      header: null,
    },
  },
  Finished: {
    screen: Finished,
  }
});

export default createMaterialBottomTabNavigator(
  {
    Profil: {
      screen: Profil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={20} color={tintColor}/>
        )
      }
    },
    RouteList: {
      screen: MenuStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="running" size={20} color={tintColor}/>
        )
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={20} color={tintColor}/>
        )
      }
    },
  },
  {
    initialRouteName: 'RouteList',
    order: ['Profil', 'RouteList', 'Setting'],
    activeColor: 'white',  
    inactiveColor: '#31917D',  
    barStyle: { backgroundColor: '#12492f' },

  }
);
