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
import Events from './src/pages/events/index';
import Menus from './src/pages/menus/index';
import Menu from './src/pages/menus/index';

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
        <Menus></Menus>
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
  );
};

export default App;
