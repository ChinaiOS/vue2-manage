import '@babel/polyfill';
// import Vue from 'vue'
// import App from './App'
// // import router from './router'
// import store from './store/'
// // import ElementUI from 'element-ui';
// // import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false;

// Vue.use(ElementUI);

// new Vue({
// 	el: '#app',
// 	// router,
// 	store,
// 	template: '<App/>',
// 	components: { App }
// })


import { createApp } from 'vue'
import App from './App.vue'

// import router from './router/index'
createApp(App)
    .use(router)
    .mount('#app')

