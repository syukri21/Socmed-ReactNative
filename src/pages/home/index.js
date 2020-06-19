import React from 'react';
import Home from './home';
import Layout from '../../../Layout';

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
    rightButtons: [
      {
        id: 'RightButtonHome',
        component: {
          name: 'RightButtonHome',
        },
      },
    ],
  },
};

export default HomeScreen;
