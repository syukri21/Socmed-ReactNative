import React from 'react';
import Layout from '../../../Layout';
import Profile from './profile';
import material from '../../../native-base-theme/variables/material';

const ProfileScreen = (props) => {
  return (
    <Layout {...props}>
      <Profile {...props}></Profile>
    </Layout>
  );
};

ProfileScreen.options = {
  topBar: {
    title: {
      text: 'Profile',
    },
  },
};

export default ProfileScreen;
