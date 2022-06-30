import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-tiptap/lib/index.css';

// import upload from './api/upload'
// Vue.prototype.$uploadArticleImg = upload
Vue.use(ElementUI);
Vue.use(ElementTiptapPlugin, {
  lang: "zh", // see i18n
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
