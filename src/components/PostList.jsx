
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './PostList.css';

const PostList = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'posts'), (snapshot) => {
      const postsData = [];
      snapshot.forEach((doc) => postsData.push({ ...doc.data(), id: doc.id }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>{post.author}</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
