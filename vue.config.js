module.exports = {
    lintOnSave: true,
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    chainWebpack: config => {
      if (process.env.NODE_ENV === 'development') {
        config
          .output
          .filename('[name].[hash].js')
          .end()
      }
    },
    css: {
    //   loaderOptions: {
    //     sass: {
    //       data: `@import "@/assets/styles/common.scss";`
    //     }
    //   }
    },
    devServer: {
      port: 80,
      host: '0.0.0.0',
      disableHostCheck: true,
      open: false,
      proxy: {
        '/': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          pathRewrite: {
            '^/': ''
          }
        }
      }
    }
  
  };
  