export default {
  testFunction(context){
    context.commit({
      type: 'testFunction',
      amount: 10
    });
  },
  // actionA ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('someMutation')
  //       resolve()
  //     }, 1000)
  //   })
  // },
  // actionB ({ dispatch, commit }) {
  //   return dispatch('actionA').then(() => {
  //     commit('someOtherMutation')
  //   })
  // }
  async actionA ({ commit }) {
    commit('someMutation', await someMutation())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('someOtherMutation', await someOtherMutation())
  }
}
