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
import bottomTabsConfig, {
  bottomTabDefault,
} from './src/navigations/bottom-tabs.config';
import topBarConfig from './src/navigations/top-bar.config';
import RightButtonHome from './src/components/navigations/right-button.home';
import RightButtonProfile from './src/components/navigations/right-button.profile';
import LoginScreen from './src/pages/login/index';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

// Screen
Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('MenuScreen', () => MenuScreen);
Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('EventScreen', () => EventScreen);
Navigation.registerComponent('LoginScreen', () => LoginScreen);

// Component
Navigation.registerComponent('RightButtonHome', () => RightButtonHome);
Navigation.registerComponent('RightButtonProfile', () => RightButtonProfile);

Navigation.events().registerAppLaunchedListener(async () => {
  const Icons = [
    Icon.getImageSource('user', 18, material.brandPrimary),
    Icon.getImageSource('home', 18, material.brandPrimary),
    Icon.getImageSource('th', 18, material.brandPrimary),
    Icon.getImageSource('calendar-alt', 18, material.brandPrimary),
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
    topBar: topBarConfig.topBarDefault({ BarsIcon }),
    ...bottomTabDefault,
  });

  const mainRoot = {
    bottomTabs: bottomTabsConfig({
      ProfileIcon,
      HomeIcon,
      MenuIcon,
      EventIcon,
    }),
    stack: {
      children: [
        { component: { name: 'HomeScreen' } },
        { component: { name: 'MenuScreen' } },
        { component: { name: 'ProfileScreen' } },
        { component: { name: 'EventScreen' } },
        { component: { name: 'LoginScreen' } },
      ],
    },
  };
  const loginRoot = { root: { component: { name: 'LoginScreen' } } };

  Navigation.setRoot(true ? loginRoot : mainRoot);
});

// AppRegistry.registerComponent(appName, () => App);
