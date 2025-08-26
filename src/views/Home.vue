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
            Amamentação
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: var(--color-primary-transparent);
}

.hero-image {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
}

.hero-image::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 32rem;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .hero-content {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 0 2rem;
  }
}

.hero-logo {
  margin-bottom: 2rem;
}

.hero-logo img {
  height: 4rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 36rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: white;
  color: var(--color-primary);
  font-weight: 600;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.hero-cta:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.hero-info {
  margin-top: 3rem;
  color: rgba(255, 255, 255, 0.9);
}

.info-name {
  font-size: 1.125rem;
  font-weight: 600;
}

.info-coren {
  margin-top: 0.25rem;
}

.info-location {
  margin-top: 0.5rem;
}

.bg-primary-transparent {
  background-color: var(--color-primary-transparent);
}
</style>