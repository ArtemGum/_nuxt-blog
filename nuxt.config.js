import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'KEY' },
      { name: 'google-site-verification', content: 'KEY' }
    ],
    link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
		{ src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		'~plugins/app-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-KEY'
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: 'KEY',
    //   webvisor: false,
    //   clockmap: true,
    //   trackLinks: true
    // }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
