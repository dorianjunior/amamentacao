<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-waves">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="m-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(161,123,165,0.7)" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(150,125,153,0.5)" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(125,101,127,0.3)" />
            <use href="#gentle-wave" x="48" y="7" fill="rgba(161,123,165,0.1)" />
          </g>
        </svg>
      </div>

      <div class="hero-background">
        <div class="floating-elements">
          <div class="floating-circle circle-1"></div>
          <div class="floating-circle circle-2"></div>
          <div class="floating-circle circle-3"></div>
          <div class="floating-heart heart-1">💜</div>
          <div class="floating-heart heart-2">🤱</div>
          <div class="floating-heart heart-3">👶</div>
        </div>
        
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-badge" data-aos="fade-down">
              <span class="badge-text">Enfª Glacy Song</span>
              <span class="badge-coren">COREN-SC 655.878</span>
            </div>
            
            <h1 class="page-title" data-aos="fade-up" data-aos-delay="200">
              <span class="title-highlight">Minha</span>
              <span class="title-main">História</span>
            </h1>
            
            <p class="page-subtitle" data-aos="fade-up" data-aos-delay="400">
              Uma jornada de dedicação, amor e cuidado pela maternidade
            </p>
            
            <div class="hero-stats" data-aos="fade-up" data-aos-delay="600">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Famílias Atendidas</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">7+</span>
                <span class="stat-label">Anos de Experiência</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">100%</span>
                <span class="stat-label">Dedicação</span>
              </div>
            </div>

            <div class="hero-actions" data-aos="fade-up" data-aos-delay="800">
              <a href="#story" class="scroll-btn">
                <span>Conhecer minha história</span>
                <i class="fas fa-arrow-down"></i>
              </a>
            </div>
          </div>
          
          <div class="hero-image" data-aos="fade-left" data-aos-delay="400">
            <div class="image-container">
              <div class="image-frame">
                <img src="/src/assets/img/glacy-sobre-quad.webp" alt="Enfª Glacy Song" class="hero-photo">
                <div class="image-overlay"></div>
              </div>
              <div class="image-decorations">
                <div class="decoration-1"></div>
                <div class="decoration-2"></div>
                <div class="decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section id="story" class="about-content">
      <div class="content-container">
        <div class="content-grid">
          <!-- Foto da Glacy -->
          <div class="photo-section" data-aos="fade-right">
            <div class="photo-container">
              <img src="/src/assets/img/glacy-sobre-quad.webp" alt="Enfª Glacy Song" class="profile-photo">
              <div class="photo-decoration"></div>
            </div>
            
            <!-- Card de informações -->
            <div class="info-card">
              <h3 class="info-title">Enfª Glacy Song</h3>
              <p class="info-coren">COREN-SC 655.878</p>
              <div class="info-badges">
                <span class="badge">Graduada UFSC</span>
                <span class="badge">Pós-graduada</span>
                <span class="badge">Especialista</span>
              </div>
            </div>
          </div>

          <!-- História -->
          <div class="story-section" data-aos="fade-left" data-aos-delay="200">
            <div class="story-content">
              <h2 class="section-title">MINHA HISTÓRIA</h2>
              
              <div class="story-text">
                <p>
                  Desde criança, sempre me encantei com as mulheres grávidas e os bebezinhos. Em 2015 entrei na Graduação de Enfermagem na Universidade Federal de Santa Catarina. Em 2018, durante a faculdade, comecei a trabalhar como Consultora em Aleitamento Materno, onde ajudei muitas famílias a ter sucesso na amamentação.
                </p>

                <p>
                  Me formei em 2020 como enfermeira e em 2021, acabei suspendendo os atendimentos devido à pandemia e comecei a trabalhar na campanha de vacinação contra a COVID-19. Continuei no ramo da vacinação até maio de 2023, onde pedi demissão e voltei à trabalhar na área Materno Infantil.
                </p>

                <p>
                  Em 2023 terminei a pós-graduação em Saúde da Mulher e em Saúde da Família e diversos cursos relacionados a área de saúde materno infantil.
                </p>

                <div class="highlight-box">
                  <p>
                    Meu objetivo é oferecer um cuidado técnico, humanizado e acolhedor, por meio de serviços personalizados que fortalecem a sua confiança e proporcionam apoio real em cada etapa da maternidade como um todo.
                  </p>
                </div>

                <p>
                  Se você deseja um acompanhamento sensível, seguro e baseado em evidências, será um prazer caminhar com você nessa jornada. Estou à disposição para te ouvir e acolher.
                </p>

                <div class="signature">
                  <p class="signature-text">Com carinho,</p>
                  <p class="signature-name">Enfª Glacy Song</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Formação e Experiência -->
    <section class="qualifications-section">
      <div class="qualifications-container">
        <div class="qualifications-grid">
          <!-- Formação -->
          <div class="qualification-card" data-aos="fade-up">
            <div class="card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="card-title">Formação Acadêmica</h3>
            <ul class="qualification-list">
              <li>
                <strong>Graduação em Enfermagem</strong>
                <span>Universidade Federal de Santa Catarina (UFSC) - 2020</span>
              </li>
              <li>
                <strong>Pós-graduação em Saúde da Mulher</strong>
                <span>2023</span>
              </li>
              <li>
                <strong>Pós-graduação em Saúde da Família</strong>
                <span>2023</span>
              </li>
            </ul>
          </div>

          <!-- Experiência -->
          <div class="qualification-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="card-title">Experiência Profissional</h3>
            <ul class="qualification-list">
              <li>
                <strong>Consultora em Aleitamento Materno</strong>
                <span>2018 - presente</span>
              </li>
              <li>
                <strong>Campanha de Vacinação COVID-19</strong>
                <span>2021 - 2023</span>
              </li>
              <li>
                <strong>Área Materno Infantil</strong>
                <span>2023 - presente</span>
              </li>
            </ul>
          </div>

          <!-- Especialidades -->
          <div class="qualification-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-icon">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="card-title">Especialidades</h3>
            <ul class="qualification-list">
              <li>
                <strong>Consultoria em Aleitamento Materno</strong>
              </li>
              <li>
                <strong>Furo de Orelha Humanizado</strong>
              </li>
              <li>
                <strong>Home Care Materno Infantil</strong>
              </li>
              <li>
                <strong>Cursos e Workshops</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="about-cta">
      <div class="cta-container">
        <div class="cta-content" data-aos="fade-up">
          <h2 class="cta-title">Vamos conversar?</h2>
          <p class="cta-description">
            Estou aqui para te acompanhar nessa jornada única da maternidade
          </p>
          <div class="cta-buttons">
            <a href="https://wa.me/5548996680096" target="_blank" class="cta-btn primary">
              <i class="fab fa-whatsapp"></i>
              Agendar Consulta
            </a>
            <router-link to="/contato" class="cta-btn secondary">
              <i class="fas fa-envelope"></i>
              Entrar em Contato
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    // Inicializar AOS se disponível
    if (typeof AOS !== 'undefined') {
      AOS.refresh()
    }
  }
}
</script>

