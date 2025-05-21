import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'; // Hook personalizado para observar a visibilidade de elementos na tela.

const SobreNos = () => {
  // Configura o hook para observar a visibilidade da seção com threshold de 20% e ativação única.
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Lista de membros da equipe com nome, cargo e imagem.
  const teamMembers = [
    { name: "João Silva", role: "CEO", img: "/img/team-1.jpg" },
    { name: "Maria Oliveira", role: "Desenvolvedora", img: "/img/team-2.jpg" },
    { name: "Carlos Souza", role: "Designer", img: "/img/team-3.jpg" },
    { name: "Ana Costa", role: "Gerente de Projetos", img: "/img/team-4.jpg" }
  ];

  return (
    // Div principal com referência para o Intersection Observer.
    <div ref={sectionRef} className="sobre-nos-container" id="sobre-nos">
      {/* Adiciona uma classe de animação condicional baseada na visibilidade */}
      <div className={`sobre-nos-content animate-on-scroll ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>Sobre Nós</h1>
        <div className="mission-vision">
          {/* Seção de missão */}
          <div className="section-card">
            <h2>Nossa Missão</h2>
            <p>
              Promover a sustentabilidade através de soluções tecnológicas inovadoras,
              conectando pessoas e ideias para um futuro mais verde e consciente.
            </p>
          </div>
          
          {/* Seção de visão */}
          <div className="section-card">
            <h2>Nossa Visão</h2>
            <p>
              Ser referência em soluções sustentáveis, inspirando mudanças positivas
              e contribuindo para um mundo mais equilibrado e responsável.
            </p>
          </div>
        </div>

        {/* Seção da equipe */}
        <div className="team-section">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            {/* Renderiza dinamicamente os membros da equipe */}
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img 
                  src={member.img} 
                  alt={`Foto de ${member.name}, ${member.role}`} // Texto alternativo para acessibilidade.
                  loading="lazy" // Carregamento preguiçoso para otimizar desempenho.
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;