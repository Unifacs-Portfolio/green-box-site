import React, { useState, useEffect } from 'react';
import '../src/App.css';
import { 
  SlSocialInstagram, 
  SlSocialGithub, 
  SlPhone, 
  SlSupport, 
  SlArrowDown, 
  SlArrowUp 
} from "react-icons/sl";
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// Componente para renderizar os cartões de aplicativos
const AppCard = ({ title, index, onClick }) => (
  <a href={`#${title}`} onClick={onClick}>
    <img 
      className="cards" 
      src={`/img/${index + 2}.jpg`} 
      alt={`App ${title}`}
      loading="lazy" // Carregamento preguiçoso para otimizar desempenho
    />
  </a>
);

// Componente para renderizar as seções de aplicativos
const AppSection = ({ title, index, isEven, description }) => {
  // Hook para detectar quando a seção entra na viewport
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2, // Define o quanto da seção precisa estar visível
    triggerOnce: true, // Garante que a animação ocorra apenas uma vez
  });

  // Define a classe CSS com base na posição (par ou ímpar)
  const SectionComponent = isEven ? "primary-section" : "secondary-section";

  // Links de download para os aplicativos
  const downloadLinks = {
    "BistrôBox": "/Apps/Bistro-box.apk",
    "BrechóBox": "/Apps/BrechoBox.apk",
    "EngBox": "/Apps/Eng-Box.apk",
    "FarmaBox": "/Apps/Farma-Box.apk",
    "VetBox": "/apks/VetBox.apk",
  };

  return (
    <div
      ref={sectionRef} // Referência para o hook de interseção
      className={`section ${SectionComponent}`}
      id={title}
    >
      {/* Texto e botão de download */}
      <div className={`content-text animate-on-scroll ${isVisible ? (isEven ? 'fade-in-left' : 'fade-in-right') : ''}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a
          href={downloadLinks[title]} // Link dinâmico baseado no título
          download={title + ".apk"}  // Nome do arquivo para download
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar {title} App
        </a>
      </div>
      {/* Imagem da seção */}
      <div className={`content-img animate-on-scroll ${isVisible ? (isEven ? 'fade-in-right' : 'fade-in-left') : ''}`}>
        <img
          src={`/img/${index + 2}.jpg`}
          alt={`Imagem de ${title}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Componente principal do aplicativo
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Estado para controlar o cabeçalho fixo
  const [showScrollTop, setShowScrollTop] = useState(false); // Estado para exibir o botão de voltar ao topo

  // Dados das seções do aplicativo
  const sections = [
    {
      title: 'BistrôBox',
      description: 'A BistrôBox oferece dicas rápidas sobre consumo consciente e reutilização de alimentos.',
    },
    {
      title: 'BrechóBox',
      description: 'BrechóBox conecta você à moda circular com dicas práticas para renovar e reutilizar roupas em desuso.',
    },
    {
      title: 'EngBox',
      description: 'EngBox é uma plataforma de soluções sustentáveis para engenheiros.',
    },
    {
      title: 'FarmaBox',
      description: 'FarmaBox ajuda a gerenciar medicamentos e a evitar desperdícios.',
    },
    {
      title: 'VetBox',
      description: 'VetBox oferece soluções sustentáveis para cuidados animais e reaproveitamento de compostos orgânicos na agricultura.',
    },
  ];

  // Efeito para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Atualiza o estado do cabeçalho
      setShowScrollTop(window.scrollY > 300); // Exibe o botão de voltar ao topo
    };

    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll
    return () => window.removeEventListener('scroll', handleScroll); // Remove o evento ao desmontar
  }, []);

  // Função para rolar suavemente até uma seção
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para rolar até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='externa'>
      {/* Cabeçalho fixo */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="content-header">
          <div className="logo">
            <img src="/img/1.jpg" alt="Logo Green Boxing" />
          </div>
          <h4>GREEN BOXING</h4>
        </div>
        <nav className="btn-menu">
          <div className="menu">
            <a href="#apps"></a>
            <a href="#comunidade"></a>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="display">
          {/* Título principal */}
          <div className="display-title">
            <h1 id="title" className="animate-on-scroll fade-in-up">GREEN BOXING</h1>
            <p id="sub-title" className="animate-on-scroll fade-in-up" style={{ animationDelay: '0.2s' }}>
              PENSE FORA DA CAIXA, E PROMOVA UM FUTURO MAIS SUSTENTÁVEL
            </p>
            <SlArrowDown 
              size={26} 
              color="#fff" 
              className="arrow-down animate-on-scroll fade-in-up" 
              style={{ animationDelay: '0.4s' }}
            />
          </div>
          {/* Cartões de aplicativos */}
          <div className="img-apps-inline"> 
            {sections.map((section, index) => (
              <AppCard key={index} title={section.title} index={index} onClick={() => scrollToSection(section.title)} />
            ))}
          </div>

          {/* Seções de aplicativos */}
          {sections.map((section, index) => (
            <AppSection 
              key={section.title} 
              title={section.title} 
              index={index} 
              isEven={index % 2 === 0} 
              description={section.description} 
            />
          ))}
          
        </div>

        {/* Rodapé */}
        <footer className="footer">
          <div className="container-footer">
            <div className="icons">
              <p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <SlSocialInstagram size={22} color="#333" />
                </a>
                <a href="https://github.com/NairRosa/GreenBoxing" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <SlSocialGithub size={22} color="#333" />
                </a>
                <a href="tel:+123456789" aria-label="Telefone">
                  <SlPhone size={22} color="#333" />
                </a>
                <a href="mailto:support@greenboxing.com" aria-label="Suporte">
                  <SlSupport size={22} color="#333" />
                </a>
              </p>
            </div>
            <div className="content-footer">
              <h3>Explore</h3>
              <p>
                <a href="#apps">Apps</a> <br />
                <a href="#comunidade">Comunidade</a> <br />
                <a href="#eco-pontos">Eco pontos</a> <br />
                <a href="#sobre-nos" onClick={() => scrollToSection('sobre-nos')}>Sobre nós</a> <br />
              </p>
            </div>
            <div className="content-footer">
              <h3>Recursos</h3>
              <p>
                <a href="#boas-praticas">Boas práticas</a> <br />
                <a href="#biblioteca">Biblioteca de uso</a> <br />
                <a href="#suporte">Suporte</a> <br />
                <a href="#contato">Fale conosco</a> <br />
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Botão de voltar ao topo */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <SlArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;
