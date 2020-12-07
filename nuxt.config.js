import axios from 'axios'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',


  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //Animation
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' },
    { src: '@kangc/v-md-editor/lib/style/base-editor.css', lang: 'css' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/app-components.js'},
    { src: '~plugins/markdown.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },
  generate: {
    routes() {
      return axios.get('https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .then(res => {

          //Get ID
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({...res.data[key], id: key})
          }

          // Routes
          return postsArray.map(post => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
