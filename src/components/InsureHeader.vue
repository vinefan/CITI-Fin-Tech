<template>
  <div class="insure-header-wrapper">
      <div class="logo"></div>
      <div class="title"><p>善行保</p></div>
       <!-- 撑起父元素 -->
      <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
    name: "Header",
    data: function(){
        return{
            
        }
    }

}
</script>

<style scoped>

.insure-header-wrapper{
    margin-top: 30px;
    border-bottom: 1px dashed #aaa;
}
.logo{
    float: left;
    width: 90px;
    height: 90px;
    background: url("../assets/logo.png") center center no-repeat;
    background-size: 90px;

}
.title{
    float: left;
    width: 250px;
    height: 90px;
}
.title p{
    font-size: 55px;
   
    font-weight: 400;
    color: #7588db;
    margin-top: 3px;
    margin-left: -30px;
    height: 80px;
    text-align: center;
}

</style>