import React from 'react';
import Post from './post';
import { Content } from 'native-base';

const Posts = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => (
        <Post key={val}></Post>
      ))}
    </>
  );
};

export default Posts;