<style scoped>
/* === PÁGINA SOBRE === */
.about-page {
  min-height: 100vh;
  background: var(--color-background);
  overflow-x: hidden; /* Evita scroll horizontal */
  width: 100%;
}

/* Hero Section */
.about-hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Contém os elementos flutuantes */
}

.hero-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 1;
}

.waves {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: -7px;
  overflow: hidden; /* Evita que as ondas causem overflow */
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-50px,0,0);
  }
  100% { 
    transform: translate3d(50px,0,0);
  }
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 30%,
    var(--color-secondary) 70%,
    var(--color-primary-light) 100%
  );
}

.hero-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 50% 90%, rgba(255, 255, 255, 0.05) 0%, transparent 30%);
}

.floating-elements {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 5%;
  animation-delay: 0s;
}

.circle-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 5%;
  animation-delay: 2s;
}

.circle-3 {
  width: 60px;
  height: 60px;
  top: 80%;
  left: 15%;
  animation-delay: 4s;
}

.floating-heart {
  position: absolute;
  font-size: 2rem;
  animation: float 8s ease-in-out infinite;
  opacity: 0.7;
}

.heart-1 {
  top: 15%;
  right: 10%;
  animation-delay: 1s;
}

.heart-2 {
  top: 70%;
  left: 10%;
  animation-delay: 3s;
}

.heart-3 {
  top: 40%;
  right: 5%;
  animation-delay: 5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(-10px) rotate(240deg);
  }
}

