import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsScreen from './src/screens/ResultsScreen';


const AppNavigator = createStackNavigator(
  {
    Results: ResultsScreen,
  },
  {
    initialRouteName: 'Results',
    defaultNavigationOptions: {
      headerBackTitle: " "
    }
  }
);

export default createAppContainer(AppNavigator);
