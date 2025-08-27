<template>
  <div class="min-h-screen">
    <!-- Seção Hero -->
    <div class="hero">
      <div class="hero-background">
        <div class="hero-content">
          <div class="hero-logo">
            <img src="/src/assets/img/logo.webp" alt="Logo Amamentação Florianópolis">
          </div>

          <h1 class="hero-title">
            Consultoria em
            <br />
            Aleitamento Materno e
            <br />
            Cuidados com Bebês
          </h1>

          <p class="hero-subtitle">
            Acolhimento, cuidado e experiência para um maternar mais leve e seguro
          </p>

          <router-link to="/contato" class="hero-cta">
            Agende uma consulta
          </router-link>

          <div class="hero-info">
            <p class="info-name">Enfª Glacy Song</p>
            <p class="info-coren">COREN-SC 655.878</p>
            <p class="info-location">Atendimentos em Florianópolis e online para todo o Brasil</p>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img src="/src/assets/img/hero.webp" alt="Enfermeira Glacy Song">
      </div>
    </div>

    <!-- Seção Destaques -->
    <section class="highlights-section">
      <div class="highlights-container">
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon"><i class="far fa-check-square"></i></div>
            <h3>Experiência Comprovada</h3>
            <p>Mais de 5 anos ajudando famílias em sua jornada de amamentação e cuidados com bebês</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon"><i class="far fa-home"></i></div>
            <h3>Atendimento Flexível</h3>
            <p>Consultas presenciais em Florianópolis e online para todo o Brasil, no conforto do seu lar</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon"><i class="far fa-heart"></i></div>
            <h3>Cuidado Humanizado</h3>
            <p>Acolhimento personalizado com foco no bem-estar físico e emocional da mãe e do bebê</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon"><i class="fab fa-whatsapp"></i></div>
            <h3>Suporte Contínuo</h3>
            <p>Acompanhamento via WhatsApp antes e depois das consultas para seu maior conforto</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Sobre -->
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-title">Enfermeira Glacy Song</h2>
            <p class="about-coren">COREN-SC 655.878</p>
            
            <div class="about-description">
              <p>Sou enfermeira graduada pela UFSC, pós-graduada em Saúde da Mulher e da Família, e atuo com amor e técnica de forma humanizada para apoiar mães, bebês e famílias.</p>
              
              <p>Desde 2018, já ajudei centenas de famílias a viverem uma maternidade mais leve e eficaz, com segurança e acolhimento.</p>
            </div>

            <div class="services-list">
              <h3>Como posso te ajudar?</h3>
              <ul>
                <li>Consultoria em Amamentação</li>
                <li>Oficina de Cuidados com Bebês</li>
                <li>Furo de Orelha Humanizado</li>
                <li>Laserterapia</li>
                <li>Atendimento Home Care para puérperas e recém-nascidos</li>
                <li>Cursos para profissionais</li>
              </ul>
            </div>

            <div class="about-highlights">
              <p>Todos os atendimentos são humanizados, com foco no bem-estar físico e emocional da mãe e do bebê.</p>
              
              <p>Atendimentos em Florianópolis presencial e no mundo por videoconferência.</p>
              
              <p>Atendimento via WhatsApp, com suporte antes e depois.</p>
            </div>

            <router-link to="/sobremim" class="about-cta">
              Quero saber mais sobre a Enfª Glacy Song
            </router-link>
          </div>
          
          <div class="about-image">
            <img src="/src/assets/img/glacy-sobre.webp" alt="Enfermeira Glacy Song">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
      var(--color-primary-transparent) 100%
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

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-logo,
.hero-title,
.hero-subtitle,
.hero-cta,
.hero-info {
  animation: fadeInUp 0.8s ease backwards;
}

.hero-logo { animation-delay: 0.2s; }
.hero-title { animation-delay: 0.4s; }
.hero-subtitle { animation-delay: 0.6s; }
.hero-cta { animation-delay: 0.8s; }
.hero-info { animation-delay: 1s; }

.bg-primary-transparent {
  background-color: var(--color-primary-transparent);
}

/* Estilos da Seção Destaques */
.highlights-section {
  background: var(--gradient-neutral);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
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
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  animation: fadeInUp 0.8s ease backwards;
}

.highlight-card:nth-child(1) { animation-delay: 0.1s; }
.highlight-card:nth-child(2) { animation-delay: 0.2s; }
.highlight-card:nth-child(3) { animation-delay: 0.3s; }
.highlight-card:nth-child(4) { animation-delay: 0.4s; }

.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  /* color: var(--color-primary-dark); */
  color: #F39C12;
  font-size: 2.5rem;
  margin-bottom: 1rem;
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