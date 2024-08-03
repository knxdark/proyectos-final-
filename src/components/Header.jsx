
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Header.css';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/new-post">Nuevo Post</Link>
        {auth.currentUser ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrar</Link>
          </>
        )}
      </nav>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
    </header>
  );
};

export default Header;
