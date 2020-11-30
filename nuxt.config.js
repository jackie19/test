export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  server: {
    port: 8000, // default: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'h5-decorate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: '//at.alicdn.com/t/font_2228458_9wvh63j46f9.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui', '@/plugins/ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  router: {
    mode: 'hash',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/_nuxt',
    transpile: [/^element-ui/],
    extend(config, { isDev }) {
      if (!isDev) {
        config.output.publicPath = './'
      }
    },
  },
}
