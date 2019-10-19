<template>
    <div>
        <h2>Foo 组件</h2>
        <h2>{{count}}</h2>
        <button @click="increment">点击</button>
    </div>
</template>

<script>
import {mapState } from 'vuex';
export default {
    data(){
        return {
            // count:0
        }
    },
    mounted() {
        // console.log(this.$store.state.count)//得到全局里的store数据
    },
    computed: {
        ...mapState({
            count:state=>state.count
        })
    },
//    computed:{
//        count(){
//            return this.$store.state.count
//        }
//    },
    methods: {
        increment(){
            // this.$store.state.count++;//这样是不对的,这样写调试工具vuex无法记录增加记录
            this.$store.commit('increment')
        }
    },

}
</script>