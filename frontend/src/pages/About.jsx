import React from 'react';
import { aboutCompany } from '../mockData';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">About Roaring Lion Security</h1>
        <p className="page-description">
          Leading security service provider in Solwezi and Northwestern Province, Zambia
        </p>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stats-grid">
          {aboutCompany.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="mv-icon">
              <Target size={48} />
            </div>
            <h2>Our Mission</h2>
            <p>{aboutCompany.mission}</p>
          </div>
          <div className="vision-card">
            <div className="mv-icon">
              <Eye size={48} />
            </div>
            <h2>Our Vision</h2>
            <p>{aboutCompany.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-header">
          <Award size={48} />
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <ul className="values-grid">
          {aboutCompany.values.map((value, index) => (
            <li key={index} className="value-card">
              <CheckCircle2 size={24} />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Roaring Lion Security Company Limited was established with a clear mission: to provide 
          world-class security solutions to businesses and organizations across Solwezi and the 
          Northwestern Province of Zambia.
        </p>
        <p>
          Over the years, we have grown from a small security firm to one of the most trusted names 
          in security services in the region. Our success is built on our unwavering commitment to 
          professionalism, integrity, and excellence in everything we do.
        </p>
        <p>
          Today, we serve over 200 clients across various sectors, including mining, hospitality, 
          retail, and corporate offices. Our team of highly trained security professionals works 
          around the clock to ensure the safety and security of our clients' assets, businesses, 
          and personnel.
        </p>
      </section>
    </div>
  );
};

export default About;