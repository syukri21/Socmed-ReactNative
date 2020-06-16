import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  getTheme,
  StyleProvider,
  Text,
  Icon,
  Title,
  Left,
  Body,
  Right,
} from 'native-base';
import { StyleSheet } from 'react-native';
import material from './native-base-theme/variables/material';
import { Navigation } from 'react-native-navigation';

const App = (props) => {
  const handleNavigation = (to) => () => {
    Navigation.push(props.componentId, {
      component: {
        name: to, // Push the screen registered with the 'Settings' key
        // options: {
        //   // Optional options object to configure the screen
        //   topBar: {
        //     title: {
        //       text: 'Settings', // Set the TopBar title of the new Screen
        //     },
        //   },
        // },
      },
    });
  };

  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>{props.children}</Content>
      </Container>
    </StyleProvider>
  );
};

export default App;
