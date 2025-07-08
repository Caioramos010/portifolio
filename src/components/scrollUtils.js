/**
 * scrollUtils.js
 * Utilitários para melhorar a experiência de scroll
 */

// Polyfill para suporte a smooth scroll em diferentes navegadores
export function smoothScrollPolyfill() {
  // Verifica se o navegador suporta scroll behavior
  if (typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style) {
    return; // O navegador já suporta scroll-behavior
  }

  // Esta função implementa um smooth scroll customizado
  window.smoothScrollTo = function(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = function() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    // Função de easing para suavizar o movimento
    const easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    animateScroll();
  };
}

// Função para detectar a seção atual durante o scroll
export function getVisibleSection(container, sections, threshold = 0.3) {
  if (!container || !sections.length) return null;
  
  const containerHeight = container.clientHeight;
  const scrollPosition = container.scrollTop;
  const containerBottom = scrollPosition + containerHeight;
  
  // Verifica se chegamos ao final do scroll
  const totalScrollHeight = container.scrollHeight;
  const isAtBottom = (containerBottom >= totalScrollHeight - 10); // 10px de margem de erro
  
  // Se estiver no final do scroll, retorna o footer
  if (isAtBottom) {
    const footer = sections[sections.length - 1];
    if (footer.id === 'footer') {
      return 'footer';
    }
  }
  
  // Verifica qual seção ocupa a maior parte da viewport
  let maxVisibleSection = null;
  let maxVisibleAmount = 0;
  
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    
    // Verifica se a seção está visível na viewport
    if (
      (sectionTop <= containerBottom) && 
      (sectionBottom >= scrollPosition)
    ) {
      // Calcula quanto da seção está visível
      const visibleTop = Math.max(sectionTop, scrollPosition);
      const visibleBottom = Math.min(sectionBottom, containerBottom);
      const visibleHeight = visibleBottom - visibleTop;
      
      // Se esta seção tem mais área visível que a anterior
      if (visibleHeight > maxVisibleAmount) {
        maxVisibleAmount = visibleHeight;
        maxVisibleSection = section.id || section.className.split(' ')[0].replace('-section', '');
      }
    }
  }
  
  return maxVisibleSection;
}

// Observa intersecções de seções para navegação
export function setupIntersectionObserver(container, callback) {
  if (!window.IntersectionObserver) return null;
  
  // Configuração para detectar quando uma seção ocupa a maior parte da tela
  const observer = new IntersectionObserver(
    (entries) => {
      // Ordena as entradas pela proporção de intersecção (do maior para o menor)
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      // Se temos uma entrada visível com boa proporção, usamos ela
      if (visibleEntries.length > 0 && visibleEntries[0].intersectionRatio >= 0.5) {
        const target = visibleEntries[0].target;
        const sectionId = target.id || target.className.split(' ')[0].replace('-section', '');
        
        // Verifica se é o footer e se está quase totalmente visível
        if (target.id === 'footer' && visibleEntries[0].intersectionRatio > 0.8) {
          callback('footer');
        } else {
          callback(sectionId);
        }
      }
    },
    {
      root: container,
      rootMargin: '0px',
      threshold: [0.5, 0.8, 0.9] // Adicionado mais thresholds para melhor detecção
    }
  );
  
  return observer;
}

// Função para controlar o scroll para a próxima/anterior seção
export function scrollToSection(container, sections, direction) {
  if (!container || !sections.length) return;
  
  const currentPosition = container.scrollTop;
  const containerHeight = container.clientHeight;
  
  // Encontra a seção atual
  let currentSectionIndex = -1;
  let closestDistance = Infinity;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const distance = Math.abs(sectionTop - currentPosition);
    
    if (distance < closestDistance) {
      closestDistance = distance;
      currentSectionIndex = index;
    }
  });
  
  // Determina a próxima seção com base na direção
  let targetIndex;
  if (direction === 'next') {
    targetIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
  } else {
    targetIndex = Math.max(currentSectionIndex - 1, 0);
  }
  
  // Rola para a seção alvo
  const targetSection = sections[targetIndex];
  if (targetSection) {
    // Usa o polyfill se necessário
    if ('scrollBehavior' in document.documentElement.style) {
      container.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    } else if (window.smoothScrollTo) {
      window.smoothScrollTo(container, targetSection.offsetTop, 700);
    } else {
      container.scrollTop = targetSection.offsetTop;
    }
    
    return targetSection.id || targetSection.className.split(' ')[0].replace('-section', '');
  }
  
  return null;
}
