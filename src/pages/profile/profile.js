import React from 'react';
import { Content } from 'native-base';
import Posts from '../home/fragments/posts';
import ProfileDetail from './fragments/profile.header';
import material from '../../../native-base-theme/variables/material';

const Profile = () => {
  return (
    <Content padder style={{ backgroundColor: material.contentStyle }}>
      <ProfileDetail></ProfileDetail>
      <Posts></Posts>
    </Content>
  );
};

export default Profile;
