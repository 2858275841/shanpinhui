// 结算仓库的数据
import { reqGetUserAddressInfo, reqGetTradeInfo } from '@/API'

const state = {
  addressInfo: [], // 用户地址信息
  tradeList: {} // 订单交易页信息
}
const getters = {
  addressInfo(state) {
    return state.addressInfo || []
  },
  detailArrayList(state) {
    return state.tradeList.detailArrayList || []
  }
}
const mutations = {
  GETUSERADDRESSINFO(state, addressInfo) {
    state.addressInfo = addressInfo
  },
  GETTRADEINFO(state, tradeList) {
    state.tradeList = tradeList
  }
}
const actions = {
  // 获取用户地址信息
  async getUserAddressInfo({ commit }) {
    const result = await reqGetUserAddressInfo()
    if (result.code === 200) {
      commit('GETUSERADDRESSINFO', result.data)
    }
  },
  // 获取订单交易页信息
  async getTradeInfo({ commit }) {
    const result = await reqGetTradeInfo()
    if (result.code === 200) {
      commit('GETTRADEINFO', result.data)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
