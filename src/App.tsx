import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home, About, Login } from './components/pages'
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavLink to={"/"}><Home /></NavLink>
    </div>
  );
}

export default App;
