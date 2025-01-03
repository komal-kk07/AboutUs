import React from 'react';
import './AboutUs.css'; 
import image1 from './assets/main.jpeg';
import image2 from './assets/dna.webp';

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <h1>WHO WE ARE</h1>
      <div className="section">
        <div className="about-us">
          <h2>ABOUT US</h2>
          <p>
            BIOTS is dedicated to advancing biotechnology through education and
            innovation. Founded in 2017, our mission is to provide a dynamic
            platform for students to engage with cutting-edge biotechnological
            developments and contribute to solving real-world problems. We host
            a variety of webinars and seminars focusing on research and
            prospects in biotechnology, offering invaluable learning
            opportunities and fostering a vibrant community for future engineers
            and entrepreneurs. Through these activities, BIOTS aims to foster
            innovation, nurture talent, and drive progress across all realms.
          </p>
        </div>
        <div className="image">
          <img
            src={image1} 
            alt="Institute building"
          />
        </div>
      </div>
      <div className="section">
        <div className="image">
          <img
            src={image2} 
            alt="DNA illustration"
          />
        </div>
        <div className="vision">
          <h2>VISION</h2>
          <p>
            To be a leading community for biotechnologists, fostering innovation
            and professional growth. We believe in focusing on the development
            of knowledge, skills, networks, and shaping experiences that are
            integral for success in the professional world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
