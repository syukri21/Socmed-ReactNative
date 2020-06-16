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

const App = (props) => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>{props.children}</Content>
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
