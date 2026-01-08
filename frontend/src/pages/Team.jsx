import React from 'react';
import { User } from 'lucide-react';
import { teamMembers } from '../mockData';

const Team = () => {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1 className="page-title">Our Leadership Team</h1>
        <p className="page-description">
          Meet the experienced professionals leading Roaring Lion Security
        </p>
      </section>

      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                <User size={64} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-cta">
        <h2>Join Our Team</h2>
        <p>
          We are always looking for dedicated security professionals to join our growing team. 
          If you're passionate about providing excellent security services, we'd love to hear from you.
        </p>
        <a href="mailto:kennethlukama1991@gmail.com" className="btn-primary">
          <span>Contact HR</span>
        </a>
      </section>
    </div>
  );
};

export default Team;