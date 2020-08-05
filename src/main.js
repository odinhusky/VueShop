import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// 為了解決跨域的問題
axios.defaults.withCredentials = true;

// 導航守衛
router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  console.log('next', next);

  if (to.meta.requiresAuth) {
    console.log('這裡需要驗證');
    const api = `${process.env.VUE_APP_APIDOMAIN}/api/user/check`;
    // 確認是否在登入狀態
    axios.post(api).then((res) => {
      console.log('res', res);
      if (res.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
