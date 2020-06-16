/**
 * @format
 */

// import { YellowBox } from 'react-native';
import App from './App';
import { Navigation } from 'react-native-navigation';
// import { name as appName } from './app.json';

// YellowBox.ignoreWarnings([
//   'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ]);

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});

// AppRegistry.registerComponent(appName, () => App);
