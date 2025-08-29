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
            <router-link to="/sobre" @click="closeMenu">Sobre Mim</router-link>
          </li>
          <li>
            <router-link to="/servicos" @click="closeMenu">Serviços</router-link>
          </li>
          <li>
            <router-link to="/faq" @click="closeMenu">Perguntas Frequentes</router-link>
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
  background: var(--color-light);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(129, 92, 133, 0.08);
  height: 80px;
  display: flex;
  align-items: center;
}

.header-container {
  width: 100%;
  max-width: 1600px;
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
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-info {
  min-width: 0;
}

.brand-title {
  color: var(--color-primary-dark);
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.brand-subtitle {
  color: var(--color-secondary);
  font-size: 0.85rem;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.9;
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
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-list a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: var(--color-primary-dark);
}

.nav-list a:hover::after,
.nav-list a.router-link-active::after {
  transform: scaleX(1);
}

.contact-link {
  color: white !important;
  background: var(--gradient-primary);
  padding: 0.5rem 1.25rem !important;
  border-radius: 50px;
  transition: all 0.3s ease !important;
  box-shadow: 0 2px 6px rgba(129, 92, 133, 0.2);
}

.contact-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(129, 92, 133, 0.3);
  background: var(--gradient-light);
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