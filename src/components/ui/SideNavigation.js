import React, { useState, useEffect, useRef } from 'react';
import './SideNavigation.css';

function SideNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(0);
  const scrollArray = useRef([]);
  const wheelDirection = useRef('');

  const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
    { id: 'footer', label: 'Footer' }
  ];

  // Função auxiliar para calcular média de um array
  const getAverage = (arr, elements) => {
    let sum = 0;
    const lastElements = arr.slice(Math.max(arr.length - elements, 1));
    
    for (let i = 0; i < lastElements.length; i++) {
      sum += lastElements[i];
    }
    
    return Math.ceil(sum / lastElements.length);
  };

  // Detecção automática da seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Se estiver no topo, sempre hero
      if (scrollPosition < 100) {
        setActiveSection('hero');
        return;
      }

      // Encontra qual seção está mais visível
      let currentSection = 'hero';
      let maxVisibleArea = 0;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const elementBottom = elementTop + elementHeight;
          
          // Calcula a área visível da seção
          const visibleTop = Math.max(elementTop, scrollPosition);
          const visibleBottom = Math.min(elementBottom, scrollPosition + windowHeight);
          const visibleArea = Math.max(0, visibleBottom - visibleTop);
          
          // Se esta seção tem mais área visível, ela é a atual
          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            currentSection = section.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    // Controle avançado de scroll com wheel (sempre seção por seção)
    const handleWheel = (e) => {
      // SEMPRE previne o scroll padrão
      e.preventDefault();
      e.stopPropagation();
      
      if (isScrolling) {
        return false;
      }

      const currentTime = new Date().getTime();
      const value = e.wheelDelta || -e.deltaY || -e.detail;
      
      // Detecta se é scroll vertical
      const horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      const isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || 
                                   (Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection);

      if (!isScrollingVertically) return false;

      // Detecta direção (simplificado para ser mais confiável)
      const direction = value < 0 ? 'down' : value > 0 ? 'up' : 'none';
      
      if (direction === 'none') return false;

      // Diferença de tempo entre o último scroll e o atual
      const timeDiff = currentTime - lastScrollTime.current;
      lastScrollTime.current = currentTime;

      // Se não scrollaram há um tempo, considera uma nova ação de scroll
      if (timeDiff > 100) {
        scrollArray.current = [];
      }

      // Limita o array a 10 elementos para evitar acúmulo
      if (scrollArray.current.length > 10) {
        scrollArray.current.shift();
      }

      scrollArray.current.push(Math.abs(value));

      // Só processa se houver pelo menos 3 eventos de scroll consistentes
      if (scrollArray.current.length >= 3) {
        // Verifica se os últimos 3 scrolls foram consistentes (não muito baixos)
        const lastThree = scrollArray.current.slice(-3);
        const avgIntensity = lastThree.reduce((sum, val) => sum + val, 0) / 3;
        
        // Se a intensidade média for muito baixa, ignora (trackpad muito leve)
        if (avgIntensity < 10) {
          return false;
        }
        
        setIsScrolling(true);

        const currentIndex = sections.findIndex(section => section.id === activeSection);
        let targetIndex;

        if (direction === 'down') {
          targetIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (direction === 'up') {
          targetIndex = Math.max(currentIndex - 1, 0);
        } else {
          setIsScrolling(false);
          return false;
        }

        const targetSection = sections[targetIndex];
        scrollToSection(targetSection.id);

        // Limpa o array imediatamente para evitar múltiplos triggers
        scrollArray.current = [];
        
        // Delay de 500ms como configurado
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);

        return false;
      }

      return false;
    };

    const preventDefaultScroll = (e) => {
      if (isScrolling) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('touchmove', preventDefaultScroll, { passive: false });
    document.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        if (isScrolling) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    });
    
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleWheel, { capture: true });
      document.removeEventListener('touchmove', preventDefaultScroll);
    };
  }, [activeSection, isScrolling]);

  // Função para navegar para uma seção específica
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      
      // Delay de 500ms para prevenir scroll acidental
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <nav className="side-navigation">
      <ul className="side-nav-menu">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              data-tooltip={section.label}
              aria-label={`Navegar para ${section.label}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
