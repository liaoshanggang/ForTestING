<template>
  <div id="app">
    <header></header>
    <img src="./assets/logo.png"><br>
    <router-link to="/view1">Go to view1</router-link>
    <router-link to="/view2">Go to view2</router-link>
    <router-link to="/vue-det">Go to vuedet</router-link>
    <router-link to="/others">Go to others</router-link>
<!-- 路由出口 -->
<!-- 路由匹配到的组件将渲染在这里 -->
<!--当你访问对应的路由 时，router-view 就被对应组件替换了。-->
    <div id="content">
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
    <router-view/>
    </div>
    <!--父组件App.vue的msg:<br>-->
    <h1>{{msg}}</h1>
　　<firstcomponent></firstcomponent>
    <!--<vuedet></vuedet>-->
  </div>
</template>
<script>
import firstcomponent from './components/firstcomponent.vue'
import header from './components/header.vue'
//import vuedet from './components/VueDet.vue'
export default {
  // name: 'App',
  data () {
　　　　return {
　　　　　　msg: 'Welcome to Your Vue.js App'
　　　　}
　},
  components: { 
    firstcomponent
    ,header
    //,vuedet 
  }
}
</script>

<style>
#content{
  height:80%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
