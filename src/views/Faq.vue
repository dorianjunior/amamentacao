<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-blue-600 mb-12">
        Perguntas Frequentes
      </h1>

      <div class="space-y-6">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md">
          <button
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
            @click="toggleFaq(index)"
          >
            <span class="text-lg font-medium text-gray-900">{{ faq.pergunta }}</span>
            <svg
              class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
              :class="{ 'rotate-180': faq.isOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="faq.isOpen"
            class="px-6 pb-4 text-gray-600"
          >
            <p class="mt-2">{{ faq.resposta }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      faqs: [
        {
          pergunta: 'Quando devo procurar uma consultora em amamentação?',
          resposta: 'É recomendado procurar uma consultora em amamentação durante a gestação para se preparar ou sempre que houver dúvidas ou dificuldades durante a amamentação, como dor ao amamentar, baixo ganho de peso do bebê, dúvidas sobre pega correta, ou qualquer outra preocupação relacionada à amamentação.',
          isOpen: false
        },
        {
          pergunta: 'Quais são os benefícios da amamentação?',
          resposta: 'A amamentação traz inúmeros benefícios, como fortalecimento do sistema imunológico do bebê, desenvolvimento adequado da face e dentição, vínculo afetivo entre mãe e bebê, proteção contra doenças na infância e vida adulta, recuperação pós-parto mais rápida para a mãe, entre outros.',
          isOpen: false
        },
        {
          pergunta: 'Como sei se meu bebê está mamando corretamente?',
          resposta: 'Um bebê com pega correta deve abocanhar grande parte da aréola, ter os lábios virados para fora, fazer movimentos de sucção longos e profundos, e você não deve sentir dor. O bebê deve estar com o corpo alinhado e próximo ao seu, e você deve ouvir a deglutição.',
          isOpen: false
        },
        {
          pergunta: 'Quanto tempo dura uma consulta?',
          resposta: 'A primeira consulta geralmente dura cerca de 1h30 a 2 horas, pois inclui avaliação completa, orientações e plano de cuidados. As consultas de retorno podem durar entre 40 minutos a 1 hora, dependendo das necessidades.',
          isOpen: false
        },
        {
          pergunta: 'Você atende em casa?',
          resposta: 'Sim, realizo atendimentos domiciliares em Florianópolis e região, proporcionando maior conforto e praticidade para mães e bebês. O atendimento em domicílio permite avaliar o ambiente e fazer adaptações personalizadas quando necessário.',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>
