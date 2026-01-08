import React from 'react';
import { Check, Users, Weight } from 'lucide-react';
import { fleet } from '../data/mock';

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Modern & Well-Maintained Vehicles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our fleet consists of modern, well-maintained vehicles equipped with the latest 
            amenities to ensure your comfort and safety.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative p-6">
                {/* Vehicle Icon Placeholder */}
                <div className="w-full h-32 bg-slate-700/50 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-amber-500">
                    {vehicle.capacity.includes('Passengers') ? (
                      <Users className="w-16 h-16" />
                    ) : (
                      <Weight className="w-16 h-16" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-amber-500 font-semibold mb-4">
                  {vehicle.capacity}
                </p>

                <div className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
