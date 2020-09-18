import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {count: 0},
    mutations:{
        setCount(state, playload){
            console.log('Chamou o SetCount', playload)
            state.count=playload
        }
    }
})

export default store