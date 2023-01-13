import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
Vue.config.productionTip = false
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import cn from './assets/language/cn'
import en from './assets/language/en'
import yn from './assets/language/yn'
// new 一个新的 I18n 并返回
const i18n = new VueI18n({
  // set locale options: en or zh
  locale: localStorage.getItem('lang') || 'en', // 设置显示 中文
  // set locale messages
  messages: {
    en: en,
    cn: cn,
    yn: yn
  }
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
