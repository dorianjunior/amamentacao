<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Contato</h1>
        <p class="text-xl text-gray-600">Entre em contato para agendar sua consulta</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Formulário de Contato -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <!-- Informações de Contato -->
        <div>
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <h3 class="font-medium text-gray-800">Email</h3>
                  <p class="text-gray-600">contato@amamentacaoflorianopolis.com.br</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <h3 class="font-medium text-gray-800">Telefone</h3>
                  <p class="text-gray-600">(48) 99999-9999</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <h3 class="font-medium text-gray-800">Localização</h3>
                  <p class="text-gray-600">Florianópolis, SC</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Redes Sociais -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Redes Sociais</h2>
            <div class="flex space-x-4">
              <a href="https://instagram.com/amamentacao.florianopolis" target="_blank" class="text-gray-600 hover:text-blue-600">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" target="_blank" class="text-gray-600 hover:text-blue-600">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Aqui você pode implementar a lógica de envio do formulário
      console.log('Form submitted:', this.form)
      // Limpar formulário após envio
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
}
</script>
