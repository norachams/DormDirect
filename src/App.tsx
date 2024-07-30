import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home, About, Login } from './components/pages'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
