export default defineNuxtConfig({
  // Set the deployment target to static
  target: 'static', 

  // Configure static site generation
  generate: {
    dir: 'dist',  // Output directory for static files
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

  // Optional: Build options
  build: {
    // You can add custom build options here if necessary
  }
})
