<template>
  <header :class="['site-header', { 'menu-open': isMenuOpen }]">
    <div class="header-container">
      <!-- Logo e Nome -->
      <router-link to="/" class="brand" @click="closeMenu">
        <img src="/src/assets/img/logo.webp" alt="Logo Amamentação Florianópolis" class="brand-logo" />
        <div class="brand-info">
          <h1 class="brand-title">Amamentação Florianópolis</h1>
          <p class="brand-subtitle">Enfª Glacy Song</p>
        </div>
      </router-link>

      <!-- Menu Principal -->
      <nav class="main-nav" :class="{ 'is-visible': isMenuOpen }">
        <ul class="nav-list">
          <li>
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
          <li>
            <router-link to="/sobremim" @click="closeMenu">Sobre Mim</router-link>
          </li>
          <li>
            <router-link to="/servicos" @click="closeMenu">Serviços</router-link>
          </li>
          <li>
            <router-link to="/perguntasfrequentes" @click="closeMenu">FAQ</router-link>
          </li>
          <li>
            <router-link to="/contato" class="contact-link" @click="closeMenu">Contato</router-link>
          </li>
        </ul>
      </nav>

      <!-- Botão Menu Mobile -->
      <button 
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Menu principal"
      >
        <span class="menu-icon">
          <span class="menu-line"></span>
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.site-header {
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(177, 140, 174, 0.1);
  height: 70px;
  display: flex;
  align-items: center;
}

.header-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Brand/Logo */
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  min-width: 0;
}

.brand-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-info {
  min-width: 0;
}

.brand-title {
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.brand-subtitle {
  color: var(--color-tertiary);
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Navigation */
.main-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-list {
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: var(--color-tertiary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: var(--color-primary);
}

.nav-list a:hover::after,
.nav-list a.router-link-active::after {
  transform: scaleX(1);
}

.contact-link {
  color: white !important;
  background-color: var(--color-primary);
  padding: 0.5rem 1rem !important;
  border-radius: 50px;
  transition: background-color 0.3s ease !important;
}

.contact-link:hover {
  background-color: var(--color-secondary);
}

.contact-link::after {
  display: none;
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  position: relative;
  z-index: 100;
}

.menu-icon {
  position: relative;
  display: block;
  width: 24px;
  height: 2px;
}

.menu-line,
.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-tertiary);
  transition: all 0.3s ease;
}

.menu-line {
  top: 50%;
  transform: translateY(-50%);
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

.menu-open .menu-line {
  background-color: transparent;
}

.menu-open .menu-icon::before {
  top: 0;
  transform: rotate(45deg);
  background-color: var(--color-primary);
}

.menu-open .menu-icon::after {
  bottom: 0;
  transform: rotate(-45deg);
  background-color: var(--color-primary);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .site-header {
    height: 60px;
  }

  .brand-title {
    font-size: 0.9rem;
  }

  .brand-subtitle {
    font-size: 0.75rem;
  }

  .menu-toggle {
    display: block;
  }

  .main-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    display: block;
  }

  .main-nav.is-visible {
    transform: translateX(0);
  }

  .nav-list {
    flex-direction: column;
    gap: 0;
  }

  .nav-list li {
    width: 100%;
  }

  .nav-list a {
    display: block;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .nav-list a:hover,
  .nav-list a.router-link-active {
    color: var(--color-primary-transparent);
  }

  .nav-list a::after {
    display: none;
  }

  .contact-link {
    margin-top: 1rem;
    text-align: center;
    background-color: var(--color-primary);
  }
}

/* Animações */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-list li {
  animation: slideIn 0.3s ease forwards;
  opacity: 0;
}

.nav-list li:nth-child(1) { animation-delay: 0.1s; }
.nav-list li:nth-child(2) { animation-delay: 0.2s; }
.nav-list li:nth-child(3) { animation-delay: 0.3s; }
.nav-list li:nth-child(4) { animation-delay: 0.4s; }
.nav-list li:nth-child(5) { animation-delay: 0.5s; }
</style>