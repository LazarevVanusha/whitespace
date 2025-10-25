// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
    css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/fonts.scss'
  ],
  image: {
    dir: 'assets/images'
  }
})