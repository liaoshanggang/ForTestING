<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link>
    <router-link to="/others">Go to others</router-link>
<!-- 路由出口 -->
<!-- 路由匹配到的组件将渲染在这里 -->
<!--当你访问对应的路由 时，router-view 就被对应组件替换了。-->
    <router-view/>
    <!--父组件App.vue的msg:<br>-->
    <h1>{{msg}}</h1>
　　<firstcomponent></firstcomponent>
  </div>
</template>
<script>
import firstcomponent from './components/firstcomponent.vue'
export default {
  // name: 'App',
  data () {
　　　　return {
　　　　　　msg: 'Welcome to Your Vue.js App'
　　　　}
　},
  components: { 
    firstcomponent 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
