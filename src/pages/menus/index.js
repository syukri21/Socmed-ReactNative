import React from 'react';
import Layout from '../../../Layout';
import Menu from './menus';
import material from '../../../native-base-theme/variables/material';

const MenusScreen = (props) => {
  return (
    <Layout {...props}>
      <Menu {...props}></Menu>
    </Layout>
  );
};

MenusScreen.options = {
  topBar: {
    title: {
      text: 'Menu',
    },
  },
};

export default MenusScreen;
