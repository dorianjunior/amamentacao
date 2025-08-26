<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Serviços</h1>
        <p class="text-xl text-gray-600">Suporte profissional para sua jornada de amamentação</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Consultoria Presencial -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              Consultoria Presencial
            </h2>
            <p class="text-gray-600 mb-4">
              Atendimento personalizado com avaliação completa da mamada, orientações específicas e plano de cuidados individualizado.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Avaliação completa da mamada
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Orientações personalizadas
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Plano de cuidados individualizado
              </li>
            </ul>
          </div>
        </div>

        <!-- Consultoria Online -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              Consultoria Online
            </h2>
            <p class="text-gray-600 mb-4">
              Atendimento à distância para suporte, orientações e esclarecimento de dúvidas sobre amamentação.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Chamada por vídeo
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Material de apoio digital
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Acompanhamento por WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Informações Adicionais -->
      <div class="mt-12 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          Como Funciona
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-4">
            <div class="text-blue-600 text-2xl font-bold mb-2">1</div>
            <h3 class="font-semibold mb-2">Agendamento</h3>
            <p class="text-gray-600">Entre em contato e agende sua consulta</p>
          </div>
          <div class="p-4">
            <div class="text-blue-600 text-2xl font-bold mb-2">2</div>
            <h3 class="font-semibold mb-2">Consulta</h3>
            <p class="text-gray-600">Avaliação completa e orientações personalizadas</p>
          </div>
          <div class="p-4">
            <div class="text-blue-600 text-2xl font-bold mb-2">3</div>
            <h3 class="font-semibold mb-2">Acompanhamento</h3>
            <p class="text-gray-600">Suporte contínuo para seu sucesso</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>
