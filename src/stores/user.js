import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import '@/firebase/config'

export const useUserStore = defineStore('user', () => {
  const auth = getAuth()
  const router = useRouter()

  const user = ref(null)
  const isLoggedIn = computed(() => user.value !== null)

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      user.value = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        accessToken: credential?.accessToken ?? null,
      }
      router.push('/')
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error.message)
      throw error
    }
  }

  async function logout() {
    try {
      await signOut(auth)
      user.value = null
      router.push('/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message)
    }
  }

  return { user, isLoggedIn, loginWithGoogle, logout }
})
