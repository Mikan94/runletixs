import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

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
  },
  RouteDetail: {
    screen: RouteDetail,
    navigationOptions: {
      visible: false,
    },
  },
  Run: {
    screen: Run,
  },
  Workout: {
    screen: Workout,
  },
  Finished: {
    screen: Finished,
  }
});

export default createMaterialBottomTabNavigator(
  {
    Profil: {
      screen: Profil,
    },
    RouteList: {
      screen: MenuStack,
    },
    Setting: {
      screen: Setting,
    },
  },
  {
    initialRouteName: 'RouteList',
    order: ['Profil', 'RouteList', 'Setting'],
    activeTintColor: 'orange',
  }
);
