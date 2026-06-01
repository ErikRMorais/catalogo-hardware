<template>
  <v-container class="py-6" style="max-width: 600px;">

    <!-- Título muda conforme se está criando ou editando -->
    <h2 class="text-h5 font-weight-bold mb-6">
      <v-icon color="primary" class="mr-2">{{ estaEditando ? 'mdi-pencil' : 'mdi-plus-circle' }}</v-icon>
      {{ estaEditando ? 'Editando Peça' : 'Cadastrar Nova Peça' }}
    </h2>

    <v-card rounded="lg" class="pa-6">

      <!-- Campo Nome -->
      <v-text-field
        v-model="form.nome"
        label="Nome da peça"
        placeholder="Ex: Intel Core i5-10400F"
        prepend-inner-icon="mdi-chip"
        variant="outlined"
        class="mb-3"
      />

      <!-- Campo Categoria (select) -->
      <v-select
        v-model="form.categoria"
        :items="categorias"
        label="Categoria"
        prepend-inner-icon="mdi-tag"
        variant="outlined"
        class="mb-3"
      />

      <!-- Campo Preço -->
      <v-text-field
        v-model="form.preco"
        label="Preço (R$)"
        type="number"
        prepend-inner-icon="mdi-currency-brl"
        variant="outlined"
        class="mb-3"
      />

      <!-- Campo Testado (checkbox) -->
      <v-checkbox
        v-model="form.testado"
        label="Peça foi testada e está funcionando"
        color="primary"
        class="mb-3"
      />

      <!-- Botões de ação -->
      <div class="d-flex ga-3">
        <v-btn color="primary" @click="salvarItem" size="large">
          <v-icon left>mdi-content-save</v-icon> Salvar
        </v-btn>
        <v-btn variant="tonal" to="/lista" size="large">
          Cancelar
        </v-btn>
      </div>

    </v-card>

  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { itens, salvar } from '../store/itens'

const router = useRouter()
const route  = useRoute()

// Opções do select de categoria
const categorias = ['Processador', 'Placa-mãe', 'Memória', 'Armazenamento', 'Placa de Vídeo']

// Formulário com valores padrão (para criar novo)
const form = ref({
  id:        null,
  nome:      '',
  categoria: null,
  preco:     0,
  testado:   false,
})

// Verifica se tem um :id na rota (significa que estamos editando)
const estaEditando = computed(() => !!route.params.id)

// Quando a página carrega, verifica se tem um id para editar
onMounted(() => {
  if (estaEditando.value) {
    const id = Number(route.params.id)
    const itemEncontrado = itens.value.find(x => x.id === id)
    if (itemEncontrado) {
      // Copia os dados do item para o formulário
      form.value = { ...itemEncontrado }
    }
  }
})

// Salva o item e volta para /lista
function salvarItem() {
  if (!form.value.nome || !form.value.categoria) {
    alert('Preencha o nome e a categoria!')
    return
  }
  // Converte preço para número antes de salvar
  form.value.preco = Number(form.value.preco)
  salvar(form.value)
  router.push('/lista')
}
</script>
