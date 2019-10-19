<template>
  <div id="app">
    <!-- <hello-world msg="Welcome to Your Vue.js App"/> -->
    <foo></foo>
    <bar></bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';


export default {
  name: 'app',
  components: {
    // HelloWorld
    Foo,
    Bar
  }
}
</script>

<style>

</style>
