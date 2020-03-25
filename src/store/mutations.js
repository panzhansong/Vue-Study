import vue from 'vue'

const mutations = {
  SET_NAME (state, params) {
    state.name = params
  },
  SET_QQ (state) {
    vue.set(state, 'QQ', '547523904')
  }
}
export default mutations
