import React from 'react';
import './ContatoSection.css';

function ContatoSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Caioramos010',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/caio-de-souza-ramos/',
      icon: (
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="contato-section" id="contato">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Vamos Trabalhar Juntos?</h2>
          <p className="section-subtitle">
            Estou sempre aberto a novas oportunidades e projetos interessantes
          </p>
        </header>
        
        <div className="contato-content">
          <div className="contato-info">
            <p>
              Se você tem um projeto em mente, uma oportunidade de trabalho, 
              ou simplesmente quer bater um papo sobre tecnologia, ficarei 
              feliz em conversar!
            </p>
            <p>
              Vamos criar algo incrível juntos. Entre em contato e vamos 
              transformar suas ideias em realidade.
            </p>
          </div>
          
          <div className="contato-actions">
            <a 
              href="mailto:caio.sr06@gmail.com" 
              className="btn-primary contato-btn"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.909L12 10.545l8.455-6.724h1.909c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
              Enviar E-mail
            </a>
            <a 
              href="https://wa.me/5548984026807?text=Ol%C3%A1%20gostaria%20de%20saber%20um%20pouco%20mais%20do%20seu%20trabalho" 
              className="btn-secondary contato-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              Enviar Mensagem
            </a>
          </div>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                <span className="social-icon-wrapper">
                  {link.icon}
                </span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContatoSection;
