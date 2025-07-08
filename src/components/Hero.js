import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero minimal hero-farley" style={{paddingTop: '0'}}>
      <nav className="navbar-modern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        background: 'var(--background)',
        border: 'none',
        boxShadow: 'none',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px'
      }}>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#sobre" style={{color: 'var(--secondary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none'}}>Sobre</a></li>
          <li><a href="#projetos" style={{color: 'var(--secondary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none'}}>Projetos</a></li>
          <li><a href="#contato" style={{color: 'var(--secondary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none'}}>Contato</a></li>
          <li>
            <button 
              onClick={() => navigate('/curriculo')} 
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary)',
                fontWeight: 700,
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Currículo
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/artigos')} 
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary)',
                fontWeight: 700,
                fontSize: '1.1rem',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Artigos
            </button>
          </li>
        </ul>
      </nav>
      <div className="hero-content minimal hero-farley-content">
        <h1 className="hero-title minimal hero-farley-title">Olá, eu sou <span className="hero-highlight">Caio Ramos</span>.</h1>
        <h2 className="hero-subtitle minimal hero-farley-subtitle">Desenvolvedor Full-Stack</h2>
        <p className="hero-desc minimal hero-farley-desc">Apaixonado por criar experiências digitais modernas, acessíveis e de alto impacto visual.<br/>Veja meus projetos e entre em contato!</p>
        <div className="hero-buttons">
          <a className="hero-btn minimal hero-farley-btn" href="mailto:seu@email.com">Entre em contato</a>
          <button 
            onClick={() => navigate('/curriculo')} 
            className="hero-btn minimal hero-farley-btn secondary"
          >
            Ver Currículo
          </button>
        </div>
      </div>
      <section id="sobre" style={{width:'100vw',background:'transparent',color:'var(--text)',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'60vh'}}>
        <div style={{maxWidth:'700px',textAlign:'center',padding:'2rem'}}>
          <h2 style={{color:'var(--secondary)',fontSize:'2.2rem',fontWeight:800}}>Sobre Mim</h2>
          <p style={{fontSize:'1.15rem',color:'#e0e0e0',lineHeight:1.7,marginTop:'2rem'}}>Sou um desenvolvedor front-end apaixonado por criar interfaces modernas, acessíveis e de alto impacto visual. Tenho experiência com React, UI Design e foco em entregar soluções que unem performance, beleza e usabilidade.<br/><br/>Busco sempre evoluir, aprender novas tecnologias e contribuir para projetos inovadores.</p>
        </div>
      </section>
      <section id="projetos" style={{width:'100vw',background:'transparent',color:'var(--text)',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'60vh'}}>
        <div style={{maxWidth:'700px',textAlign:'center',padding:'2rem'}}>
          <h2 style={{color:'var(--secondary)',fontSize:'2.2rem',fontWeight:800}}>Projetos em Destaque</h2>
          <ul style={{listStyle:'none',padding:0,margin:'2.5rem 0 0 0'}}>
            <li style={{marginBottom:'2.5rem'}}>
              <h3 style={{color:'var(--secondary)',fontSize:'1.3rem',fontWeight:700,marginBottom:'0.5rem'}}>Projeto 1</h3>
              <p style={{color:'#e0e0e0',fontSize:'1.05rem',margin:'0.5rem 0'}}>Aplicação web responsiva para gestão de tarefas.</p>
              <span style={{color:'#a259f7',fontSize:'0.98rem'}}>React, Styled Components</span><br/>
              <a href="https://github.com/seuusuario/projeto1" target="_blank" rel="noopener noreferrer" style={{color:'var(--secondary)',fontWeight:600,textDecoration:'underline',marginTop:'0.7rem',display:'inline-block'}}>Ver no GitHub</a>
            </li>
            <li>
              <h3 style={{color:'var(--secondary)',fontSize:'1.3rem',fontWeight:700,marginBottom:'0.5rem'}}>Projeto 2</h3>
              <p style={{color:'#e0e0e0',fontSize:'1.05rem',margin:'0.5rem 0'}}>Landing page moderna para portfólio pessoal.</p>
              <span style={{color:'#a259f7',fontSize:'0.98rem'}}>React, Framer Motion</span><br/>
              <a href="https://github.com/seuusuario/projeto2" target="_blank" rel="noopener noreferrer" style={{color:'var(--secondary)',fontWeight:600,textDecoration:'underline',marginTop:'0.7rem',display:'inline-block'}}>Ver no GitHub</a>
            </li>
          </ul>
        </div>
      </section>
      <section id="contato" style={{width:'100vw',background:'transparent',color:'var(--text)',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'60vh'}}>
        <div style={{maxWidth:'700px',textAlign:'center',padding:'2rem'}}>
          <h2 style={{color:'var(--secondary)',fontSize:'2.2rem',fontWeight:800}}>Contato</h2>
          <p style={{fontSize:'1.15rem',color:'#e0e0e0',lineHeight:1.7,marginTop:'2rem'}}>Quer conversar sobre projetos, parcerias ou oportunidades?<br/>Me envie um e-mail ou acesse o site publicado na Vercel.</p>
          <a href="mailto:seu@email.com" style={{background:'var(--secondary)',color:'var(--primary)',padding:'1rem 2.5rem',borderRadius:'30px',fontWeight:700,textDecoration:'none',fontSize:'1.1rem',margin:'2rem 0 0 0',display:'inline-block',transition:'background 0.2s,color 0.2s'}}>Enviar e-mail</a>
          <br/>
          <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" style={{color:'var(--secondary)',fontWeight:600,textDecoration:'underline',marginTop:'1.5rem',display:'inline-block'}}>Ver site publicado na Vercel</a>
        </div>
      </section>
    </section>
  );
}

export default Hero;
