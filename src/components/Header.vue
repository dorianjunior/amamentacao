<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo/Nome -->
        <router-link to="/" class="text-2xl font-bold text-purple-600">
          <div class="logo flex justify-center items-center">
            <img src="/src/assets/img/logo.webp" class="w-25 h-25" alt="Logo Amamentação Florianópolis" />
            <span>
              <span>AMAMENTAÇÃO FLORIANÓPOLIS</span><br>
              <small>Enfermeira Glacy Song</small>
            </span>
          </div>
        </router-link>

        <!-- Links de Navegação -->
        <div class="hidden md:flex space-x-6">
          <router-link 
            to="/" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </router-link>
          <router-link 
            to="/sobremim" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Sobre Mim
          </router-link>
          <router-link 
            to="/servicos" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Serviços
          </router-link>
          <router-link 
            to="/perguntasfrequentes" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            erguntas Frequentes
          </router-link>
          <router-link 
            to="/contato" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </router-link>
        </div>

        <!-- Menu Mobile (Hambúrguer) -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-gray-600 hover:text-blue-600"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile (Dropdown) -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden mt-4 space-y-4"
      >
        <router-link 
          to="/" 
          class="block text-gray-600 hover:text-blue-600 transition-colors"
          @click="closeMenu"
        >
          Home
        </router-link>
        <router-link 
          to="/sobremim" 
          class="block text-gray-600 hover:text-blue-600 transition-colors"
          @click="closeMenu"
        >
          Sobre Mim
        </router-link>
        <router-link 
          to="/servicos" 
          class="block text-gray-600 hover:text-blue-600 transition-colors"
          @click="closeMenu"
        >
          Serviços
        </router-link>
        <router-link 
          to="/perguntasfrequentes" 
          class="block text-gray-600 hover:text-blue-600 transition-colors"
          @click="closeMenu"
        >
          FAQ
        </router-link>
        <router-link 
          to="/contato" 
          class="block text-gray-600 hover:text-blue-600 transition-colors"
          @click="closeMenu"
        >
          Contato
        </router-link>
      </div>
    </nav>
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
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>
