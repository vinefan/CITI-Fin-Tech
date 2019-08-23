
<template >
  <div class="container-wrapper">
    <img src="../assets/logo.png"  />

        <div class="container">

          <div class="product-title">
            <p class="title">
              <i class="el-icon-s-order">&nbsp;善行保</i>
            </p>
            <div class="cut-off-line" />
          </div>

          <div class="product-description">
            <p class="description-1">公益项目履约保证保险(共保体)</p>
            <p class="description-2">一款基于区块链技术的慈善保险</p>
          </div>
      </div>
        
      <div class="feature">
        <div class="charity">
          公益
        </div>

        <div class="plus_sign">+</div>

        <div class="blockchain">
          <p>区块链</p>
        </div>
        <div class="plus_sign">+</div>

        <div class="insurance">保险</div>
      </div>

      <div class="prose">
        <p> 每一份爱得到保障 </p>
        <p>每一份善款都得以最可靠的方式抵达 </p>
      </div>  
  </div>

</template>

<script>
    export default {
        name: "Banner",

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../common/font.css";

.prose{
  font-size: 23px;
  color:  rgb(245, 74, 51);
  font-family: FangSong ;
  font-weight:800;
}  
.prose p{
  margin: 20px 0;
}
.feature{
  width: 60%;
  height: 220px;
  margin: auto;
  margin-top: 100px;
}

.charity,
.blockchain,
.insurance{
  font-size: 35px;
  color: #ffffff;
  display: inline-block;
  width: 23%;
  height: 100px;
  border-radius: 40px;
  box-shadow: #eee  12px 10px;
}

.plus_sign{
  width: 11%;
  display: inline-block;
  font-size: 30px;
  color: #aaa
}

.charity{
background-color: #f1c946;
padding-top: 20px;
height: 80px;
}
.blockchain {
  background-color:#e96857 ;
}
.blockchain p{
  margin-bottom: 0px;
  margin-top: 20px;
}
.insurance{
  height: 80px;
  padding-top: 20px;
  background-color: #59beec;
}

img{
  width: 400px;
  height: 400px;
}
.title {
  padding-top: 2%;
}

.description-1 {
  font-size: 30px;
}

.description-2{
  font-size: 30px;
}

h1 {
  font-weight: 800;
  color: #ffffff;
  background: #ffa351;
}

h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.cut-off-line {
  height: 2px;
  background-color: #ffffff;
}

.container-wrapper {
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 160px;
  /* text-align: center; */

}

.container {
  background-color: rgb(207, 69, 51);
  border-radius: 10px;
  width: 100%;
  height: 30%;
  margin: auto;
  display: inline-block;
  box-shadow: darkgray 0px 0px 30px 5px;
}

.product-title {
  font-weight: 800;
  color: #ffffff;
  width: 50%;
  font-size: 35px;
  margin: auto;

}

.product-description {
  font-family: 华文行楷;
  font-weight: 600;
  color: #ffffff;
}


</style>
