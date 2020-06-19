import React from 'react';
import Post from './post';
import postsMock from './posts.mock';

const Posts = () => {
  return (
    <>
      {postsMock.map((post, key) => (
        <Post key={key} {...post}></Post>
      ))}
    </>
  );
};

export default Posts;
