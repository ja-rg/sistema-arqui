// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@tresjs/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  image: {
    // Options
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
})