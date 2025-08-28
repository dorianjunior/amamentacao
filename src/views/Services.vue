<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 data-aos="fade-down">Nossos Serviços</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Cuidado especializado e personalizado para mães, bebês e famílias em todas as fases da maternidade
        </p>
      </div>
    </section>

    <!-- Services Grid -->
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
            <router-link to="/servicos/consultoria-aleitamento" class="service-cta">Mais Informações</router-link>
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
            <router-link to="/servicos/furo-humanizado" class="service-cta">Mais Informações</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Courses Section -->
    <section class="courses-section">
      <div class="courses-container">
        <div class="section-header" data-aos="fade-up">
          <h2>Cursos Profissionais</h2>
          <p>Formação especializada para profissionais da saúde</p>
        </div>

        <div class="professional-courses">
          <div class="course-item" data-aos="fade-up" data-aos-delay="100">
            <div class="course-image">
              <img src="/src/assets/img/servicos/curso-furo-humanizado.webp" alt="Curso de Furo Humanizado">
            </div>
            <div class="course-content">
              <span class="course-name">Curso de Furo Humanizado - Presencial</span>
              <span class="course-duration">5h</span>
            </div>
            <router-link to="/contato" class="course-cta">Mais Informações</router-link>
          </div>

          <div class="course-item" data-aos="fade-up" data-aos-delay="200">
            <div class="course-image">
              <img src="/src/assets/img/servicos/curso-aleitamento-materno-presencial.webp" alt="Curso de Aleitamento Materno">
            </div>
            <div class="course-content">
              <span class="course-name">Curso de Aleitamento Materno - Presencial</span>
              <span class="course-duration">8h</span>
            </div>
            <router-link to="/contato" class="course-cta">Mais Informações</router-link>
          </div>

          <div class="course-item" data-aos="fade-up" data-aos-delay="300">
            <div class="course-image">
              <img src="/src/assets/img/servicos/curso-cuidado-bebes.webp" alt="Curso de Cuidados com Bebês">
            </div>
            <div class="course-content">
              <span class="course-name">Curso de Cuidados com Bebês - Presencial</span>
              <span class="course-duration">5h</span>
            </div>
            <router-link to="/contato" class="course-cta">Mais Informações</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Courses Section -->
    <section class="upcoming-courses-section">
      <div class="upcoming-container">
        <div class="section-header" data-aos="fade-up">
          <h2>Próximos Cursos Presenciais</h2>
          <p>Não perca a oportunidade de se capacitar com nossa equipe especializada</p>
        </div>

        <div class="courses-timeline">
          <!-- Imersão Profissão Materno Infantil -->
          <div class="course-event featured" data-aos="fade-up" data-aos-delay="100">
            <div class="event-date">
              <span class="day">29-31</span>
              <span class="month">AGO</span>
            </div>
            <div class="event-content">
              <div class="event-header">
                <h3>Imersão Profissão Materno Infantil</h3>
                <span class="event-location">Hotel Faial - Centro, Florianópolis</span>
              </div>
              <div class="event-details">
                <p class="event-time">29 de ago. de 2025, 09:00 – 31 de ago. de 2025, 20:00</p>
                <p class="event-description">03 capacitações em 02 dias presenciais</p>
              </div>
              <div class="event-actions">
                <router-link to="/contato" class="event-cta primary">Mais Informações</router-link>
              </div>
            </div>
          </div>

          <!-- Curso de Formação de Consultores -->
          <div class="course-event" data-aos="fade-up" data-aos-delay="200">
            <div class="event-date">
              <span class="day">29</span>
              <span class="month">AGO</span>
            </div>
            <div class="event-content">
              <div class="event-header">
                <h3>Curso de Formação de Consultores em Aleitamento Materno</h3>
                <span class="event-location">Hotel Faial - Centro, Florianópolis</span>
              </div>
              <div class="event-details">
                <p class="event-time">29 de ago. de 2025, 09:00 – 20:00</p>
                <p class="event-description">Para graduandos e profissionais da área da saúde</p>
              </div>
              <div class="event-actions">
                <router-link to="/contato" class="event-cta">Mais Informações</router-link>
              </div>
            </div>
          </div>

          <!-- Curso de Cuidados com Bebês -->
          <div class="course-event" data-aos="fade-up" data-aos-delay="300">
            <div class="event-date">
              <span class="day">31</span>
              <span class="month">AGO</span>
            </div>
            <div class="event-content">
              <div class="event-header">
                <h3>Curso de Cuidados com Bebês</h3>
                <span class="event-location">Hotel Faial - Centro, Florianópolis</span>
              </div>
              <div class="event-details">
                <p class="event-time">31 de ago. de 2025, 08:00 – 13:00</p>
                <p class="event-description">Curso de capacitação</p>
              </div>
              <div class="event-actions">
                <router-link to="/contato" class="event-cta">Mais Informações</router-link>
              </div>
            </div>
          </div>

          <!-- Curso de Furo Humanizado -->
          <div class="course-event" data-aos="fade-up" data-aos-delay="400">
            <div class="event-date">
              <span class="day">31</span>
              <span class="month">AGO</span>
            </div>
            <div class="event-content">
              <div class="event-header">
                <h3>Curso de Furo Humanizado - Bebê e Adulto</h3>
                <span class="event-location">Hotel Faial - Centro, Florianópolis</span>
              </div>
              <div class="event-details">
                <p class="event-time">31 de ago. de 2025, 13:00 – 20:00</p>
                <p class="event-description">Curso de capacitação</p>
              </div>
              <div class="event-actions">
                <router-link to="/contato" class="event-cta">Mais Informações</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="courses-footer" data-aos="fade-up" data-aos-delay="500">
          <p class="courses-note">
            <i class="fas fa-info-circle"></i>
            Todos os cursos são realizados com certificação e material didático incluso. Vagas limitadas!
          </p>
          <router-link to="/contato" class="courses-contact-cta">
            Entre em Contato para Mais Informações
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content" data-aos="fade-up">
          <h2>Pronta para começar?</h2>
          <p>Entre em contato e vamos construir juntas um caminho de cuidado personalizado para você e sua família</p>
          <a href="https://wa.me/5548996680096" target="_blank" class="cta-button">
            <i class="fab fa-whatsapp"></i>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-light);
  text-align: center;
  padding: 2rem;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/src/assets/img/hero.webp') center/cover;
  opacity: 0.15;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-content p {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.6;
  opacity: 0.95;
}

