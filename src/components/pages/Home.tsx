// src/components/Home.tsx
import React from 'react';
import "./styles/Home.css";
import HomeBlock1 from './homeSections/HomeBlock1';
import HomeBlock2 from './homeSections/HomeBlock2';
import HomeBlock3 from './homeSections/HomeBlock3';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

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