.hero-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-content {
  text-align: left;
  color: white;
}

.hero-badge {
  display: inline-flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 2rem 0 2rem;
}

.badge-text {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.badge-coren {
  font-size: 0.9rem;
  opacity: 0.8;
}

.page-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.title-highlight {
  display: block;
  background: linear-gradient(45deg, #ffffff, #f8f9fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 400;
}

.title-main {
  display: block;
  font-weight: 800;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 300;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 400;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.scroll-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.scroll-btn i {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-frame:hover .hero-photo {
  transform: scale(1.05);
}

.image-frame:hover .image-overlay {
  opacity: 1;
}

.image-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.decoration-1 {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.decoration-2 {
  position: absolute;
  bottom: -15px;
  left: -15px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite 1s;
}

.decoration-3 {
  position: absolute;
  top: 50%;
  left: -30px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite 2s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

/* Main Content */
.about-content {
  padding: 4rem 0;
  position: relative;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

/* Photo Section */
.photo-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 2rem;
}

.photo-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-photo {
  width: 300px;
  height: 300px;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.profile-photo:hover {
  transform: scale(1.02);
}

.photo-decoration {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 50%;
  opacity: 0.1;
  z-index: -1;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
}

.info-coren {
  color: var(--color-text-light);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.info-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.badge {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Story Section */
.story-section {
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.story-text p {
  margin-bottom: 1.5rem;
}

.highlight-box {
  background: linear-gradient(135deg, var(--color-primary)10, var(--color-secondary)10);
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid var(--color-primary);
  margin: 2rem 0;
}

.highlight-box p {
  margin: 0;
  font-weight: 500;
  color: var(--color-primary-dark);
}

.signature {
  margin-top: 3rem;
  text-align: right;
}

.signature-text {
  font-style: italic;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.signature-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin: 0;
}

/* Qualifications Section */
.qualifications-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-light) 100%);
}

.qualifications-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.qualification-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.qualification-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon i {
  font-size: 1.5rem;
  color: white;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
}

.qualification-list {
  list-style: none;
  padding: 0;
}

.qualification-list li {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-background);
}

.qualification-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.qualification-list strong {
  display: block;
  color: var(--color-primary-dark);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.qualification-list span {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

/* CTA Section */
.about-cta {
  padding: 6rem 0;
  background: var(--gradient-neutral);
  color: var(--color-primary-dark);
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 200px;
  justify-content: center;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.cta-btn.secondary {
  background: var(--color-light);
  color: var(--color-text);
  border: 2px solid var(--color-primary);
  backdrop-filter: blur(10px);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .image-container {
    width: 300px;
    height: 300px;
  }
  
  .page-title {
    font-size: 3rem;
  }
  
  .hero-stats {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .photo-section {
    position: static;
    align-items: center;
  }
  
  .story-section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .about-hero {
    height: 100vh;
    min-height: 600px;
  }
  
  .hero-container {
    padding: 0 1.5rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .page-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .stat-divider {
    width: 60%;
    height: 1px;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
  
  .floating-circle {
    display: none; /* Ocultar em mobile para melhor performance */
  }
  
  .floating-heart {
    font-size: 1.5rem;
  }
  
  .content-container,
  .qualifications-container,
  .cta-container {
    padding: 0 1.5rem;
  }
  
  .about-content,
  .qualifications-section,
  .about-cta {
    padding: 3rem 0;
  }
  
  .profile-photo {
    width: 250px;
    height: 250px;
  }
  
  .story-section {
    padding: 1.5rem;
  }
  
  .qualification-card {
    padding: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .about-hero {
    height: 90vh;
    min-height: 500px;
  }
  
  .hero-container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: 2.2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .hero-badge {
    padding: 0.75rem 1.5rem;
  }
  
  .badge-text {
    font-size: 1rem;
  }
  
  .badge-coren {
    font-size: 0.8rem;
  }
  
  .hero-stats {
    padding: 0.75rem 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
  
  .scroll-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .image-container {
    width: 200px;
    height: 200px;
  }
  
  .waves {
    height: 150px;
  }
  
  .hero-waves {
    height: 150px;
  }
  
  .profile-photo {
    width: 200px;
    height: 200px;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .story-section {
    padding: 1.25rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .story-text {
    font-size: 1rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
}
</style>
