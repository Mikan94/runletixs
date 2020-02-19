import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Start from './Screens/Start';
import Menu from './Menu';

const MainNavigator = createStackNavigator({
  Start: {
    screen: Start,
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
      tabBarIcon: () => (
        <Icon name="home" size={30} color="#900" />)
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;