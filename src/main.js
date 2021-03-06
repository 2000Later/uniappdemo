import Vue from 'vue'
import App from './App'
// #ifdef H5
import 'amfe-flexible'
// #endif
import uView from "uview-ui";

Vue.use(uView);


import "./utils/mixin";
Vue.prototype.$u.http.setConfig
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
