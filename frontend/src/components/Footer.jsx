import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Routes', href: '#routes' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Passenger Transport',
    'Cargo & Freight',
    'Building & Construction',
    'Welding & Fabrication',
    'Vehicle Hire',
    'General Merchandise',
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={companyInfo.logo} 
                alt="CITYINTEL LINERS Logo" 
                className="h-16 w-16 object-contain rounded-full bg-white shadow-md"
              />
              <div>
                <span className="text-xl font-bold text-amber-500">CITYINTEL</span>
                <span className="block text-sm font-medium text-slate-400">LINERS</span>
              </div>
            </div>
            <p className="text-slate-400 mb-2 text-sm italic">
              "Powering Construction, Connecting Communities"
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner in transport, construction & general merchandise since 2023.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{companyInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} CITYINTEL LINERS TRANSPORT & GENERAL DEALERS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
