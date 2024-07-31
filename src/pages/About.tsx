import React from 'react';
import './styles/About.css'

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Dorm Direct</h2>
        <p>
          Welcome to Dorm Direct, your ultimate solution for finding student housing in Waterloo! Our platform is designed to make the daunting task of finding a place to live easy and stress-free for students.
        </p>
        <h3>Our Mission</h3>
        <p>
          Dorm Direct was created with the mission to simplify the housing search process for students in Waterloo. We understand the challenges students face when looking for accommodation, and our goal is to provide a seamless, efficient, and reliable solution.
        </p>
        <h3>Our Team</h3>
        <ul>
          <li id='vicky'><strong>Vicky Sekhon</strong>:As a curious learner who always takes on new challenges, Vicky tackled full-stack development during the creation of Dorm-Direct. He worked on designing the landing page entirely using React and ensuring that it is a dynamic loading website that is resilient to size changes. Vicky then created the browse listings page, setting up a BeautifulSoup API to scrape listings from Kijiji and return the important listing info in a JSON format. From here, Vicky developed the frontend to fetch listing information from the backend API and transform it into frontend listings. Finally, he worked on the search bar to save users the hassle of reading over countless listings for the right one.</li>
          <li><strong>Nora Chamseddin</strong>: Nora's expertise in user experience design helped shape the intuitive and user-friendly interface of Dorm Direct.</li>
          <li><strong>Suhanna Sehota</strong>: Suhanna brought her technical prowess to the table, developing the robust backend systems that power our platform.</li>
          <li><strong>Andrew Yoon</strong>: Andrew's innovative approach to front-end development made sure that Dorm Direct is not only functional but also visually appealing.</li>
        </ul>
        <h3>Why Choose Dorm Direct?</h3>
        <ul>
          <li><strong>Comprehensive Listings</strong>: We offer a wide range of housing options, from dorms to apartments, ensuring that you find the perfect fit for your needs and budget.</li>
          <li><strong>User-Friendly Interface</strong>: Our platform is designed with students in mind, making it easy to search, filter, and compare different housing options.</li>
          <li><strong>Verified Listings</strong>: We ensure that all listings are verified and updated regularly, providing you with accurate and reliable information.</li>
          <li><strong>Community Reviews</strong>: Read reviews from fellow students to get an honest and insightful perspective on potential housing options.</li>
        </ul>
        <h3>Our Vision</h3>
        <p>
          We envision Dorm Direct becoming the go-to platform for student housing in Waterloo, continually improving and expanding our services to better meet the needs of students.
        </p>
        <p>Thank you for choosing Dorm Direct. We are here to help you find your ideal home away from home in Waterloo!</p>
      </div>
    </div>
  );
};

export default About;
