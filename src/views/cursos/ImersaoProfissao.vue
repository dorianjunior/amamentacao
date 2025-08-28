<template>
  <div class="imersao-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="/src/assets/img/servicos/curso-gestantes-casais-materiais.webp" alt="Imersão Profissão Materno Infantil">
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge" data-aos="fade-down">
          <i class="fas fa-graduation-cap"></i>
          <span>Curso Profissional</span>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="200">Imersão Profissão Materno Infantil</h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">29 de agosto - 31 de agosto de 2025</p>
        <div class="hero-details" data-aos="fade-up" data-aos-delay="400">
          <div class="detail-item">
            <i class="fas fa-calendar"></i>
            <span>3 dias intensivos</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-clock"></i>
            <span>09:00 - 20:00</span>
          </div>
        </div>
        <a href="https://wa.me/5548996680096?text=Olá! Gostaria de me inscrever na Imersão Profissão Materno Infantil" 
           target="_blank" 
           class="hero-cta" 
           data-aos="zoom-in" 
           data-aos-delay="500">
          <i class="fab fa-whatsapp"></i>
          Inscrever-se
        </a>
      </div>
    </section>

    <!-- Course Description -->
    <section class="description-section">
      <div class="description-container">
        <div class="description-content" data-aos="fade-up">
          <h2>Sobre a Imersão</h2>
          <div class="description-text">
            <p><strong>Uma jornada completa de 3 dias</strong> para profissionais que desejam se especializar na área materno-infantil.</p>
            
            <p>A Imersão Profissão Materno Infantil é um programa intensivo que abrange os principais aspectos do cuidado especializado com mães e bebês, desde o pré-natal até o pós-parto.</p>
            
            <p>Com conteúdo teórico e prático, você sairá preparado(a) para atuar com excelência no mercado materno-infantil.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Info -->
    <section class="info-section">
      <div class="info-container">
        <div class="info-content" data-aos="fade-up">
          <h2><i class="fas fa-info-circle"></i> Informações do Curso</h2>
          <div class="info-grid">
            <div class="info-item" data-aos="fade-up" data-aos-delay="100">
              <div class="info-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <h3>Data e Horário</h3>
              <p>29 de agosto - 31 de agosto de 2025<br>09:00 às 20:00</p>
            </div>
            
            <div class="info-item" data-aos="fade-up" data-aos-delay="200">
              <div class="info-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3>Público-Alvo</h3>
              <p>Profissionais da saúde e estudantes interessados na área materno-infantil</p>
            </div>
            
            <div class="info-item" data-aos="fade-up" data-aos-delay="300">
              <div class="info-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <h3>Certificação</h3>
              <p>Certificado de conclusão para participantes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-content">
          <div class="contact-info" data-aos="fade-right">
            <h2><i class="fas fa-phone"></i> Informações e Inscrições</h2>
            <p class="contact-description">
              Entre em contato para mais informações sobre a Imersão Profissão Materno Infantil.
            </p>
            
            <div class="contact-methods">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-details">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/5548996680096" target="_blank" class="contact-link">
                    (48) 99668-0096
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h3>E-mail</h3>
                  <a href="mailto:glacy.consultoria.am@gmail.com" class="contact-link">
                    glacy.consultoria.am@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-cta" data-aos="fade-left">
            <div class="cta-card">
              <h3>Pronto para se especializar?</h3>
              <p>Garante sua vaga na Imersão Profissão Materno Infantil</p>
              <a href="https://wa.me/5548996680096?text=Olá! Gostaria de me inscrever na Imersão Profissão Materno Infantil" 
                 target="_blank" 
                 class="whatsapp-cta">
                <i class="fab fa-whatsapp"></i>
                Inscrever-se pelo WhatsApp
              </a>
              <router-link to="/servicos" class="back-link">
                <i class="fas fa-arrow-left"></i>
                Voltar aos Serviços
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ImersaoProfissao'
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-transparent);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 500;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.detail-item i {
  font-size: 1.1rem;
  color: white;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.25);
  background: #f8f9fa;
}

.hero-cta i {
  font-size: 1.3rem;
}

/* Description Section */
.description-section {
  padding: 6rem 0;
  background: white;
}

.description-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.description-content h2 {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.description-text p {
  margin-bottom: 1.5rem;
}

.description-text strong {
  color: var(--color-primary);
  font-weight: 600;
}

/* Info Section */
.info-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.info-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.info-content h2 {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.info-content h2 i {
  color: var(--color-primary-light);
  font-size: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-item {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(161, 123, 165, 0.1);
}

.info-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.info-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.info-item h3 {
  font-size: 1.25rem;
  color: var(--color-primary-dark);
  margin-bottom: 1rem;
  font-weight: 600;
}

.info-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0;
}

/* Contact Section */
.contact-section {
  padding: 6rem 0;
  background: white;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2 {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-info h2 i {
  color: var(--color-primary-light);
  font-size: 2rem;
}

.contact-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-details h3 {
  font-size: 1.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.contact-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: var(--color-primary-light);
  text-decoration: underline;
}

.contact-cta {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  color: white;
  padding: 3rem;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
}

.cta-card h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.whatsapp-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.whatsapp-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  background: #f8f9fa;
}

.whatsapp-cta i {
  font-size: 1.2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.back-link:hover {
  opacity: 1;
  transform: translateX(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
  }
  
  .hero-details {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .description-section,
  .info-section,
  .contact-section {
    padding: 4rem 0;
  }
  
  .description-container,
  .info-container,
  .contact-container {
    padding: 0 1rem;
  }
  
  .info-item {
    padding: 2rem;
  }
  
  .cta-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .description-content h2,
  .info-content h2,
  .contact-info h2 {
    font-size: 2rem;
  }
  
  .info-item {
    padding: 1.5rem;
  }
  
  .info-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>
