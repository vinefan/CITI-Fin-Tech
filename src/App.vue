<template>
  <div id="app">
    <div class="headerWrapper">
      <Header></Header>
    </div>
    <Banner></Banner>
    <div id="nav">
      <el-menu mode="horizontal"
               router="true"
               class="nav"
               active-text-color="#3a83cc"
               default-active="/">
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

  /* header固定到顶部 */
  .headerWrapper{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    /* 顶部header透明 */
    filter: alpha(opacity=80); /* IE */ 
    -moz-opacity: 0.8; /* Firefox */
    opacity: 0.8; /* others */
  }

  #detail {
    margin-left: 20%;
  }
</style>
