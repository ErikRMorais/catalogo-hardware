import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Tema personalizado para Hardware/Tecnologia
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          // Azul elétrico - cor de tecnologia
          primary: '#00B4D8',
          // Laranja de LED - cor de hardware gamer
          secondary: '#FF6B35',
          // Fundo escuro de gabinete
          background: '#0D1117',
          surface: '#161B22',
        }
      }
    }
  }
})

export default vuetify
