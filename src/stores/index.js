import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//root级mutations
import mutations from './mutations'

//root级actions
import actions from './actions'

//root级getters
import getters from './getters'
let state={
  //用户信息
  user:{
    name:'张三'
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
