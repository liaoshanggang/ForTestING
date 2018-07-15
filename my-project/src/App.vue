<template>
  <div id="app">
    <el-container>
      <!--父组件App.vue的msg:<br>-->
      <!-- <h1>{{msg}}</h1> -->
      <el-header>
        <el-row>
          <myHeader></myHeader>
        </el-row>
      </el-header>
      <el-main>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!--当你访问对应的路由 时，router-view 就被对应组件替换了。-->
        <router-view/>
      </el-main>

      <el-footer>
        <myFooter></myFooter>
      </el-footer>
    </el-container>
    <!--<vuedet></vuedet>-->

    <!-- <img src="./assets/logo.png"><br> -->
  </div>
</template>
<script>
import myFooter from "./components/footer.vue";
import myHeader from "./components/header.vue";
//import vuedet from './components/VueDet.vue'
export default {
    // name: 'App',
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: {
        myFooter,
        myHeader
        //,vuedet
    }
};
</script>

<style>
#content {
    height: 80%;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
<style>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

/* .el-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /*脚部的高度*/
/* background: #6cf; */
/* clear: both;
}  */

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}
</style>
