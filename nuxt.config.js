// const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'zenestate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ERP software company - ZEN' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** CSS files
  */
  css: [
    '~/assets/css/main.css'
  ],
  /**
   * Plugins
   */
  plugins: [
    // { src: '~/plugins/axios-airlisting', ssr: false },
    // { src: '~/plugins/custom-local-storage', ssr: false },
    // { src: '~/plugins/error-logger', ssr: false },
    // { src: '~/plugins/element-ui', ssr: false }
  ],
  /**
   * Rendering
   */
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      }
    }
  },
  /**
   * Mode
   */
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      // set shortcuts as global for bootstrap
    //   new webpack.ProvidePlugin({
        // $: 'jquery',
        // jQuery: 'jquery',
        // 'window.jQuery': 'jquery'
    //   })
    ],
    // vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
