import React from 'react';
import { Container, Content, getTheme, StyleProvider } from 'native-base';
import material from './native-base-theme/variables/material';

const App = (props) => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>{props.children}</Content>
      </Container>
    </StyleProvider>
  );
};

export default App;
