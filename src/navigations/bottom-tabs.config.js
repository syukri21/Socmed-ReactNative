import material from '../../native-base-theme/variables/material';

const bottomTabDefault = {
  bottomTab: {
    textColor: 'white',
    iconColor: material.brandDark,
    selectedTextColor: material.brandPrimary,
    selectedIconColor: material.brandPrimary,
  },
  bottomTabs: {
    backgroundColor: 'white',
    hideShadow: false,
    animate: false,
  },
};

const bottomTabs = (props) => ({
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
            icon: props.HomeIcon,
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
            icon: props.EventIcon,
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
            icon: props.MenuIcon,
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
            icon: props.ProfileIcon,
          },
        },
      },
    },
  ],
});

export { bottomTabDefault };

export default bottomTabs;
