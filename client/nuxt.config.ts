// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    'nuxt-graphql-client',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://job-tracker-production-d723.up.railway.app/',
    },
  },
});
