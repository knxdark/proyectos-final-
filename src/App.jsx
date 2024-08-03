
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import Login from './components/Login';
import Register from './components/Register';
import NewPost from './components/NewPost';
import Header from './components/Header';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Header onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<PostList searchTerm={searchTerm} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
};

export default App;
