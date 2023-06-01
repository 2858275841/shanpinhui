// 商品详情页仓库
import { reqGetDetailList, reqAddShopCart } from '@/API'
import { getUUID } from '@/utils/uuid_token'

const state = {
  // 商品详情页数据
  detailList: {},
  // 游客临时身份
  uuid_token: getUUID()
}
const getters = {
  categoryView(state) {
    return state.detailList.categoryView || {}
  },
  skuInfo(state) {
    return state.detailList.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.detailList.spuSaleAttrList || []
  }
}
const mutations = {
  GETDETAILLIST(state, detailList) {
    state.detailList = detailList
  }
}
const actions = {
  getDetailList({ commit }, skuId) {
    reqGetDetailList(skuId).then((res) => {
      if (res.code === 200) {
        commit('GETDETAILLIST', res.data)
      }
    })
  },
  addShopCart({ commit }, { skuId, skuNum }) {
    reqAddShopCart(skuId, skuNum).then((res) => {
      if (res.code === 200) return 'ok'
      else {
        return Promise.reject(new Error('fail'))
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
