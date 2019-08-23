<template>
  <div id="app">
    <Header></Header>

    <Banner></Banner>
    
    <div id="nav">
      <el-menu mode="horizontal"
               router="true"
               class="nav"
               active-text-color="#3a83cc"
               :default-active="active_route"
              >
        <el-menu-item index="/" id="detail">产品介绍</el-menu-item>
        <el-menu-item index="/proposal">保险条例</el-menu-item>
        <el-menu-item index="/claim">理赔流程</el-menu-item>
        <el-menu-item index="/cases">被保案例</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "./components/Footer";
  import Banner from "./components/Banner"
  import Header from "./components/Header";
  export default {

    name: 'app',
    components: {
      Header,
      Footer,
      Banner
    },
    data: function(){
      return{
        active_route: ""
      }
    },
    mounted(){
      this.active_route = this.$route.path
    }
      
  }
</script>
<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #888888;
    
  }

  /* 没有效果，Chrome显示还是20px*/
  .el-menu{
    font-size: 50px;

  }


  #nav {
    width: 70%;
    margin: auto;
    margin-top: 200px;
  }


  .el-menu-item {
    width: 15%;
    font-size: 22px !important;
    font-family: 华文行楷;

  }


  #detail {
    margin-left: 20%;
  }
</style>
