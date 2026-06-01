<template>
  <v-container class="py-6">

    <div class="d-flex align-center justify-space-between mb-6">
      <h2 class="text-h5 font-weight-bold">
        <v-icon color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
        Peças Cadastradas
      </h2>
      <v-btn color="secondary" to="/cadastro">
        <v-icon left>mdi-plus</v-icon> Nova Peça
      </v-btn>
    </div>

    <!-- RF8: Mensagem quando a lista está vazia -->
    <div v-if="itens.length === 0" class="text-center py-12">
      <v-icon size="80" color="medium-emphasis">mdi-package-variant-closed</v-icon>
      <p class="text-h6 mt-4 text-medium-emphasis">Nenhuma peça cadastrada ainda.</p>
      <v-btn color="primary" class="mt-4" to="/cadastro">
        Cadastrar a primeira peça
      </v-btn>
    </div>

    <!-- Lista de itens usando o componente ItemCard -->
    <div v-else>
      <ItemCard
        v-for="item in itens"
        :key="item.id"
        :item="item"
        @editar="irParaEdicao"
        @excluir="confirmarExclusao"
      />
    </div>

  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { itens, excluir } from '../store/itens'
import ItemCard from '../components/ItemCard.vue'

const router = useRouter()

// Ao clicar em Editar no ItemCard, navega para o formulário com o id do item
function irParaEdicao(item) {
  router.push('/cadastro/' + item.id)
}

// Ao clicar em Excluir no ItemCard, pede confirmação antes de excluir
function confirmarExclusao(id) {
  const confirmou = confirm('Tem certeza que deseja excluir esta peça?')
  if (confirmou) {
    excluir(id)
  }
}
</script>
