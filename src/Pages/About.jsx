import React from 'react';
import AboutHero from '../Component/About/AboutHero';
import Technologies from '../Component/About/Technologies';
import InstructorsSection from '../Component/About/InstructorsSection';
import { HowWeWork } from '../Component/About/HowWeWork'; 

export default function About() {
  return (
    <div>
      <AboutHero />
     
      <Technologies />
      <InstructorsSection />
      <HowWeWork />
      
    </div>
  );
}
