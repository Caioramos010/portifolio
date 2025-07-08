import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ['hero', 'sobre', 'projetos', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigation = (path) => {
    if (path === '/') {
      navigate(path);
      setTimeout(() => scrollToSection('hero'), 100);
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-content">
        <button onClick={() => handleNavigation('/')} className="navbar-logo">Portfolio</button>
        <ul className="navbar-menu">
          <li>
            <button 
              className={activeSection === 'hero' && isHome ? 'active' : ''}
              onClick={() => handleNavigation('/')}
            >
              Início
            </button>
          </li>
          {isHome && (
            <>
              <li>
                <button 
                  className={activeSection === 'sobre' ? 'active' : ''}
                  onClick={() => scrollToSection('sobre')}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'projetos' ? 'active' : ''}
                  onClick={() => scrollToSection('projetos')}
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  className={activeSection === 'contato' ? 'active' : ''}
                  onClick={() => scrollToSection('contato')}
                >
                  Contato
                </button>
              </li>
            </>
          )}
          <li>
            <button 
              className={location.pathname === '/curriculo' ? 'active' : ''}
              onClick={() => handleNavigation('/curriculo')}
            >
              Currículo
            </button>
          </li>
          <li>
            <button 
              className={location.pathname === '/artigos' ? 'active' : ''}
              onClick={() => handleNavigation('/artigos')}
            >
              Artigos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
