import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base';
import { StyleSheet } from 'react-native';
import Home from './src/pages/home/index';

const styles = StyleSheet.create({
  navText: {
    fontSize: 9,
    textAlign: 'center',
  },
});

const App = () => {
  return (
    <Container>
      <Content>
        <Home></Home>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="home" type="Entypo"></Icon>
          </Button>
          <Button>
            <Icon name="calendar" type="Entypo"></Icon>
          </Button>
          <Button active>
            <Icon name="bookmarks" type="Entypo"></Icon>
          </Button>
          <Button>
            <Icon name="message" type="Entypo"></Icon>
          </Button>
          <Button>
            <Icon name="user" type="Entypo"></Icon>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default App;
