import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/SearchScreen';
import RestaurentImages from './src/RestaurentImages';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Images: RestaurentImages
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);