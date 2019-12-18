// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/index.css'
import './assets/util/rem.js'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
