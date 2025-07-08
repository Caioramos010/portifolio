/**
 * ScrollNavigation.js
 * Este componente gerencia a navegação automática baseada no scroll
 */

import { useEffect, useState } from 'react';
import { 
  smoothScrollPolyfill, 
  getVisibleSection, 
  setupIntersectionObserver,
  scrollToSection 
} from './scrollUtils';

function ScrollNavigation({ scrollRef, onSectionChange }) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Aplica o polyfill para smooth scroll
    smoothScrollPolyfill();
    
    // Verifica se temos os elementos necessários
    if (!scrollRef || !scrollRef.current) return;

    const container = scrollRef.current;
    const sections = container.querySelectorAll(
      '.hero-section, .sobre-section, .projetos-section, .contato-section, #footer'
    );
    
    // Array para facilitar o acesso às seções
    const sectionsArray = Array.from(sections);

    // Controla o evento de roda do mouse para rolagem por seção (opcional)
    const handleWheelEvent = (e) => {
      // Reduzido o tempo de throttle para melhor responsividade
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      // Determina a direção do scroll
      const direction = e.deltaY > 0 ? 'next' : 'prev';
      
      // Chama nossa função para rolar para a próxima/anterior seção
      const sectionId = scrollToSection(container, sectionsArray, direction);
      
      if (sectionId) {
        const sectionName = sectionId === 'footer' ? 'footer' : sectionId;
        onSectionChange(sectionName);
      }
      
      // Reduzido o timeout para melhor responsividade
      setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Reduzido de 800ms para 300ms
    };

    return () => {
      // container.removeEventListener('wheel', handleWheelEvent);
    };
  }, [scrollRef, onSectionChange, isScrolling]);

  return null; // Este é um componente funcional que não renderiza nada visualmente
}

export default ScrollNavigation;
