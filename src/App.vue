
<template>
  <div id="app">
    <!-- 页头 -->
    <div class="header-banner">
      <Header v-on:changeRoute="changeRoute"></Header>
    </div>
    
    <!-- 导航栏 -->
    <div id="nav">
      <el-menu mode="horizontal"
               router="true"
               class="nav"
               active-text-color="#0ca1a0"
               :default-active="active_route">
        <el-menu-item index="/" id="detail">产品介绍</el-menu-item>
        <el-menu-item index="/proposal">保险条例</el-menu-item>
        <el-menu-item index="/claim">理赔流程</el-menu-item>
        <el-menu-item index="/cases">被保案例</el-menu-item>
      </el-menu>
    </div>
    <!-- 导航栏对应视图 -->
    <router-view></router-view>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "./components/Footer";
  import Header from "./components/Header";

  export default {

    name: 'app',
    components: {
      Header,
      Footer,
    },
    data: function(){
      return{
        // active_route保存当前路径
        active_route: "/"
      }
    },
    methods:{
      // 
      changeRoute: function(){
        this.$router.push("/cases");
        this.active_route = "/cases";
      }
    },
    // App组件挂载时触发函数
    // 修改当前路径值
    // 如果跳转至 /cases ，则滚动至首页的1300px位置
    mounted(){
      this.active_route = this.$route.path;
      if(this.active_route =="/cases"){
        window.scrollTo(0,1300);
      }
    }
      
  }
</script>
<style>

  #app {
    text-align: center;
    color: #555;
    
  }

  /* 没有效果，Chrome显示还是20px*/
  .el-menu{
    font-size: 50px;

  }


  #nav {
    width: 76%;
    margin: auto;
    margin-top: 200px;
  }

  .header-banner{
  height: 1500px;
    background: url('./assets/banner.png')center center no-repeat;
    background-size: 100% ;
    background-position-y: -20px;
  }

  .el-menu-item {
    width: 17%;
    font-size: 21px !important;
    font-family: 华文行楷;

  }


  #detail {
    margin-left: 20%;
  }
</style>
