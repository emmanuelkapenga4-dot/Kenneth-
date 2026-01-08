import React from 'react';
import { Shield, Camera, Car, Users, CheckCircle2 } from 'lucide-react';
import { services } from '../mockData';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceIcons = {
    "CCTV & Surveillance": Camera,
    "Mobile Patrol Service": Car,
    "Event Security": Users,
    "Risk Assessment & Consulting": Shield
  };

  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">Our Security Services</h1>
        <p className="page-description">
          Comprehensive security solutions designed to protect your business, assets, and events across Solwezi and Northwestern Province.
        </p>
      </section>

      <section className="services-detail-section">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.title];
          return (
            <div key={service.id} className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-detail-icon">
                <Icon size={64} />
              </div>
              <div className="service-detail-content">
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <div className="service-detail-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="services-cta">
        <h2>Need a Custom Security Solution?</h2>
        <p>Contact us to discuss your specific security requirements and get a tailored quote.</p>
        <Link to="/contact" className="btn-primary">
          <span>Request a Consultation</span>
        </Link>
      </section>
    </div>
  );
};

export default Services;