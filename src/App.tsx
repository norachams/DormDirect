import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Listings from './pages/Listings';

function App() {
  return (
    <GoogleOAuthProvider clientId=''>

    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </Router>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
