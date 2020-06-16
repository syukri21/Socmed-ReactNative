import React from 'react';
import Home from './home';
import Layout from '../../../Layout';
import material from '../../../native-base-theme/variables/material';

const HomeScreen = (props) => {
  return (
    <Layout {...props}>
      <Home {...props}></Home>
    </Layout>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

export default HomeScreen;
