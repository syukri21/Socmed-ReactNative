import React from 'react';
import PostInput from './fragments/post.input';
import Posts from './fragments/posts';
import { Content } from 'native-base';

const Home = () => {
  return (
    <Content padder>
      <PostInput></PostInput>
      <Posts></Posts>
    </Content>
  );
};

export default Home;
