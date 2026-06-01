import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Lista from '../pages/Lista.vue'
import Cadastro from '../pages/Cadastro.vue'
import Sobre from '../pages/Sobre.vue'

// Define as 4 rotas do app
const routes = [
  { path: '/',          component: Home     },
  { path: '/lista',     component: Lista    },
  { path: '/cadastro',  component: Cadastro },
  { path: '/cadastro/:id', component: Cadastro },
  { path: '/sobre',     component: Sobre    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
