/**
 * @format
 */

import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/pages/home/index';
import MenuScreen from './src/pages/menus/index';
import ProfileScreen from './src/pages/profile/index';
import EventScreen from './src/pages/events/index';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('MenuScreen', () => MenuScreen);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('EventScreen', () => EventScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
          {
            component: {
              name: 'MenuScreen',
            },
          },
          {
            component: {
              name: 'ProfileScreen',
            },
          },
          {
            component: {
              name: 'EventScreen',
            },
          },
        ],
      },
    },
  });
});

// AppRegistry.registerComponent(appName, () => App);
