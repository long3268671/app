/**
 * @Vuex的mutation模块，用来操作vuex里的状态调用
 * @调用方式  this.$store.commit(setUser)
 * **/
export default {
  setUser(state,user){
    state.user = user
  }
}
