<template>
  <div class="min-h-screen">
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
  min-height: calc(100vh - 70px);
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
  height: 4.5rem;
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
    height: 4rem;
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
</style>