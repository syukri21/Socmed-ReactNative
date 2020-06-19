import React from 'react';
import Layout from '../../../Layout';
import Profile from './profile';
import material from '../../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = (props) => {
  this.op;
  return (
    <Layout {...props}>
      <Profile {...props}></Profile>
    </Layout>
  );
};

ProfileScreen.options = {
  topBar: {
    title: {
      text: 'Drs Ali Mangsut, SH .Mag',
    },
    rightButtons: [
      {
        id: 'RightButtonProfile',
        component: {
          name: 'RightButtonProfile',
        },
      },
    ],
  },
};

export default ProfileScreen;
