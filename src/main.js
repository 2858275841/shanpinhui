import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServe'

// 引入自定义组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

// 按需引入element组件
import { Button, MessageBox } from 'element-ui'

// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
import Rem from '@/assets/Rem.webp'

// 引入表单验证插件
import '@/plugins/validate'

Vue.use(VueLazyload, {
  // 懒加载默认图片
  loading: Rem
})

Vue.component(Button.name, Button)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
