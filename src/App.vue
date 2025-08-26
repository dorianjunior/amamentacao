
<template>
  <Loader v-if="loading" />
  <div v-else>
    <Header />
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import { ref, onMounted } from 'vue'
import Loader from './components/Loader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>