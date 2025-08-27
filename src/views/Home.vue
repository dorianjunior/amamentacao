<template>
  <div class="min-h-screen">
    <!-- Seção Hero -->
    <div class="hero">
      <div class="hero-background">
        <div class="hero-content">
          <div class="hero-logo" data-aos="fade-down" data-aos-delay="100">
            <img src="/src/assets/img/logo.webp" alt="Logo Amamentação Florianópolis">
          </div>

          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
            <span class="typing-text"></span>
          </h1>

          <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Acolhimento, cuidado e experiência para um maternar mais leve e seguro
          </p>

          <router-link to="/contato" class="hero-cta" data-aos="zoom-in" data-aos-delay="600">
            Agende uma consulta
          </router-link>

          <div class="hero-info" data-aos="fade-up" data-aos-delay="800">
            <p class="info-name">Enfª Glacy Song</p>
            <p class="info-coren">COREN-SC 655.878</p>
            <p class="info-location">Atendimentos em Florianópolis e online para todo o Brasil</p>
          </div>
        </div>
      </div>

      <div class="hero-image" data-aos="fade-left" data-aos-delay="300">
        <img src="/src/assets/img/hero.webp" alt="Enfermeira Glacy Song">
      </div>
    </div>

    <!-- Seção Destaques -->
    <section class="highlights-section">
      <div class="highlights-container">
        <h2 class="section-title" data-aos="fade-up">Por que escolher nossos serviços?</h2>
        <div class="highlights-grid">
          <div class="highlight-card" data-aos="flip-up" data-aos-delay="100">
            <div class="highlight-icon animate__animated animate__pulse animate__infinite animate__slow"><i class="far fa-check-square"></i></div>
            <h3>Experiência Comprovada</h3>
            <p>Mais de <span class="count-up" data-count="5">0</span> anos ajudando famílias em sua jornada de amamentação e cuidados com bebês</p>
          </div>

          <div class="highlight-card" data-aos="flip-up" data-aos-delay="200">
            <div class="highlight-icon animate__animated animate__pulse animate__infinite animate__slow"><i class="far fa-home"></i></div>
            <h3>Atendimento Flexível</h3>
            <p>Consultas presenciais em Florianópolis e online para todo o Brasil, no conforto do seu lar</p>
          </div>

          <div class="highlight-card" data-aos="flip-up" data-aos-delay="300">
            <div class="highlight-icon animate__animated animate__pulse animate__infinite animate__slow"><i class="far fa-heart"></i></div>
            <h3>Cuidado Humanizado</h3>
            <p>Acolhimento personalizado com foco no bem-estar físico e emocional da mãe e do bebê</p>
          </div>

          <div class="highlight-card" data-aos="flip-up" data-aos-delay="400">
            <div class="highlight-icon animate__animated animate__pulse animate__infinite animate__slow"><i class="fab fa-whatsapp"></i></div>
            <h3>Suporte Contínuo</h3>
            <p>Acompanhamento via WhatsApp antes e depois das consultas para seu maior conforto</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Serviços -->
    <section class="services-section">
      <div class="services-container">
        <div class="services-header" data-aos="fade-up">
          <h2 class="section-title">Serviços Prestados</h2>
          <p class="services-subtitle">Cuidado especializado para cada momento da sua jornada materna</p>
        </div>

        <div class="services-grid">
          <!-- Consultoria em Aleitamento Materno -->
          <div class="service-card featured" data-aos="fade-up" data-aos-delay="100">
            <div class="service-image">
              <img src="/src/assets/img/servicos/consultoria-aleitamento-materno.webp" alt="Consultoria em Aleitamento Materno">
            </div>
            <h3>Consultoria em Aleitamento Materno</h3>
            <p class="service-type">Individual ou Plano</p>
            <p class="service-duration">1h 30min</p>
            <p class="service-description">Suporte especializado para uma amamentação bem-sucedida e tranquila</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>

          <!-- Home Care Materno Infantil -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="service-image">
              <img src="/src/assets/img/servicos/home-care-materno-infantil.webp" alt="Home Care Materno Infantil">
            </div>
            <h3>Home Care Materno Infantil</h3>
            <p class="service-type">Para mamães e bebês</p>
            <p class="service-duration">4h ou 8h</p>
            <p class="service-description">Cuidado especializado no conforto do seu lar</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>

          <!-- Curso para Gestantes/Casais -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="300">
            <div class="service-image">
              <img src="/src/assets/img/servicos/curso-gestantes-casais.webp" alt="Curso para Gestantes/Casais">
            </div>
            <h3>Curso para Gestantes/Casais</h3>
            <p class="service-type">Preparação completa</p>
            <p class="service-duration">3h</p>
            <p class="service-description">Preparação para receber seu bebê com segurança</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>

          <!-- Pacote Premium -->
          <div class="service-card premium" data-aos="fade-up" data-aos-delay="400">
            <div class="service-image">
              <img src="/src/assets/img/servicos/pacote-premium.webp" alt="Pacote Premium">
            </div>
            <h3>Pacote Premium</h3>
            <p class="service-type">Pacote completo em 3 etapas</p>
            <p class="service-duration">6h</p>
            <p class="service-description">Acompanhamento completo e personalizado</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>

          <!-- Laserterapia -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="500">
            <div class="service-image">
              <img src="/src/assets/img/servicos/laserterapia.webp" alt="Laserterapia">
            </div>
            <h3>Laserterapia</h3>
            <p class="service-type">Para mamães e bebês</p>
            <p class="service-duration">30min</p>
            <p class="service-description">Tratamento especializado com tecnologia avançada</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>

          <!-- Furo de Orelha Humanizado -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="600">
            <div class="service-image">
              <img src="/src/assets/img/servicos/furo-humanizado.webp" alt="Furo de Orelha Humanizado">
            </div>
            <h3>Furo de Orelha Humanizado</h3>
            <p class="service-type">Bebê e Adulto</p>
            <p class="service-duration">1h</p>
            <p class="service-description">Procedimento seguro e humanizado para todas as idades</p>
            <router-link to="/contato" class="service-cta">Mais Informações</router-link>
          </div>
        </div>

        <div class="services-more" data-aos="fade-up" data-aos-delay="700">
          <h3>Cursos Profissionais</h3>
          <div class="professional-courses">
            <div class="course-item">
              <div class="course-image">
                <img src="/src/assets/img/servicos/curso-furo-humanizado.webp" alt="Curso de Furo Humanizado">
              </div>
              <div class="course-content">
                <span class="course-name">Curso de Furo Humanizado - Presencial</span>
                <span class="course-duration">5h</span>
              </div>
            </div>
            <div class="course-item">
              <div class="course-image">
                <img src="/src/assets/img/servicos/curso-aleitamento-materno-presencial.webp" alt="Curso de Aleitamento Materno">
              </div>
              <div class="course-content">
                <span class="course-name">Curso de Aleitamento Materno - Presencial</span>
                <span class="course-duration">8h</span>
              </div>
            </div>
            <div class="course-item">
              <div class="course-image">
                <img src="/src/assets/img/servicos/curso-cuidado-bebes.webp" alt="Curso de Cuidados com Bebês">
              </div>
              <div class="course-content">
                <span class="course-name">Curso de Cuidados com Bebês - Presencial</span>
                <span class="course-duration">5h</span>
              </div>
            </div>
          </div>
          <router-link to="/servicos" class="services-all-cta">Ver Todos os Serviços</router-link>
        </div>
      </div>
    </section>

    <!-- Seção Sobre -->
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text" data-aos="fade-right">
            <h2 class="about-title">Enfermeira Glacy Song</h2>
            <p class="about-coren">COREN-SC 655.878</p>
            
            <div class="about-description" data-aos="fade-up" data-aos-delay="200">
              <p>Sou enfermeira graduada pela UFSC, pós-graduada em Saúde da Mulher e da Família, e atuo com amor e técnica de forma humanizada para apoiar mães, bebês e famílias.</p>
              
              <p>Desde 2018, já ajudei <span class="count-up" data-count="500">0</span>+ famílias a viverem uma maternidade mais leve e eficaz, com segurança e acolhimento.</p>
            </div>

            <div class="services-list" data-aos="fade-up" data-aos-delay="400">
              <h3>Como posso te ajudar?</h3>
              <ul>
                <li data-aos="fade-left" data-aos-delay="500">Consultoria em Amamentação</li>
                <li data-aos="fade-left" data-aos-delay="600">Oficina de Cuidados com Bebês</li>
                <li data-aos="fade-left" data-aos-delay="700">Furo de Orelha Humanizado</li>
                <li data-aos="fade-left" data-aos-delay="800">Laserterapia</li>
                <li data-aos="fade-left" data-aos-delay="900">Atendimento Home Care para puérperas e recém-nascidos</li>
                <li data-aos="fade-left" data-aos-delay="1000">Cursos para profissionais</li>
              </ul>
            </div>

            <div class="about-highlights" data-aos="fade-up" data-aos-delay="600">
              <p>Todos os atendimentos são humanizados, com foco no bem-estar físico e emocional da mãe e do bebê.</p>
              
              <p>Atendimentos em Florianópolis presencial e no mundo por videoconferência.</p>
              
              <p>Atendimento via WhatsApp, com suporte antes e depois.</p>
            </div>

            <router-link to="/sobremim" class="about-cta animate__animated animate__heartBeat animate__infinite animate__slower" data-aos="zoom-in" data-aos-delay="800">
              Quero saber mais sobre a Enfª Glacy Song
            </router-link>
          </div>
          
          <div class="about-image" data-aos="fade-left" data-aos-delay="300">
            <img src="/src/assets/img/glacy-sobre.webp" alt="Enfermeira Glacy Song">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Typed from 'typed.js'
