
import React, { useState } from 'react';
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        firstName,
        lastName,
        email,
      });
      navigate('/');
    } catch (error) {
      console.error("Error registering: ", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
