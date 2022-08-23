import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vue2Components from '../dist/vue2-components.umd.min';
import '../dist/vue2-components.css';
Vue.config.productionTip = false;

Vue.use(vue2Components);
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
