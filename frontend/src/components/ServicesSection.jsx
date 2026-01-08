import React, { useState } from 'react';
import { Bus, Truck, Package, Car, ShoppingBag, Building2, Wrench, HardHat, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Bus,
  Truck,
  Package,
  Car,
  ShoppingBag,
  Building2,
  Wrench,
  HardHat
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'transport', label: 'Transport & Logistics' },
    { id: 'construction', label: 'Construction' },
    { id: 'general', label: 'General Trading' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From passenger transport to construction and general trading, we provide comprehensive solutions 
            tailored to meet all your business and personal needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
