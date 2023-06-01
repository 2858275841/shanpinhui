// 支付订单仓库
import { reqGetSubmitOrder } from '@/API'

const state = {
  orderNumber: {} // 订单号
}
const getters = {}
const mutations = {
  GET_SUBMIT_ORDER(state, orderNumber) {
    state.orderNumber = orderNumber
  }
}
const actions = {
  // 提交订单
  async getSubmitOrder({ commit }, { tradeNo, data }) {
    const result = await reqGetSubmitOrder(tradeNo, data)
    if (result.code === 200) {
      commit('GET_SUBMIT_ORDER', result.data)
      return result.message
    } else {
      return Promise.reject(new Error(result.message))
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
