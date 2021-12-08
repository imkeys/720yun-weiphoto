module.exports = {
  // publicPath: '/vue-720yun/',
  transpileDependencies: [
    'vue-draggable-resizable-gorkys'
  ],
  css: {
    extract: {
      filename: 'static/css/[name].css?hash=[hash:8]',
      chunkFilename: 'static/css/[name].css?hash=[hash:8]'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.fallback.options.name = 'static/img/[name].[ext]?hash=[hash:8]'
        return options
      })
    config
      .when(process.env.NODE_ENV !== 'development',
        config => config.devtool('none')
      )
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  },
  configureWebpack: {
    output: {
      filename: 'static/js/[name].js?hash=[hash:8]',
      chunkFilename: 'static/js/[name].js?hash=[hash:8]'
    },
    externals: {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      'axios': 'axios'
    },
    devServer: {
      disableHostCheck: true,
      port: '9301',
      open: 'http://localhost:9301/#/',
      proxy: {
        '/': {
          target: 'http://42.194.241.236:99',
          changeOrigin: true,
          pathRewrite: {
            '^/system/': '/system/'
          }
        }
      }
    }
  }
}
