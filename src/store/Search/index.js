// Search 数据仓库
import { reqGetSearchInfo } from '@/API'

const state = {
  // Search数据
  searchList: {}
}
// 计算属性
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  }
}
const mutations = {
  GETSEARCHLIS(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  getSearchList({ commit }, params = {}) {
    reqGetSearchInfo(params).then((res) => {
      if (res.code === 200) {
        commit('GETSEARCHLIS', res.data)
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
