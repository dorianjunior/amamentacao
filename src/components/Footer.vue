<template>
  <footer class="modern-footer">
    <div class="footer-background">
      <!-- Versão Desktop/Tablet -->
      <div class="footer-desktop">
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
                <li><router-link to="/servicos/consultoria-aleitamento" class="footer-link">Consultoria em Aleitamento</router-link></li>
                <li><router-link to="/servicos/furo-humanizado" class="footer-link">Furo de Orelha Humanizado</router-link></li>
                <li><router-link to="/servicos/home-care-materno" class="footer-link">Home Care Materno Infantil</router-link></li>
                <li><router-link to="/servicos/curso-gestantes" class="footer-link">Curso para Gestantes</router-link></li>
              </ul>
            </div>

            <!-- Cursos profissionais -->
            <div class="footer-courses" data-aos="fade-up" data-aos-delay="250">
              <h4 class="footer-section-title">Cursos</h4>
              <ul class="footer-nav">
                <li><router-link to="/cursos/formacao-consultores" class="footer-link">Aleitamento Materno</router-link></li>
                <li><router-link to="/cursos/cuidados-bebes" class="footer-link">Cuidados com Bebês</router-link></li>
                <li><router-link to="/cursos/furo-humanizado" class="footer-link">Furo Humanizado</router-link></li>
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

        <!-- Copyright Desktop -->
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

      <!-- Versão Mobile Compacta -->
      <div class="footer-mobile">
        <div class="mobile-container">
          <!-- Header Mobile -->
          <div class="mobile-header">
            <div class="mobile-brand">
              <div class="mobile-logo">
                <img src="/src/assets/img/logo.webp" alt="Logo">
              </div>
              <div class="mobile-info">
                <h3 class="mobile-title">Enfª Glacy Song</h3>
                <p class="mobile-coren">COREN-SC 655.878</p>
              </div>
            </div>
            
            <div class="mobile-whatsapp">
              <a href="https://wa.me/5548996680096" target="_blank" class="mobile-whatsapp-btn">
                <i class="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>

          <!-- Links Mobile -->
          <div class="mobile-links">
            <div class="mobile-nav">
              <router-link to="/" class="mobile-link">Início</router-link>
              <router-link to="/sobre" class="mobile-link">Sobre</router-link>
              <router-link to="/servicos" class="mobile-link">Serviços</router-link>
              <router-link to="/contato" class="mobile-link">Contato</router-link>
            </div>
          </div>

          <!-- Contato Mobile -->
          <div class="mobile-contact">
            <div class="mobile-contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:glacy.consultoria.am@gmail.com">glacy.consultoria.am@gmail.com</a>
            </div>
            <div class="mobile-contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Florianópolis - SC</span>
            </div>
          </div>

          <!-- Social Mobile -->
          <div class="mobile-social">
            <a href="https://www.instagram.com/amamentacao.florianopolis/" target="_blank" class="mobile-social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/5548996680096" target="_blank" class="mobile-social-link">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:glacy.consultoria.am@gmail.com" class="mobile-social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>

          <!-- Copyright Mobile -->
          <div class="mobile-copyright">
            <p>&copy; 2025 Enfª Glacy Song. Todos os direitos reservados.</p>
            <p class="mobile-location">Florianópolis - SC</p>
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

/* === VERSÃO DESKTOP/TABLET === */
.footer-mobile {
  display: none;
}

.footer-desktop {
  display: block;
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
  grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
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

/* === VERSÃO MOBILE === */
@media (max-width: 768px) {
  .footer-desktop {
    display: none;
  }
  
  .footer-mobile {
    display: block;
    padding: 2rem 0 1rem;
    position: relative;
    z-index: 1;
  }
  
  .mobile-container {
    padding: 0 1.5rem;
    max-width: 100%;
  }
  
  /* Header Mobile */
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .mobile-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .mobile-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 5px;
    flex-shrink: 0;
  }
  
  .mobile-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .mobile-info {
    flex: 1;
  }
  
  .mobile-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    margin: 0 0 0.25rem 0;
  }
  
  .mobile-coren {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
  
  .mobile-whatsapp-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    text-decoration: none;
    padding: 0.75rem 1rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
  
  .mobile-whatsapp-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  
  /* Links Mobile */
  .mobile-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  
  .mobile-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }
  
  .mobile-link:hover,
  .mobile-link.router-link-active {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    transform: translateY(-1px);
  }
  
  /* Contato Mobile */
  .mobile-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    backdrop-filter: blur(10px);
  }
  
  .mobile-contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.85rem;
  }
  
  .mobile-contact-item i {
    width: 16px;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    flex-shrink: 0;
  }
  
  .mobile-contact-item a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    word-break: break-all;
  }
  
  .mobile-contact-item span {
    color: rgba(255, 255, 255, 0.8);
  }
  
  /* Social Mobile */
  .mobile-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .mobile-social-link {
    width: 40px;
    height: 40px;
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
  
  .mobile-social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  /* Copyright Mobile */
  .mobile-copyright {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .mobile-copyright p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }
  
  .mobile-location {
    font-size: 0.75rem !important;
    color: rgba(255, 255, 255, 0.6) !important;
  }
}

/* Responsividade para tablets */
@media (max-width: 1024px) and (min-width: 769px) {
  .footer-container {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    grid-column: span 3;
    text-align: center;
    margin-bottom: 2rem;
  }
}

/* Mobile muito pequeno */
@media (max-width: 480px) {
  .mobile-container {
    padding: 0 1rem;
  }
  
  .mobile-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .mobile-brand {
    flex-direction: column;
    text-align: center;
  }
  
  .mobile-nav {
    gap: 0.5rem;
  }
  
  .mobile-link {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .mobile-contact {
    padding: 1rem;
  }
  
  .mobile-contact-item {
    font-size: 0.8rem;
  }
  
  .mobile-whatsapp-btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.75rem;
  }
}
</style>
