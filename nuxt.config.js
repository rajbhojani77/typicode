export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'typicode',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/common.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      // Doc: https://bootstrap-vue.js.org
      'bootstrap-vue/nuxt',
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
    ],
    axios: {
      proxy: true
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    axios: {
      // See https://github.com/nuxt-community/axios-module#options
      baseURL: 'https://jsonplaceholder.typicode.com', //https://viewer.uiib.us
      retry: true
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
