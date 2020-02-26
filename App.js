import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Start from './Screens/Start';
import Menu from './Menu';

//einfache Meünstruktur, die in Menu.js ausgebaut wird

const MainNavigator = createStackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: null,
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;