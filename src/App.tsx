import React from 'react';

import './App.css';
import { Navbar } from './components/Navbar';
import { Home, About } from './components/pages'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';

import './styles/tailwind.css'; // Add this line



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

