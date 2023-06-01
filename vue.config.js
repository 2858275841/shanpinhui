const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn' // 要跳转的位置
      }
    }
  },
  productionSourceMap: false,
  publicPath: './'
})
