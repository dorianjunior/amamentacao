<template>
  <footer class="modern-footer">
    <div class="footer-background">
      <!-- Seção principal do footer -->
      <div class="footer-content">
        <div class="footer-container">
          <!-- Logo e informações principais -->
          <div class="footer-brand" data-aos="fade-up">
            <div class="footer-logo">
              <img src="/src/assets/img/logo.webp" alt="Logo Amamentação Florianópolis">
            </div>
            <h3 class="footer-title">Enfª Glacy Song</h3>
            <p class="footer-subtitle">COREN-SC 655.878</p>
            <p class="footer-description">
              Acolhimento, cuidado e experiência para um maternar mais leve e seguro
            </p>
          </div>

          <!-- Links rápidos -->
          <div class="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h4 class="footer-section-title">Navegação</h4>
            <ul class="footer-nav">
              <li><router-link to="/" class="footer-link">Início</router-link></li>
              <li><router-link to="/sobre" class="footer-link">Sobre</router-link></li>
              <li><router-link to="/servicos" class="footer-link">Serviços</router-link></li>
              <li><router-link to="/faq" class="footer-link">FAQ</router-link></li>
              <li><router-link to="/contato" class="footer-link">Contato</router-link></li>
            </ul>
          </div>

          <!-- Serviços principais -->
          <div class="footer-services" data-aos="fade-up" data-aos-delay="200">
            <h4 class="footer-section-title">Serviços</h4>
            <ul class="footer-nav">
              <li><span class="footer-service">Consultoria em Aleitamento</span></li>
              <li><span class="footer-service">Furo de Orelha Humanizado</span></li>
              <li><span class="footer-service">Home Care Materno Infantil</span></li>
              <li><span class="footer-service">Cursos e Workshops</span></li>
            </ul>
          </div>

          <!-- Contato e redes sociais -->
          <div class="footer-contact" data-aos="fade-up" data-aos-delay="300">
            <h4 class="footer-section-title">Contato</h4>
            <div class="contact-info">
              <div class="contact-item">
                <i class="fab fa-whatsapp"></i>
                <a href="https://wa.me/5548996680096" target="_blank">(48) 9 9668-0096</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:glacy.consultoria.am@gmail.com">glacy.consultoria.am@gmail.com</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Florianópolis - SC</span>
              </div>
            </div>

            <!-- Redes sociais -->
            <div class="social-links">
              <a href="https://www.instagram.com/amamentacao.florianopolis/" target="_blank" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5548996680096" target="_blank" class="social-link">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:glacy.consultoria.am@gmail.com" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Linha separadora -->
      <div class="footer-divider"></div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="footer-container">
          <div class="footer-copyright">
            <p>&copy; 2025 Enfª Glacy Song - COREN-SC 655.878. Todos os direitos reservados.</p>
            <div class="footer-meta">
              <span>Florianópolis - SC</span>
              <span class="separator">•</span>
              <span>Atendimentos presenciais e online</span>
            </div>
          </div>
          
          <div class="footer-cta">
            <a href="https://wa.me/5548996680096" target="_blank" class="footer-whatsapp">
              <i class="fab fa-whatsapp"></i>
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.modern-footer {
  position: relative;
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 50%,
    var(--color-secondary) 100%
  );
  color: white;
  overflow: hidden;
}

.footer-background {
  position: relative;
}

.footer-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.footer-content {
  padding: 4rem 0 2rem;
  position: relative;
  z-index: 1;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px;
  margin-bottom: 1rem;
}

.footer-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.footer-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 500;
}

.footer-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
}

.footer-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link:hover {
  color: white;
  transform: translateX(5px);
}

.footer-service {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  display: block;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
}

.contact-item i {
  width: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}

.contact-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: white;
}

.contact-item span {
  color: rgba(255, 255, 255, 0.8);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.social-link i {
  font-size: 1.2rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  margin: 2rem 0;
}

.footer-bottom {
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.footer-bottom .footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: none;
  gap: 2rem;
}

.footer-copyright {
  flex: 1;
}

.footer-copyright p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-meta {
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  align-items: center;
}

.separator {
  opacity: 0.5;
}

.footer-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  text-decoration: none;
  padding: 0.875rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
}

.footer-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.footer-whatsapp i {
  font-size: 1.1rem;
}

/* Responsividade */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-services {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 3rem 0 1.5rem;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .footer-bottom .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-copyright {
    order: 2;
  }
  
  .footer-cta {
    order: 1;
  }
  
  .footer-meta {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-logo {
    width: 60px;
    height: 60px;
    padding: 8px;
  }
  
  .footer-title {
    font-size: 1.3rem;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-whatsapp {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }
}
</style>
