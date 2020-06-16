import React from 'react';
import Home from './home';
import Layout from '../../../Layout';
import material from '../../../native-base-theme/variables/material';

const HomeScreen = () => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: material.brandPrimary,
    },
  },
};

export default HomeScreen;
