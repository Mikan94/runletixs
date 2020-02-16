import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Start from './Screens/Start';
import Onboarding from './Screens/Onboarding';
import Menu from './Menu';

const MainNavigator = createStackNavigator({
  Start: {
    screen: Start,
  },
  Onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null,
    },
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