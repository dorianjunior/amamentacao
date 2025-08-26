<template>
    <a :href="whatsappUrl" target="_blank" class="whatsapp-button" :title="tooltip" @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false">
        <span v-if="showTooltip" class="tooltip">{{ tooltip }}</span>
    </a>
</template>

<script setup>
import { ref, computed } from 'vue'

const showTooltip = ref(false)
const tooltip = ref('Posso Ajudar?')

const whatsappUrl = computed(() => {
    const message = 'Olá Glacy! Gostaria de saber mais sobre os serviços!'
    return `https://api.whatsapp.com/send?phone=5548996680096&text=${encodeURIComponent(message)}`
})
</script>

<style scoped>
.whatsapp-button {
    position: fixed;
    bottom: 2.5vh;
    right: 2.5vh;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    z-index: 999;
}

.whatsapp-button:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background-image: url('@/assets/img/icon-whatsapp.svg');
    background-repeat: no-repeat;
    background-size: 80%;
    border-radius: 50%;
    transform: translate(-40%, -40%);
    transition: transform 0.2s ease-in-out;
    animation: neon 1s ease-in-out infinite alternate;
}

@keyframes neon {
    0% {
        filter: drop-shadow(0 0 5px #25d366);
    }

    100% {
        filter: drop-shadow(0 0 15px #25d366);
    }
}

.whatsapp-button:hover:before {
    transform: translate(-40%, -40%) scale(1.2);
}
</style>