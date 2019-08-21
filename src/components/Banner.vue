
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
