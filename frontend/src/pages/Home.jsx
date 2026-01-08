import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Camera, Car, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import { services, aboutCompany } from '../mockData';

const Home = () => {
  const serviceIcons = {
    "CCTV & Surveillance": Camera,
    "Mobile Patrol Service": Car,
    "Event Security": Users,
    "Risk Assessment & Consulting": Shield
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={24} />
            <span>24/7 Security Solutions</span>
          </div>
          <h1 className="hero-title">
            Protecting Solwezi <br />Businesses with Excellence
          </h1>
          <p className="hero-description">
            Professional security services you can trust. From CCTV surveillance to mobile patrols, 
            we provide comprehensive protection for your business, assets, and events.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn-primary">
              <span>Get a Free Quote</span>
              <ChevronRight size={20} />
            </Link>
            <Link to="/services" className="btn-secondary">
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {aboutCompany.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Security Services</h2>
          <p className="section-description">
            Comprehensive security solutions tailored to meet your specific needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.title];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <Icon size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn-primary">
            <span>View All Services</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <h2 className="section-title">Why Choose Roaring Lion Security?</h2>
            <p className="section-description">
              We are committed to providing the highest level of security services in Solwezi and Northwestern Province.
            </p>
            <ul className="values-list">
              {aboutCompany.values.map((value, index) => (
                <li key={index} className="value-item">
                  <CheckCircle2 size={20} />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-secondary">
              <span>Learn More About Us</span>
            </Link>
          </div>
          <div className="why-choose-image">
            <div className="image-placeholder">
              <Shield size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Secure Your Business?</h2>
          <p className="cta-description">
            Contact us today for a free consultation and discover how we can protect what matters most to you.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              <span>Contact Us Now</span>
              <ChevronRight size={20} />
            </Link>
            <a href="tel:+260963257773" className="btn-secondary">
              <span>Call +260 96325773</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;