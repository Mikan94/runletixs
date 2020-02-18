import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
    },
  },
});

const App = createAppContainer(MainNavigator);

export default App;