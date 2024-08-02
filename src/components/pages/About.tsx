import React from 'react';
import '../../styles/About.css';
import { Navbar } from '../Navbar';
import aboutlogo from '../../images/about-page.png';
import kijiji from '../../images/kijiji.png';



export const About = () => {
  return (
    <div className="about-container">
      <Navbar/>
      <div className="hero-section">
        <div className="content-container">
          <h1 className="hero-title">
            We Understand the Problem and Want to Help!
          </h1>
          <p className="hero-text">
            Navigating between schoolwork, tuition fees, and internships is already difficult enough for university students. Looking for housing becomes strenuous, especially between work and school terms. That's why we built DormDirect to streamline the process of finding listings for university students in Waterloo. All of us are Co-op students which means we're constantly looking for housing between work terms and we thought to build a platform that will help us do this.
          </p>
          <p className="hero-text">
            Waterloo Housing is becoming more and more concentrated. City's Town and Gown committee says there was a shortfall of almost 5,000 beds for students in Waterloo this past year. Dorm Direct is here to ensure that you never have to worry about finding a place again!
          </p>
          <a href="https://www.cbc.ca/news/canada/kitchener-waterloo/tow-and-gown-committee-student-housing-shortfall-5-000-beds-1.6981346#:~:text=Kitchener%2DWaterloo-,City's%20Town%20and%20Gown%20committee%20says%20there">
          <button className="learn-more-button"  >
            Learn More →
          </button>
          </a>
        </div>
        <div className="image-container">
        <img id="about-logo" src={aboutlogo} />
        </div>
      </div>
      <div className="stats-section">
        <div className="stat-item">
        <img id="kijiji" src={kijiji} />
          <span className='kijiji-logo'>Trusted By</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10,000 +</span>
          <span className="stat-text">Beds for Students listed on Dorm Direct</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-text">Guarantee that you find a place for the semester</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">As low as $500</span>
          <span className="stat-text">Monthly Rent</span>
        </div>
      </div>
    </div>
  );
};

export default About;