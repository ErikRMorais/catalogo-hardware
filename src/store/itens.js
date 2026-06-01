import { ref } from 'vue'

// Lista global de itens - compartilhada entre todas as páginas
// Como está fora de qualquer componente, ela sobrevive à troca de rotas!
export const itens = ref([
  // Dados de exemplo para já aparecer algo na tela
  { id: 1, nome: 'Intel Core i5-10400F', categoria: 'Processador', preco: 350, testado: true },
  { id: 2, nome: 'GTX 1660 Super', categoria: 'Placa de Vídeo', preco: 800, testado: true },
  { id: 3, nome: 'Kingston 16GB DDR4', categoria: 'Memória', preco: 180, testado: false },
])

// Salva um item: se tiver id = editar, se não tiver id = criar novo
export function salvar(item) {
  if (item.id) {
    // Editar: achar o índice e substituir
    const indice = itens.value.findIndex(x => x.id === item.id)
    itens.value[indice] = { ...item }
  } else {
    // Criar: gerar um id com a data atual e adicionar na lista
    itens.value.push({ ...item, id: Date.now() })
  }
}

// Remove o item pelo id
export function excluir(id) {
  itens.value = itens.value.filter(x => x.id !== id)
}
