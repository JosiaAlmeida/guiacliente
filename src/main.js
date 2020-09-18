import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router' 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const router = new VueRouter({
  routes
});

Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
