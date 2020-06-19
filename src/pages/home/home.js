import React from 'react';
import PostInput from './fragments/post.input';
import Posts from './fragments/posts';
import { Content } from 'native-base';
import { StyleSheet } from 'react-native';
import material from '../../../native-base-theme/variables/material';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: material.contentStyle,
  },
});

const Home = () => {
  return (
    <Content padder style={styles.wrapper}>
      <PostInput></PostInput>
      <Posts></Posts>
    </Content>
  );
};

export default Home;
