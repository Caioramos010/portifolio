import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import illustration from '../../images/illustration.png';
import logo from '../../images/logo.png';

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* Header invisível */}
      <header className="hero-header">
        <div className="hero-header-content">
          <Link to="/" className="hero-logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
          <nav className="hero-nav">
            <Link to="/artigos" className="hero-nav-link">Artigos</Link>
            <Link to="/curriculo" className="hero-nav-link">Currículo</Link>
          </nav>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-intro">
          <p className="hero-greeting">Olá! Eu sou</p>
          <h1 className="hero-name">Caio Ramos</h1>
          <h2 className="hero-title">Desenvolvedor Full-Stack</h2>
          <p className="hero-description">
            Apaixonado por criar experiências digitais modernas, acessíveis e de alto impacto visual.
            Transformo ideias em soluções tecnológicas inovadoras.
          </p>
          <div className="hero-actions">
            <a href="#contato" className="btn-primary">Entre em contato</a>
            <a href="#sobre" className="btn-secondary">Conheça mais</a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={illustration} alt="Caio Ramos - Desenvolvedor" className="developer-image" />
        </div>
      </div>
      
      <div className="hero-bg-elements">
        <div className="floating-element" style={{
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          animationDelay: '0s'
        }}></div>
        <div className="floating-element" style={{
          top: '60%',
          right: '15%',
          width: '80px',
          height: '80px',
          animationDelay: '2s'
        }}></div>
        <div className="floating-element" style={{
          bottom: '20%',
          left: '5%',
          width: '60px',
          height: '60px',
          animationDelay: '4s'
        }}></div>
      </div>
    </section>
  );
}

export default HeroSection;
