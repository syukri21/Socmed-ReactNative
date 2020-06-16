/**
 * @format
 */

import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/pages/home/index';
import MenuScreen from './src/pages/menus/index';
import ProfileScreen from './src/pages/profile/index';
import EventScreen from './src/pages/events/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import material from './native-base-theme/variables/material';

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
  ];

  const [
    ProfileIcon,
    HomeIcon,
    MenuIcon,
    EventIcon,
    HeartIcon,
    SearchIcon,
  ] = await Promise.all(Icons);
  // const UserIcon = await Icon.getImageSource('user', 18, material.brandPrimary);

  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: 'white',
      hideShadow: false,
      animate: false,
    },
    topBar: {
      leftButtons: [
        {
          icon: HomeIcon,
        },
      ],
      rightButtons: [
        {
          icon: SearchIcon,
        },
        {
          icon: HeartIcon,
        },
      ],
      title: {
        color: material.brandPrimary,
      },
    },
    bottomTab: {
      textColor: 'white',
      iconColor: material.brandDark,
      selectedTextColor: material.brandPrimary,
      selectedIconColor: material.brandPrimary,
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        options: {
          animations: {
            push: {
              content: {
                translationX: {
                  from: require('react-native').Dimensions.get('window').width,
                  to: 0,
                  duration: 300,
                },
              },
            },
            pop: {
              content: {
                translationX: {
                  from: 0,
                  to: -require('react-native').Dimensions.get('window').width,
                  duration: 300,
                },
              },
            },
          },
        },
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HomeScreen',
                    name: 'HomeScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: HomeIcon,
                  text: 'Home',
                },
              },
            },
          },
          {
            stack: {
              id: 'EVENT_TAB',
              children: [
                {
                  component: {
                    id: 'EventScreen',
                    name: 'EventScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: EventIcon,
                  text: 'Event',
                },
              },
            },
          },
          {
            stack: {
              id: 'MENU_TAB',
              children: [
                {
                  component: {
                    id: 'MenuScreen',
                    name: 'MenuScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Library',
                  icon: MenuIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'PROFILE_TAB',
              children: [
                {
                  component: {
                    id: 'ProfileScreen',
                    name: 'ProfileScreen',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: ProfileIcon,
                },
              },
            },
          },
        ],
      },
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
