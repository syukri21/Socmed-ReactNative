import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
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
            <Text style={styles.navText}>Beranda</Text>
          </Button>
          <Button>
            <Text style={styles.navText}>Acara & Agenda</Text>
          </Button>
          <Button active>
            <Text style={styles.navText}>Pusataka Digital</Text>
          </Button>
          <Button>
            <Text style={styles.navText}>Kotak Pesan</Text>
          </Button>
          <Button>
            <Text style={styles.navText}>Profil</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default App;
