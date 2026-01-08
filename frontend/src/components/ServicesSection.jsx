import React from 'react';
import { Bus, Truck, Package, Car, ShoppingBag, Zap, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Bus,
  Truck,
  Package,
  Car,
  ShoppingBag,
  Zap
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From passenger transport to cargo logistics, we provide comprehensive solutions 
            tailored to meet your transportation and trading needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
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
