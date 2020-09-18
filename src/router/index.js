// import Vue from 'vue'
// import Router from 'vue-router'

import Home from'../view/Home'
import kanbam from '../view/Kanbam/kanbam.vue'

// Vue.use(Router)

const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'kanbam',
        path:'/Kanbam',
        component: kanbam
    }
]

//const router= new Router({routes})

export default routes