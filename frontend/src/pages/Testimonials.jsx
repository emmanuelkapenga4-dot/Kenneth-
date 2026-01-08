import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mockData';

const Testimonials = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">Client Testimonials</h1>
        <p className="page-description">
          See what our clients say about our security services
        </p>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={20} fill="#00FFD1" stroke="#00FFD1" />
                ))}
              </div>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <div className="testimonial-client">
                <div className="client-avatar">
                  {testimonial.client.charAt(0)}
                </div>
                <p className="client-name">{testimonial.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-cta">
        <h2>Experience Our Service</h2>
        <p>Join over 200 satisfied clients who trust us with their security needs.</p>
        <a href="/contact" className="btn-primary">
          <span>Get Started Today</span>
        </a>
      </section>
    </div>
  );
};

export default Testimonials;