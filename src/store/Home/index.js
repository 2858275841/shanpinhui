// Home 数据仓库
import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/API'

const state = {
  // 三级联动数据
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  // floor数据
  floorList: []
}
const getters = {}
const mutations = {
  CATEGORYLIS(start, categoryList) {
    start.categoryList = categoryList
  },
  BANNERLIS(start, bannerList) {
    start.bannerList = bannerList
  },
  FLOORLIS(start, floorList) {
    start.floorList = floorList
  }
}
const actions = {
  categoryList({ commit }) {
    reqCategoryList().then((res) => {
      if (res.code === 200) {
        commit('CATEGORYLIS', res.data)
      }
    })
  },
  getBannerList({ commit }) {
    reqGetBannerList().then((res) => {
      if (res.code === 200) {
        commit('BANNERLIS', res.data)
      }
    })
  },
  getFloorList({ commit }) {
    reqFloorList().then((res) => {
      if (res.code === 200) {
        commit('FLOORLIS', res.data)
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
