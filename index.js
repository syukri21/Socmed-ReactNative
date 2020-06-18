/**
 * @format
 */
import React from 'react';
import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/pages/home/index';
import MenuScreen from './src/pages/menus/index';
import ProfileScreen from './src/pages/profile/index';
import EventScreen from './src/pages/events/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import material from './native-base-theme/variables/material';
import bottomTabsConfig, { bottomTabDefault } from './bottom-tabs.config';
import Home from './src/pages/home/home';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('MenuScreen', () => MenuScreen);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('EventScreen', () => EventScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  const Icons = [
    Icon.getImageSource('user', 18, material.brandPrimary),
    Icon.getImageSource('home', 18, material.brandPrimary),
    Icon.getImageSource('th', 18, material.brandPrimary),
    Icon.getImageSource('calendar', 18, material.brandPrimary),
    Icon.getImageSource('heart', 18, material.brandPrimary),
    Icon.getImageSource('search', 18, material.brandPrimary),
    Icon.getImageSource('bars', 18, material.brandPrimary),
  ];

  const [
    ProfileIcon,
    HomeIcon,
    MenuIcon,
    EventIcon,
    HeartIcon,
    SearchIcon,
    BarsIcon,
  ] = await Promise.all(Icons);
  // const UserIcon = await Icon.getImageSource('user', 18, material.brandPrimary);

  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'white',
      hideShadow: false,
      animate: false,
    },
    topBar: {
      rightButtons: [
        {
          icon: BarsIcon,
        },
      ],
      title: {
        color: material.brandPrimary,
      },
    },
    ...bottomTabDefault,
  });

  Navigation.setRoot({
    root: {
      ...bottomTabsConfig({ ProfileIcon, HomeIcon, MenuIcon, EventIcon }),
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
