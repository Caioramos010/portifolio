import React from 'react';
import './SobreSection.css';

function SobreSection() {
  const skills = [
    'React', 'JavaScript', 'Java', 'Node.js', 'Python', 'Typebot', 'Docker',
    'Git', 'MySQL', 'Tailwind CSS', 'Figma', 'Ubuntu', 'Linux'
  ];

  return (
    <section className="sobre-section" id="sobre">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </header>
        
        <div className="sobre-content">
          <div className="sobre-text">
            <p>
              Sou um desenvolvedor full-stack apaixonado por criar soluções digitais que fazem a diferença. 
              Com experiência em tecnologias modernas, busco sempre entregar produtos de alta qualidade 
              que combinem funcionalidade, performance e design.
            </p>
            <p>
              Minha jornada na programação começou com curiosidade e se transformou em paixão. 
              Adoro enfrentar desafios complexos e transformar ideias em realidade através do código. 
              Estou sempre aprendendo novas tecnologias e metodologias para me manter atualizado 
              no mundo em constante evolução da tecnologia.
            </p>
            <p>
              Quando não estou codando, gosto de contribuir para projetos open source, 
              escrever sobre tecnologia e compartilhar conhecimento com a comunidade.
            </p>
          </div>
          
          <div className="skills">
            <h3>Tecnologias & Ferramentas</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreSection;
