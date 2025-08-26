<template>
  <form @submit.prevent="submitForm" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">
        Nome
      </label>
      <div class="mt-1">
        <input
          id="name"
          type="text"
          required
          v-model="form.name"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div class="mt-1">
        <input
          id="email"
          type="email"
          required
          v-model="form.email"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">
        Telefone
      </label>
      <div class="mt-1">
        <input
          id="phone"
          type="tel"
          required
          v-model="form.phone"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-700">
        Mensagem
      </label>
      <div class="mt-1">
        <textarea
          id="message"
          rows="4"
          required
          v-model="form.message"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
    </div>

    <div class="flex justify-end">
      <Button 
        type="submit" 
        variant="primary" 
        :disabled="loading"
      >
        {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
      </Button>
    </div>

    <div v-if="successMessage" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
      {{ successMessage }}
    </div>
    
    <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'ContactForm',
  components: {
    Button
  },
  data() {
    return {
      loading: false,
      successMessage: '',
      errorMessage: '',
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.loading = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        // Aqui você pode implementar a lógica de envio do formulário
        // Por exemplo, enviar para uma API
        console.log('Form data:', this.form)
        
        // Simula um delay de envio
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.successMessage = 'Mensagem enviada com sucesso!'
        this.resetForm()
      } catch (error) {
        this.errorMessage = 'Erro ao enviar mensagem. Por favor, tente novamente.'
        console.error('Error submitting form:', error)
      } finally {
        this.loading = false
      }
    },
    resetForm() {
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
