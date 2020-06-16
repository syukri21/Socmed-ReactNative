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

import Home from './src/pages/home/index';
import Events from './src/pages/events/index';
import Menus from './src/pages/menus/index';
import Menu from './src/pages/menus/index';
import Profile from './src/pages/profile/index';

const styles = StyleSheet.create({
  navText: {
    fontSize: 9,
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Profile></Profile>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" type="AntDesign"></Icon>
            </Button>
            <Button>
              <Icon name="calendar" type="AntDesign"></Icon>
            </Button>
            <Button active>
              <Icon name="message1" type="AntDesign"></Icon>
            </Button>
            <Button>
              <Icon name="th" type="FontAwesome5"></Icon>
            </Button>
            <Button>
              <Icon name="user" type="AntDesign"></Icon>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
  );
};

export default App;
