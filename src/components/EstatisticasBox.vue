<template>
  <!-- Componente de estatísticas - recebe os dados via props -->
  <v-card color="primary" class="text-center pa-4" rounded="lg">
    <v-icon size="48" class="mb-2">mdi-cpu-64-bit</v-icon>
    <div class="text-h4 font-weight-bold">{{ total }}</div>
    <div class="text-subtitle-1">{{ label }}</div>
  </v-card>
</template>

<script setup>
// Props recebidas pelo componente pai (Home.vue)
defineProps({
  total: Number,  // Número a exibir
  label: String,  // Texto descritivo abaixo do número
})
</script>
