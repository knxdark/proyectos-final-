
import React from 'react';

const Post = ({ title, content, author }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
    <small>{author}</small>
  </div>
);

export default Post;
