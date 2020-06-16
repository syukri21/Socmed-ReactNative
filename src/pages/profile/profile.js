import React from 'react';
import { Content } from 'native-base';
import Posts from '../home/fragments/posts';
import ProfileDetail from './fragments/profile.header';

const Profile = () => {
  return (
    <Content padder>
      <ProfileDetail></ProfileDetail>
      <Posts></Posts>
    </Content>
  );
};

export default Profile;
