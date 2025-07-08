import React, { useState, useEffect } from 'react';
import './ProjetosSection.css';

function ProjetosSection() {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoDetalhes, setProjetoDetalhes] = useState(null);

  // Função para abrir modal de todos os projetos
  const abrirModalTodos = () => {
    setModalAberto(true);
    document.body.classList.add('modal-open');
  };

  // Função para fechar modal de todos os projetos
  const fecharModalTodos = () => {
    setModalAberto(false);
    document.body.classList.remove('modal-open');
  };

  // Função para abrir detalhes do projeto
  const abrirDetalhes = (projeto) => {
    setProjetoDetalhes(projeto);
    document.body.classList.add('modal-open');
  };

  // Função para fechar detalhes do projeto
  const fecharDetalhes = () => {
    setProjetoDetalhes(null);
    document.body.classList.remove('modal-open');
  };

  // Cleanup quando o componente for desmontado
  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  // Gerenciar tecla ESC para fechar modais
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (projetoDetalhes) {
          fecharDetalhes();
        } else if (modalAberto) {
          fecharModalTodos();
        }
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [modalAberto, projetoDetalhes]);

  const projetosDestaque = [
    {
      id: 1,
      nome: "E-commerce Moderno",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      descricao: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      descricaoCompleta: "Uma plataforma de e-commerce moderna e responsiva desenvolvida com as melhores práticas de desenvolvimento web. Inclui sistema completo de autenticação, carrinho de compras persistente, integração com gateway de pagamento, painel administrativo para gestão de produtos e pedidos, e muito mais.",
      tecnologias: [
        { nome: "React", icone: "⚛️" },
        { nome: "Node.js", icone: "🟢" },
        { nome: "MongoDB", icone: "🍃" },
        { nome: "Stripe", icone: "💳" }
      ],
      funcionalidades: [
        "Sistema de autenticação completo",
        "Carrinho de compras persistente",
        "Gateway de pagamento integrado",
        "Painel administrativo",
        "Sistema de avaliações",
        "Busca avançada e filtros",
        "Responsivo e otimizado"
      ],
      links: {
        demo: "https://demo.exemplo.com",
        codigo: "https://github.com/usuario/ecommerce",
        documentacao: "https://docs.exemplo.com"
      }
    },
    {
      id: 2,
      nome: "App Produtividade",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      descricao: "App mobile para gestão de tarefas com sincronização em tempo real.",
      descricaoCompleta: "Aplicativo mobile nativo desenvolvido em React Native para gestão eficiente de tarefas e projetos. Com sincronização em tempo real, notificações push, modo offline e interface intuitiva, ajuda equipes e indivíduos a manterem-se organizados e produtivos.",
      tecnologias: [
        { nome: "React Native", icone: "📱" },
        { nome: "Firebase", icone: "🔥" },
        { nome: "TypeScript", icone: "📘" },
        { nome: "Expo", icone: "⚡" }
      ],
      funcionalidades: [
        "Sincronização em tempo real",
        "Notificações push",
        "Modo offline",
        "Colaboração em equipe",
        "Lembretes inteligentes",
        "Relatórios de produtividade",
        "Interface intuitiva"
      ],
      links: {
        demo: "https://expo.dev/@usuario/app",
        codigo: "https://github.com/usuario/productivity-app",
        playstore: "https://play.google.com/store/apps"
      }
    },
    {
      id: 3,
      nome: "Dashboard Analytics",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      descricao: "Dashboard interativo para visualização de dados com gráficos em tempo real.",
      descricaoCompleta: "Dashboard completo para análise de dados empresariais com visualizações interativas, relatórios em tempo real e insights automatizados. Desenvolvido com Next.js e integrado a múltiplas fontes de dados para fornecer uma visão 360° do negócio.",
      tecnologias: [
        { nome: "Next.js", icone: "▲" },
        { nome: "Chart.js", icone: "📊" },
        { nome: "PostgreSQL", icone: "🐘" },
        { nome: "Tailwind", icone: "🎨" }
      ],
      funcionalidades: [
        "Gráficos interativos em tempo real",
        "Múltiplas fontes de dados",
        "Relatórios automatizados",
        "Filtros avançados",
        "Exportação de dados",
        "Alertas personalizados",
        "Interface responsiva"
      ],
      links: {
        demo: "https://dashboard.exemplo.com",
        codigo: "https://github.com/usuario/dashboard",
        documentacao: "https://docs.dashboard.exemplo.com"
      }
    },
    {
      id: 4,
      nome: "API RESTful",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.5 8.5L11 6L9 4L6.5 6.5L4 4L2 6L6.5 10.5L8.5 8.5M13 2V8L19 14V20C19 21.11 18.11 22 17 22H7C5.89 22 5 21.11 5 20V18L11 12V6L13 2M17 8A2 2 0 0 1 15 6A2 2 0 0 1 17 4A2 2 0 0 1 19 6A2 2 0 0 1 17 8Z"/>
        </svg>
      ),
      descricao: "API robusta com autenticação, documentação completa e testes.",
      descricaoCompleta: "API RESTful escalável e segura desenvolvida com Node.js e Express. Inclui sistema de autenticação JWT, documentação interativa com Swagger, testes automatizados, rate limiting, logging e monitoramento completo para aplicações em produção.",
      tecnologias: [
        { nome: "Node.js", icone: "🟢" },
        { nome: "Express", icone: "🚀" },
        { nome: "JWT", icone: "🔐" },
        { nome: "Swagger", icone: "📖" }
      ],
      funcionalidades: [
        "Autenticação JWT segura",
        "Documentação interativa",
        "Testes automatizados",
        "Rate limiting",
        "Logging estruturado",
        "Monitoramento em tempo real",
        "Deploy automatizado"
      ],
      links: {
        demo: "https://api.exemplo.com/docs",
        codigo: "https://github.com/usuario/api-restful",
        documentacao: "https://docs.api.exemplo.com"
      }
    }
  ];

  const todosOsProjetos = [
    ...projetosDestaque,
    {
      nome: "Blog Pessoal",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
        </svg>
      ),
      descricao: "Blog desenvolvido com sistema de comentários e busca avançada.",
      tecnologias: [
        { nome: "Gatsby", icone: "⚡" },
        { nome: "GraphQL", icone: "📊" },
        { nome: "Netlify CMS", icone: "🌐" }
      ],
      links: {
        demo: "https://blog.exemplo.com",
        codigo: "https://github.com/usuario/blog"
      }
    },
    {
      nome: "Sistema de Chat",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .3 0 .5-.1L14 18h6c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      descricao: "Chat em tempo real com salas privadas e notificações push.",
      tecnologias: [
        { nome: "Socket.io", icone: "🔌" },
        { nome: "Express", icone: "🚀" },
        { nome: "Redis", icone: "🔴" }
      ],
      links: {
        demo: "https://chat.exemplo.com",
        codigo: "https://github.com/usuario/chat"
      }
    },
    {
      nome: "Portfólio v1",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      descricao: "Primeira versão do meu portfólio com animações CSS.",
      tecnologias: [
        { nome: "HTML", icone: "🌐" },
        { nome: "CSS", icone: "🎨" },
        { nome: "JavaScript", icone: "⚡" }
      ],
      links: {
        demo: "https://v1.exemplo.com",
        codigo: "https://github.com/usuario/portfolio-v1"
      }
    },
    {
      nome: "App Weather",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4t4.25 1.43q1.87 1.42 2.5 3.72q1.9.42 3.08 1.95Q23 12.63 23 14.58q0 2.27-1.61 3.85Q19.78 20 17.5 20Z"/>
        </svg>
      ),
      descricao: "Aplicativo de previsão do tempo com geolocalização.",
      tecnologias: [
        { nome: "React", icone: "⚛️" },
        { nome: "OpenWeather API", icone: "🌤️" },
        { nome: "PWA", icone: "📱" }
      ],
      links: {
        demo: "https://weather.exemplo.com",
        codigo: "https://github.com/usuario/weather"
      }
    }
  ];

  return (
    <>
      <section className="projetos-section" id="projetos">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Projetos em Destaque</h2>
            <p className="section-subtitle">
              Alguns dos meus trabalhos mais recentes e interessantes
            </p>
          </header>
          
          <div className="projetos-grid">
            {projetosDestaque.map((projeto, index) => (
              <div 
                key={index} 
                className="projeto-card"
                onClick={() => abrirDetalhes(projeto)}
                style={{ cursor: 'pointer' }}
              >
                <div className="projeto-image">
                  <div className="projeto-icon">{projeto.icon}</div>
                </div>
                <h3 className="projeto-nome">{projeto.nome}</h3>
                <p className="projeto-descricao">{projeto.descricao}</p>
                <div className="projeto-tecnologias">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {typeof tech === 'string' ? tech : tech.nome}
                    </span>
                  ))}
                </div>
                <div className="projeto-links">
                  <a 
                    href={projeto.links.demo} 
                    className="projeto-link demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                  <a 
                    href={projeto.links.codigo} 
                    className="projeto-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="ver-todos-btn"
            onClick={abrirModalTodos}
          >
            Ver Todos os Projetos
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </button>
        </div>
      </section>

      {modalAberto && (
        <div className="projetos-modal" onClick={fecharModalTodos}>
          <div className="projetos-modal-content modal-scrollable" onClick={(e) => e.stopPropagation()}>
            <div className="projetos-modal-header">
              <h2 className="projetos-modal-title">Todos os Projetos</h2>
              <button 
                className="close-modal-btn"
                onClick={fecharModalTodos}
              >
                ✕
              </button>
            </div>
            
            <div className="projetos-modal-grid">
              {todosOsProjetos.map((projeto, index) => (
                <div 
                  key={index} 
                  className="projeto-card"
                  onClick={() => abrirDetalhes(projeto)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="projeto-image">
                    <div className="projeto-icon">{projeto.icon}</div>
                  </div>
                  <h3 className="projeto-nome">{projeto.nome}</h3>
                  <p className="projeto-descricao">{projeto.descricao}</p>
                  <div className="projeto-tecnologias">
                    {projeto.tecnologias.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {typeof tech === 'string' ? tech : tech.nome}
                      </span>
                    ))}
                  </div>
                  <div className="projeto-links">
                    <a 
                      href={projeto.links.demo} 
                      className="projeto-link demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Demo
                    </a>
                    <a 
                      href={projeto.links.codigo} 
                      className="projeto-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Código
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {projetoDetalhes && (
        <div className="projeto-detalhes-modal" onClick={fecharDetalhes}>
          <div className="projeto-detalhes-content modal-scrollable" onClick={(e) => e.stopPropagation()}>
            <div className="projeto-detalhes-header">
              <button 
                className="projeto-detalhes-close"
                onClick={fecharDetalhes}
              >
                ✕
              </button>
              <div className="projeto-detalhes-icon">{projetoDetalhes.icon}</div>
              <h2 className="projeto-detalhes-titulo">{projetoDetalhes.nome}</h2>
              <p className="projeto-detalhes-resumo">{projetoDetalhes.descricao}</p>
            </div>
            
            <div className="projeto-detalhes-body">
              {projetoDetalhes.descricaoCompleta && (
                <div className="projeto-detalhes-section">
                  <h3 className="projeto-detalhes-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Sobre o Projeto
                  </h3>
                  <p className="projeto-descricao-completa">{projetoDetalhes.descricaoCompleta}</p>
                </div>
              )}

              {projetoDetalhes.funcionalidades && (
                <div className="projeto-detalhes-section">
                  <h3 className="projeto-detalhes-section-title">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Funcionalidades
                  </h3>
                  <ul className="projeto-funcionalidades">
                    {projetoDetalhes.funcionalidades.map((func, index) => (
                      <li key={index}>{func}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="projeto-detalhes-section">
                <h3 className="projeto-detalhes-section-title">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                  Tecnologias
                </h3>
                <div className="projeto-tecnologias-detalhadas">
                  {projetoDetalhes.tecnologias.map((tech, index) => (
                    <div key={index} className="tech-card">
                      <div className="tech-card-icon">
                        {typeof tech === 'string' ? '🔧' : tech.icone}
                      </div>
                      <div className="tech-card-name">
                        {typeof tech === 'string' ? tech : tech.nome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="projeto-detalhes-section">
                <h3 className="projeto-detalhes-section-title">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.99c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H6.99c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9.01-6H13v1.9h4.01c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1H13V17h4.01c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                  Links
                </h3>
                <div className="projeto-links-detalhados">
                  {projetoDetalhes.links.demo && (
                    <a 
                      href={projetoDetalhes.links.demo} 
                      className="projeto-link-detalhado demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                      Ver Demo
                    </a>
                  )}
                  {projetoDetalhes.links.codigo && (
                    <a 
                      href={projetoDetalhes.links.codigo} 
                      className="projeto-link-detalhado"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                      </svg>
                      Ver Código
                    </a>
                  )}
                  {projetoDetalhes.links.documentacao && (
                    <a 
                      href={projetoDetalhes.links.documentacao} 
                      className="projeto-link-detalhado"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                      Documentação
                    </a>
                  )}
                  {projetoDetalhes.links.playstore && (
                    <a 
                      href={projetoDetalhes.links.playstore} 
                      className="projeto-link-detalhado"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 20.5v-17c0-.5.2-.8.5-1L12 12 3.5 21.5c-.3-.2-.5-.5-.5-1zM12 12L3.5 2.5c.2-.2.4-.3.7-.3.1 0 .2 0 .3.1l8 4.6L12 12zm0 0l-.5 5.4 8 4.6c.1 0 .2.1.3.1.3 0 .5-.1.7-.3L12 12zm0 0L20.5 2.5c.3.2.5.5.5 1v17c0 .5-.2.8-.5 1L12 12z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjetosSection;
