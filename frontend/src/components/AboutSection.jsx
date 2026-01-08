import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { stats } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Trusted Partner in Transport & Trade
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              CITYINTEL LINERS TRANSPORT & GENERAL DEALERS has been a cornerstone of reliable 
              transportation and quality trading services. With years of experience, we've built 
              a reputation for excellence, safety, and customer satisfaction.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our commitment to quality service, modern fleet, and professional team ensures 
              that every journey and every delivery meets the highest standards. We're not just 
              a transport company – we're your partners in progress.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Mission</h4>
                  <p className="text-sm text-slate-600">
                    To provide safe, reliable, and affordable transport solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Vision</h4>
                  <p className="text-sm text-slate-600">
                    To be the leading transport and trading company in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Values */}
          <div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10">
              <h3 className="text-white text-xl font-semibold mb-8 text-center">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm">Quality Assured</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span className="text-sm">Customer First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
