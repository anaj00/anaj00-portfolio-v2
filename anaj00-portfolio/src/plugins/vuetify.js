/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Vuetify theme setup
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#776B5D', // Deep base
          secondary: '#B0A695', // Muted soft tone
          accent: '#EBE3D5', // Warm highlight
          background: '#F3EEEA', // Light background
          surface: '#F3EEEA', // Match background for cards, etc.
        },
      },
    },
  },
})
