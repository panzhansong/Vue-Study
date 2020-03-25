const state = {
  tel: '13247252330'
}
const getters = {
  telFirstNumber: (state) => {
    return state.tel.substr(0, 1)
  }
}
const mutations = {
  //
}
const actions = {
  //
}
export default {
  getters,
  state,
  mutations,
  actions
}
