import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../mockData';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <img 
              src={companyInfo.logo} 
              alt={companyInfo.name} 
              className="footer-logo"
            />
            <p className="footer-tagline">{companyInfo.tagline}</p>
            <p className="footer-description">
              Professional security solutions for businesses across Solwezi and Northwestern Province, Zambia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li>CCTV & Surveillance</li>
              <li>Mobile Patrol Service</li>
              <li>Event Security</li>
              <li>Risk Assessment & Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              </li>
              <li>
                <Mail size={18} />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <Clock size={18} />
                <span>{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Roaring Lion Security Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;