import React from 'react';
import AboutHero from '../Component/About/AboutHero';
import Technologies from '../Component/About/Technologies';
import InstructorsSection from '../Component/About/InstructorsSection';

export default function About() {
  return (
    <div>
      <AboutHero />
     
      <Technologies />
      <InstructorsSection />
      
    </div>
  );
}
