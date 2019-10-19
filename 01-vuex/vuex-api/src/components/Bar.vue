<template>
    <div>
        <h2>Bar 组件</h2>
        <h2>{{count}}</h2>
        <button @click="increment">点击</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // count:0
        }
    },
    methods: {
        increment(){
            // this.count++;
            this.$store.commit('increment')
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },

}
</script>