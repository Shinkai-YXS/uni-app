const actions = {
  /**
   * 登录保存用户信息
   */
  setUserInfo({commit}, info) {
    commit('SET_URER_INFO', info)
  }
}
export default actions