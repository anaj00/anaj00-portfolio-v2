/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3d50ff', // Main color
          secondary: '#ff45fe', // Secondary color
          accent: '#ffd700', // Accent color
          black: '#333333',
          white: '#f9f9f9',
        },
      },
    },
    defaultTheme: 'light',
  },
})