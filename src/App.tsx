import React from 'react';

import './App.css';
import { Home, About } from './components/pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Listings from './components/Listings';

import './styles/tailwind.css'; // Add this line



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
};

export default App;