import { CountUp } from 'countup.js'

export default {
  name: 'Home',
  mounted() {
    const typed = new Typed('.typing-text', {
      strings: [
        'Consultoria em Aleitamento Materno',
        'Furo de Orelha Humanizado',
        'Home Care Materno Infantil'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })

    const countElements = document.querySelectorAll('.count-up')
    countElements.forEach(element => {
      const targetValue = parseInt(element.getAttribute('data-count'))
      const countUp = new CountUp(element, targetValue, {
        duration: 2,
        useEasing: true,
        useGrouping: true,
        separator: '.',
        decimal: ',',
      })
      
      // Observar quando o elemento entra na viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp.start()
            observer.unobserve(entry.target)
          }
        })
      })
      
      observer.observe(element)
    })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
}

.hero-image {
  position: relative;
  grid-column: 2;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.hero-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    transparent 50%,
    var(--color-overlay) 100%
  );
  z-index: 1;
}

.hero-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  grid-column: 1;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 40rem;
  padding: 4rem;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

/* Desktop Styles */
@media (min-width: 1400px) {
  .hero-content {
    max-width: 45rem;
    margin-left: 5%;
  }
}

/* Mobile Styles */
@media (max-width: 1200px) {
  .hero-content {
    margin-left: 2%;
    max-width: 36rem;
  }
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: calc(100vh - 60px);
  }

  .hero-image {
    grid-column: 1;
    grid-row: 1;
    height: 100%;
    opacity: 0.15;
  }

  .hero-image::before {
    background: linear-gradient(
      to bottom,
      var(--color-primary) 0%,
      var(--color-primary-transparent) 0%
    );
  }

  .hero-content {
    grid-column: 1;
    grid-row: 1;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    text-align: center;
    align-items: center;
  }
}

