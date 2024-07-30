// src/components/Home.tsx
import React from 'react';
import "./styles/Home.css";
import HomeBlock1 from '../components/homeSections/HomeBlock1';
import HomeBlock2 from '../components/homeSections/HomeBlock2';
import HomeBlock3 from '../components/homeSections/HomeBlock3';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeBlock1 />
      <HomeBlock2 />
      <HomeBlock3 />
      <Footer />
    </div>
  );
};

export default Home;
