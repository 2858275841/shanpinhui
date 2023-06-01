// 登录于注册的仓库数据
import { reqGetRegisterCode, reqRegisterUser, reqUserLogin, reqTokenGetUserInfo, reqLoginOut } from '@/API'
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}
const getters = {}
const mutations = {
  GETREGISTERCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  // 退出登录清除残留数据
  loginOut(state) {
    state.token = ''
    state.userInfo = {}
    // token清除
    removeToken()
  }
}
const actions = {
  // 获取验证码
  async getRegisterCode({ commit }, phone) {
    const result = await reqGetRegisterCode(phone)
    if (result.code === 200) {
      commit('GETREGISTERCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 注册用户
  async RegisterUser({ commit }, data) {
    const result = await reqRegisterUser(data)
    return result.code === 200 ? result.data : Promise.reject(new Error(result.message))
  },
  // 登录
  async userLogin({ commit }, data) {
    const result = await reqUserLogin(data)
    if (result.code === 200) {
      commit('USERLOGIN', result.data.token)
      // 本地化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // token获取用户信息
  async tokenGetUserInfo({ commit }) {
    const result = await reqTokenGetUserInfo()
    if (result.code === 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error(result.message))
    }
  },
  // 退出登录
  async userLoginOut({ commit }) {
    const result = await reqLoginOut()
    if (result.code === 200) {
      commit('loginOut')
      return 'ok'
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
