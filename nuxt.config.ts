export default defineNuxtConfig({
  // Set the deployment target to static
  ssr: false,
  target: 'static', 

  // Configure static site generation
  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },

  app: {
    baseURL: '/', // Set the base URL for the GitHub Pages repository
  },

  // Global CSS and PostCSS configuration
  css: ['~/assets/css/main.css'],
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-rating"],
  
})
