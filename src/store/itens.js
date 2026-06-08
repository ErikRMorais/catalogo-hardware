import { ref } from 'vue'

export const itens = ref([
  { id: 1, nome: 'Intel Core i5-10400F', categoria: 'Processador', preco: 350, testado: true },
  { id: 2, nome: 'GTX 1660 Super', categoria: 'Placa de Vídeo', preco: 800, testado: true },
  { id: 3, nome: 'Kingston 16GB DDR4', categoria: 'Memória', preco: 180, testado: false },
])

export function salvar(item) {
  if (item.id) {
    const indice = itens.value.findIndex(x => x.id === item.id)
    itens.value[indice] = { ...item }
  } else {
    itens.value.push({ ...item, id: Date.now() })
  }
}

export function excluir(id) {
  itens.value = itens.value.filter(x => x.id !== id)
}
