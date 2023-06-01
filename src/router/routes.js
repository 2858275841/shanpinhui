// 路由配置信息
export default [
  {
    path: '/',
    component: () => import('@/views/Home'),
    meta: { show: true } // 元信息
  },
  // 首页
  {
    path: '/home',
    component: () => import('@/views/Home'),
    meta: { show: true }
  },
  // 登录
  {
    path: '/login',
    component: () => import('@/views/Login'),
    meta: { show: false }
  },
  // 注册
  {
    path: '/register',
    component: () => import('@/views/Register'),
    meta: { show: false }
  },
  // 搜索
  {
    path: '/search/:keyword?',
    name: 'search',
    component: () => import('@/views/Search'),
    meta: { show: true }
  },
  // 详情
  {
    path: '/detail/:skuId?',
    component: () => import('@/views/Detail'),
    meta: { show: true }
  },
  // 加入购物车成功
  {
    path: '/addcartsucces',
    name: 'addcartsuccess',
    component: () => import('@/views/AddCartSuccess'),
    meta: { show: true }
  },
  // 我的购物车
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('@/views/ShopCart'),
    meta: { show: true }
  },
  // 结算
  {
    path: '/trade',
    component: () => import('@/views/Trade'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  // 提交订单
  {
    path: '/pay/:orderId',
    name: 'pay',
    component: () => import('@/views/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  // 支付成功
  {
    path: '/paysuccess',
    component: () => import('@/views/PaySuccess'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path === '/pay') {
        next()
      } else {
        next(false)
      }
    }
  },
  // 个人中心
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: { show: true },
    children: [
      {
        path: '/center',
        redirect: '/center/myorder'
      },
      {
        path: 'myorder',
        component: () => import('@/views/Center/MyOrder')

      },
      {
        path: 'grouporder',
        component: () => import('@/views/Center/GroupOrder')
      }
    ]
  }
]
