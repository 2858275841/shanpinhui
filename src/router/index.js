import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import { getToken } from '@/utils/token'

import store from '@/store'

// 重写push方法和replace
const originalPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve && reject) {
    originalPush.call(this, location, resolve, reject)
  } else {
    originalPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function replace(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})
// 导航守卫 (全局前置守卫)
router.beforeEach(async (to, from, next) => {
  const token = getToken()
  const loginName = store.state.User.userInfo.loginName
  // 已经登录的情况
  if (token) {
    // 用户登录了直接访问pay路由强制让路由回到首页
    if (to.path === '/pay') {
      next('/home')
    }
    if (to.path === '/login') {
      next('/home')
    } else {
      // 是否有用户名，有就放行，没有就先获取信息在放行
      if (loginName) {
        next()
      } else {
        try {
          // 使用token获取用户信息
          await store.dispatch('tokenGetUserInfo')
          next()
        } catch (error) {
          // 进入当前分支表示token失效,清除token
          await store.dispatch('userLoginOut')
          next('/login')
        }
      }
    }
  } else {
    // 未登录的情况
    const toPath = to.path
    if (
      toPath.indexOf('/trade') !== -1 || toPath.indexOf('/pay') !== -1 || toPath.indexOf('/center') !== -1
    ) {
      next(`/login?redirect=${toPath}`)
    } else {
      next()
    }
  }
})

export default router