.hero-logo {
  margin-bottom: 3rem;
  position: relative;
}

.hero-logo img {
  height: 5rem;
  width: auto;
  filter: brightness(1.1) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.hero-logo img:hover {
  transform: scale(1.05);
  filter: brightness(1.2) drop-shadow(0 6px 8px rgba(0, 0, 0, 0.15));
}

.hero-logo::after {
  content: '';
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  width: 3rem;
  height: 2px;
  background: var(--color-accent);
  opacity: 0.7;
}

.hero-title {
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-light);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-title br {
  display: block;
  content: "";
  margin: 0.2em 0;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  line-height: 1.6;
  color: var(--color-light);
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 36rem;
  opacity: 0.95;
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid var(--color-accent);
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background: var(--color-light);
  color: var(--color-primary-dark);
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid transparent;
}

.hero-cta:hover {
  background: transparent;
  color: var(--color-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-color: var(--color-light);
}

.hero-info {
  margin-top: 3.5rem;
  color: var(--color-light);
  text-align: left;
  width: 100%;
  border-left: 3px solid var(--color-accent);
  padding-left: 1.5rem;
}

.info-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-light);
}

.info-coren {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  opacity: 0.9;
  color: var(--color-accent);
}

.info-location {
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.85;
  color: var(--color-light);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-logo img {
    height: 6rem;
  }

  .hero-title {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  .hero-cta {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .hero-info {
    margin-top: 2.5rem;
    text-align: center;
  }

  .info-name {
    font-size: 1.125rem;
  }

  .info-coren,
  .info-location {
    font-size: 0.9375rem;
  }
}

/* Animações CSS removidas - usando apenas AOS e Animate.css para melhor performance */

.bg-primary-transparent {
  background-color: var(--color-primary-transparent);
}

/* Estilos da Seção Destaques */
.highlights-section {
  background: #fff;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 3rem;
  font-weight: 700;
}

.highlights-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.highlight-card {
  background: white;
  padding: 2rem;
  border: 1px solid rgba(161, 123, 165, 0.1);
  border-radius: 20px;
  text-align: center;
  transition: all 0.15s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  /* color: var(--color-primary-dark); */
  color: #F39C12;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.15s ease;
}

.highlight-card:hover .highlight-icon {
  transform: scale(1.2);
}

.count-up {
  font-weight: bold;
  color: var(--color-primary);
  font-size: 1.2em;
}

.highlight-card h3 {
  color: var(--color-primary-dark);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.highlight-card p {
  color: var(--color-dark);
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .highlights-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 2rem auto 0;
  }

  .highlights-section {
    padding: 3rem 0;
  }

  .highlight-card {
    padding: 1.5rem;
  }
}

.services-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 6rem 0;
  position: relative;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-header {
  text-align: center;
  margin-bottom: 4rem;
}

.services-subtitle {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-top: 1rem;
  opacity: 0.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(161, 123, 165, 0.1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-card.featured {
  border: 2px solid var(--color-primary);
  background: linear-gradient(135deg, #fff 0%, #f8f9ff 100%);
}

.service-card.premium {
  border: 2px solid var(--color-accent);
  background: linear-gradient(135deg, #fff 0%, #fff8f0 100%);
}

.service-card.premium .service-image img {
  border: 2px solid var(--color-accent);
}

.service-image {
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  border-radius: 15px;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-card:hover .service-image {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.service-type {
  font-size: 1rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.service-duration {
  font-size: 1.125rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(243, 156, 18, 0.1);
  border-radius: 50px;
  display: inline-block;
}

.service-description {
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.service-cta {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
}

.service-cta:hover {
  background: transparent;
  color: var(--color-primary);
  transform: translateY(-2px);
}

.service-card.premium .service-cta {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.service-card.premium .service-cta:hover {
  background: transparent;
  color: var(--color-accent);
}

.services-more {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(161, 123, 165, 0.1);
}

.services-more h3 {
  font-size: 1.75rem;
  color: var(--color-primary-dark);
  margin-bottom: 2rem;
  font-weight: 600;
}

.professional-courses {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.course-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  border-left: 4px solid var(--color-primary);
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.course-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.course-image {
  width: 80px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 1rem;
}

.course-name {
  font-weight: 500;
  color: var(--color-primary-dark);
  flex: 1;
}

.course-duration {
  font-weight: 600;
  color: var(--color-accent);
  background: rgba(243, 156, 18, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.services-all-cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--color-primary-dark);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary-dark);
}

.services-all-cta:hover {
  background: transparent;
  color: var(--color-primary-dark);
  transform: translateY(-2px);
}

/* Responsividade para Serviços */
@media (max-width: 768px) {
  .services-section {
    padding: 4rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .service-card {
    padding: 2rem;
  }

  .service-image {
    height: 180px;
  }

  .services-more {
    padding: 2rem;
  }

  .course-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .course-image {
    width: 100px;
    height: 75px;
  }

  .course-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .course-name {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .services-container {
    padding: 0 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-image {
    height: 160px;
    margin-bottom: 1rem;
  }

  .service-card h3 {
    font-size: 1.25rem;
  }

  .services-more {
    padding: 1.5rem;
  }

  .services-more h3 {
    font-size: 1.5rem;
  }
}

/* Estilos da Seção Sobre */
.about-section {
  background: var(--color-light);
  padding: 6rem 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  max-width: 600px;
}

.about-title {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.about-coren {
  font-size: 1.125rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 500;
}

.about-description p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.services-list {
  margin: 2.5rem 0;
}

.services-list h3 {
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.services-list ul {
  list-style: none;
  padding: 0;
}

.services-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: var(--color-text);
}

.services-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 1.5rem;
  line-height: 1;
}

.about-highlights {
  margin: 2.5rem 0;
}

.about-highlights p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 3px solid var(--color-accent);
}

.about-cta {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--color-primary);
  color: var(--color-light);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;
}

.about-cta:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Estilos responsivos para a seção Sobre */
@media (max-width: 1024px) {
  .about-section {
    padding: 4rem 0;
  }

  .about-content {
    gap: 3rem;
  }

  .about-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-text {
    order: 2;
  }

  .about-image {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }

  .about-title {
    text-align: center;
  }

  .about-coren {
    text-align: center;
  }

  .about-description {
    text-align: center;
  }

  .services-list h3 {
    text-align: center;
  }

  .about-highlights {
    text-align: center;
  }

  .about-cta {
    display: block;
    text-align: center;
    margin: 2rem auto 0;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 3rem 0;
  }

  .about-container {
    padding: 0 1.5rem;
  }

  .about-title {
    font-size: 1.75rem;
  }

  .about-description p,
  .services-list li,
  .about-highlights p {
    font-size: 1rem;
  }
}
</style>