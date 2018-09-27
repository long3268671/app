/**
 *  @Vuex的actions模块
 *  调用方式 this.$store.dispatch(getInfo)
 * **/
import Axios from 'axios'
export default {
  getInfo({state, commit}) {
    return new Promise((resolve, reject) => {
      // Axios.post(DOMAIN_API_COM_API_DJ_URLROOT + '/account/profile').then(response => {
      //   let res = response.data;
      //   if (res.response === 'ok') {
          let data = {
            name:'百度',
            url:'www.baidu.com',
            com:'搜索引擎'
          };
          commit('setUser', data);
      //   }
        resolve(data);
      // })
    })
  },
}
