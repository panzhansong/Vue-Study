import { getName } from '@/api/app'

const actions = {
  /**
   * @param {*} { commit }
   */
  // updateName ({ commit }) {
  //   getName().then((res) => {
  //     const { info: { name } } = res
  //     commit('SET_NAME', name)
  //   }).catch( (err) => {
  //     console.log(err)
  //   })
  async updateName ({ commit }) {
    try {
      const { info: { name } } = await getName()
      commit('SET_NAME', name)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
