
import React, { useState } from 'react';
import { firestore, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleNewPost = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("You need to be logged in to post");
      return;
    }
    try {
      await addDoc(collection(firestore, 'posts'), {
        title,
        content,
        author: user.email,
        createdAt: new Date()
      });
      navigate('/');
    } catch (error) {
      console.error("Error creating new post: ", error);
    }
  };

  return (
    <form onSubmit={handleNewPost}>
      <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Contenido" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPost;
