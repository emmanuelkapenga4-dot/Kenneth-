import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { routes } from '../data/mock';
import { Button } from './ui/button';

const RoutesSection = () => {
  return (
    <section id="routes" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular Routes We Cover
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We operate on major routes across the country, connecting cities and towns with 
            reliable and comfortable transport services.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-amber-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span className="text-white font-semibold">{route.from}</span>
                  </div>
                  <div className="border-l-2 border-dashed border-slate-600 h-6 ml-2.5"></div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span className="text-white font-semibold">{route.to}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{route.duration}</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-amber-500 mt-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-6"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
