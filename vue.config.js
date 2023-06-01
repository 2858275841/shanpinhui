const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn', // 要跳转的位置
        chang: true, // 开启跨域
        pathRewrite: { // 重写，如果有 api 就将api重写为空
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false
})
