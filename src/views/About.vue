<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Sobre Mim</h1>
      </div>

      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3">
            <!-- Placeholder para foto -->
            <div class="h-64 md:h-full bg-gray-200"></div>
          </div>
          <div class="md:w-2/3 p-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
              Enfª Glacy Song
            </h2>
            <p class="text-gray-600 mb-4">
              Sou enfermeira especialista em amamentação, com vasta experiência no atendimento a mães e bebês. 
              Minha missão é tornar a jornada da amamentação mais tranquila e bem-sucedida para todas as famílias.
            </p>
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Formação</h3>
                <ul class="list-disc list-inside text-gray-600">
                  <li>Graduação em Enfermagem</li>
                  <li>Especialização em Consultoria em Amamentação</li>
                  <li>Especialização em Saúde Materno-Infantil</li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Experiência</h3>
                <ul class="list-disc list-inside text-gray-600">
                  <li>Mais de X anos de experiência em amamentação</li>
                  <li>Atendimento domiciliar personalizado</li>
                  <li>Centenas de famílias atendidas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
