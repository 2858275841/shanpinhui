// 个人购物车仓库数据
import { reqGetShopCartList, reqChangeChecked, reqDeleteShopCart } from '@/API'

const state = {
  shopCartList: []
}
const getters = {
  cartList(state) {
    return state.shopCartList[0] || {}
  }
}
const mutations = {
  GETSHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList
  }
}
const actions = {
  async getShopCartList({ commit }) {
    const result = await reqGetShopCartList()
    if (result.code === 200) {
      commit('GETSHOPCARTLIST', result.data)
    }
  },
  async upChangeChecked({ commit }, { skuId, isChecked }) {
    const result = await reqChangeChecked(skuId, isChecked)
    return result.code === 200 ? 'ok' : Promise.reject(new Error('fail'))
  },
  async deleteShopCartList({ commit }, skuId) {
    const result = await reqDeleteShopCart(skuId)
    return result.code === 200 ? 'ok' : Promise.reject(new Error('fail'))
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
