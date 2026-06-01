<template>
  <!-- v-app é obrigatório: envolve todo o layout do Vuetify -->
  <v-app>

    <!-- Barra superior do app -->
    <v-app-bar color="primary" elevation="2">
      <!-- Botão para abrir/fechar o menu lateral -->
      <v-app-bar-nav-icon @click="menuAberto = !menuAberto" />
      <v-icon class="ml-2 mr-2">mdi-memory</v-icon>
      <v-toolbar-title class="font-weight-bold">
        Catálogo de Hardware Usado
      </v-toolbar-title>
    </v-app-bar>

    <!-- Menu lateral (navigation drawer) -->
    <v-navigation-drawer v-model="menuAberto" temporary>
      <v-list>
        <v-list-item title="Catálogo de Hardware" subtitle="Menu de navegação" class="mb-2">
          <template #prepend>
            <v-icon color="primary">mdi-memory</v-icon>
          </template>
        </v-list-item>

        <v-divider />

        <!-- Links de navegação usando router-link -->
        <v-list-item prepend-icon="mdi-home" title="Home" to="/" />
        <v-list-item prepend-icon="mdi-format-list-bulleted" title="Lista de Peças" to="/lista" />
        <v-list-item prepend-icon="mdi-plus-circle" title="Cadastrar Peça" to="/cadastro" />
        <v-list-item prepend-icon="mdi-information" title="Sobre" to="/sobre" />
      </v-list>
    </v-navigation-drawer>

    <!-- Área principal: renderiza a página atual conforme a rota -->
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'

// Controla se o menu lateral está aberto ou fechado
const menuAberto = ref(false)
</script>
