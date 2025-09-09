// https://nuxt.com/docs/api/configuration/nuxt-config  
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'OpenSans': [300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
    preconnect: true,
    download: false,
  },
})    