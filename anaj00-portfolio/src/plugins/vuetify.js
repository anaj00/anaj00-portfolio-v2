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
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#FFFFFF",
          secondary: "#212833",
          accent: "#AD6978",
          background: "#F5F8F7",
          surface: "#FFFFFF",
          black: "#14171F",
        },
      },
    },
  },
});
