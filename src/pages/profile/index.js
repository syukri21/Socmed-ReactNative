import React from 'react';
import Layout from '../../../Layout';
import Profile from './profile';
import material from '../../../native-base-theme/variables/material';

const ProfileScreen = () => {
  return (
    <Layout>
      <Profile></Profile>
    </Layout>
  );
};

ProfileScreen.options = {
  topBar: {
    title: {
      text: 'Profile',
      color: 'white',
    },
    background: {
      color: material.brandPrimary,
    },
  },
};

export default ProfileScreen;
