import React from 'react';
import HeroSection from './sections/HeroSection';
import SobreSection from './sections/SobreSection';
import ProjetosSection from './sections/ProjetosSection';
import ContatoSection from './sections/ContatoSection';
import Footer from './sections/Footer';
import SideNavigation from './ui/SideNavigation';
import '../styles/globals.css';

function ModularSinglePage() {
  return (
    <div className="single-page">
      <SideNavigation />
      <HeroSection />
      <SobreSection />
      <ProjetosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}

export default ModularSinglePage;
