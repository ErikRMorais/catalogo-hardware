<template>
  <v-container class="py-6" style="max-width: 600px;">
    <h2 class="text-h5 font-weight-bold mb-6">
      <v-icon color="primary" class="mr-2">{{ estaEditando ? 'mdi-pencil' : 'mdi-plus-circle' }}</v-icon>
      {{ estaEditando ? 'Editando Peça' : 'Cadastrar Nova Peça' }}
    </h2>

    <v-card rounded="lg" class="pa-6">
      <v-text-field
        v-model="form.nome"
        label="Nome da peça"
        placeholder="Ex: Intel Core i5-10400F"
        prepend-inner-icon="mdi-chip"
        variant="outlined"
        class="mb-3"
      />
      <v-select
        v-model="form.categoria"
        :items="categorias"
        label="Categoria"
        prepend-inner-icon="mdi-tag"
        variant="outlined"
        class="mb-3"
      />
      <v-text-field
        v-model="form.preco"
        label="Preço (R$)"
        type="number"
        prepend-inner-icon="mdi-currency-brl"
        variant="outlined"
        class="mb-3"
      />
      <v-checkbox
        v-model="form.testado"
        label="Peça foi testada e está funcionando"
        color="primary"
        class="mb-3"
      />
      <div class="d-flex ga-3">
        <v-btn color="primary" @click="salvarItem" size="large">
          <v-icon left>mdi-content-save</v-icon> Salvar
        </v-btn>
        <v-btn variant="tonal" to="/lista" size="large">Cancelar</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { itens, carregarItens, salvar } from '../store/itens'

const router = useRouter()
const route  = useRoute()

const categorias = ['Processador', 'Placa-mãe', 'Memória', 'Armazenamento', 'Placa de Vídeo']

const form = ref({
  id:        null,
  nome:      '',
  categoria: null,
  preco:     0,
  testado:   false,
})

const estaEditando = computed(() => !!route.params.id)

onMounted(async () => {
  if (estaEditando.value) {
    if (itens.value.length === 0) await carregarItens()
    const id = Number(route.params.id)
    const itemEncontrado = itens.value.find(x => x.id === id)
    if (itemEncontrado) form.value = { ...itemEncontrado }
  }
})

async function salvarItem() {
  if (!form.value.nome || !form.value.categoria) {
    alert('Preencha o nome e a categoria!')
    return
  }
  form.value.preco = Number(form.value.preco)
  await salvar(form.value)
  router.push('/lista')
}
</script>
