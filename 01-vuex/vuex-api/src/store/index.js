import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:1,
        message:'你好'
    },
    mutations:{
        increment(state){
            state.count++;
        }
    }
})

export default store;