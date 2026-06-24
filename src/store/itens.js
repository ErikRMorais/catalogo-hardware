import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const BASE = 'http://localhost:3001'

function getHeaders() {
  const token = useUserStore().user?.idToken
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

async function req(path, options = {}) {
  const res = await fetch(BASE + path, { ...options, headers: getHeaders() })
  return res.json()
}

export const itens = ref([])

export async function carregarItens() {
  itens.value = await req('/items')
}

export async function salvar(item) {
  if (item.id) {
    await req(`/items/${item.id}`, { method: 'PUT', body: JSON.stringify(item) })
  } else {
    await req('/items', { method: 'POST', body: JSON.stringify(item) })
  }
  await carregarItens()
}

export async function excluir(id) {
  await req(`/items/${id}`, { method: 'DELETE' })
  itens.value = itens.value.filter(x => x.id !== id)
}
