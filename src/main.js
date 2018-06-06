// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from  '../src/stores'
import router from './router'
import Axios from 'axios'
Vue.config.productionTip = false
// 全局接口中间件
Vue.prototype.$http = Axios
Axios.interceptors.request.use(
  config => {
    let tbkt_token = localStorage.getItem("Tbkt-Token") || ''
    if(tbkt_token==""){
      router.push("/login")
    }
    if (tbkt_token) config.headers['Tbkt-Token'] = tbkt_token;

    return config
  },
  err => {
    return Promise.reject(err)
  }
)
Axios.interceptors.response.use(
  res => {
    let _data = res.data
    console.log(_data)
    if (_data.tbkt_token){
      localStorage.setItem('Tbkt-Token', _data.tbkt_token)
    }
    if (_data.error === 'no_user' && _data.response === 'fail') {
      console.log('no_user')
    }
    return res;
  }, err => {
    layer.tips(err)
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
