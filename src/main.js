// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from  '../src/stores'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

let loading        //定义loading变量
import { Loading } from 'element-ui';
function startLoading() {  //使用Element loading-close 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
function endLoading() {    //使用Element loading-close 方法
  loading.close()
}
Vue.prototype.startLoading = startLoading;
Vue.prototype.endLoading = endLoading;
//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// 全局接口中间件
Vue.prototype.$http = Axios;
Axios.interceptors.request.use(
  config => {
    let tbkt_token = localStorage.getItem("Tbkt-Token") || ''
    if(tbkt_token==""){
      // router.push("/login")
    }
    if (tbkt_token) config.headers['Tbkt-Token'] = tbkt_token;
    showFullScreenLoading()

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
    tryHideFullScreenLoading()

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
