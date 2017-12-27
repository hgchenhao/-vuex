export const actionChangeAge = function ({commit},num) {
    commit('changeAge', num)
  }
  export const actionChangeName = function ({commit},txt) {
    setTimeout(function(){
      commit('changeName',txt)
    },2000)
  }