/* Services Section - Copied from Home.vue */
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

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 3rem;
  font-weight: 700;
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

/* Professional Courses Section */
.courses-section {
  padding: 6rem 0;
  background: white;
}

.courses-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-primary-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
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

.course-cta {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
  flex-shrink: 0;
}

.course-cta:hover {
  background: transparent;
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* Upcoming Courses Section */
.upcoming-courses-section {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.upcoming-courses-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="30" cy="40" r="1.5" fill="rgba(255,255,255,0.08)"/><circle cx="60" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="60" r="1.2" fill="rgba(255,255,255,0.06)"/></svg>');
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.upcoming-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.upcoming-courses-section .section-header {
  color: white;
}

.upcoming-courses-section .section-header h2 {
  color: white;
}

.upcoming-courses-section .section-header p {
  color: rgba(255, 255, 255, 0.9);
}

.courses-timeline {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-event {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.course-event:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.course-event.featured {
  border: 2px solid var(--color-accent);
}

.event-date {
  text-align: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  border-radius: 15px;
  padding: 1rem;
  min-width: 80px;
  flex-shrink: 0;
}

.course-event.featured .event-date {
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
}

.event-date .day {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  display: block;
}

.event-date .month {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
}

.event-content {
  flex: 1;
}

.event-header h3 {
  font-size: 1.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.event-location {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.event-details {
  margin-bottom: 1rem;
}

.event-time {
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.event-description {
  color: var(--color-text);
  font-size: 0.85rem;
  opacity: 0.8;
}

.event-actions {
  flex-shrink: 0;
}

.event-cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
}

.event-cta:hover {
  background: transparent;
  color: var(--color-primary);
  transform: translateY(-2px);
}

.event-cta.primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.event-cta.primary:hover {
  background: transparent;
  color: var(--color-accent);
}

.courses-footer {
  text-align: center;
  color: white;
}

.courses-note {
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.courses-contact-cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.courses-contact-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  background: #f8f9fa;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: var(--gradient-neutral);
  color: var(--color-text-light);
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  background: #f8f9fa;
}

.cta-button i {
  font-size: 1.3rem;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;
    padding: 1.5rem;
  }
  
  .services-section,
  .courses-section,
  .upcoming-courses-section {
    padding: 4rem 0;
  }
  
  .services-container,
  .courses-container,
  .upcoming-container {
    padding: 0 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 2rem;
  }
  
  .service-image {
    height: 180px;
  }
  
  .course-event {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .event-date {
    min-width: auto;
  }
  
  .course-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .course-content {
    flex-direction: column;
    text-align: center;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .cta-section {
    padding: 4rem 0;
  }
  
  .cta-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .services-grid,
  .professional-courses {
    gap: 1rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-image {
    height: 160px;
  }
  
  .service-card h3 {
    font-size: 1.25rem;
  }
  
  .course-image {
    width: 60px;
    height: 45px;
  }
  
  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>
