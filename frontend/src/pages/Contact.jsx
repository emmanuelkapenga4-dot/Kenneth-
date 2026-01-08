import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { companyInfo } from '../mockData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Thank you! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-description">
          Get in touch with us for a free consultation or emergency security services
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We're here to help you with all your security needs. Reach out to us anytime.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-details">
                  <h3>Phone</h3>
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                  <p className="method-note">Available 24/7</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <h3>Email</h3>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  <p className="method-note">Response within 24 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={24} />
                </div>
                <div className="method-details">
                  <h3>Location</h3>
                  <p>{companyInfo.address}</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Clock size={24} />
                </div>
                <div className="method-details">
                  <h3>Operating Hours</h3>
                  <p>{companyInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Send Us a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+260 96XXXXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="cctv">CCTV & Surveillance</option>
                  <option value="patrol">Mobile Patrol Service</option>
                  <option value="event">Event Security</option>
                  <option value="consulting">Risk Assessment & Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your security requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;