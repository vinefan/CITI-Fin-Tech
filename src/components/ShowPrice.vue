<template>
  <div class="show-price">

      <div class="price-info">
		  <h1>{{ fee }} 元</h1>
	  </div>

      <el-button 
        type="primary" 
        icon="el-icon-edit"
        @click="showInsurance">投保</el-button>
  </div>
</template>

<script>
export default {
    name: "ShowPrice",
    props: ['fee'],
    methods: {
        showInsurance: function () {
            // 触发父组件的 showInsurance 事件
            this.$emit('showInsurance')
          }
    }
}
</script>

<style scoped>
.price-info{
	display: inline-block;
	width: 640px;
	/* height: 260px; 去掉高度设置，让高度随内容变化 */
	background-color: #ffffff;
	margin-right: 40px;
	margin-top: 20px;
	border-left: #aaa 1px solid;
	opacity: 0.8;
}

.el-button{
	display: inline-block;
}

.price-info h1{
	margin-left: 40px;
	color: rgb(36, 150, 243);
}

.show-price{
  width: 88%;
  /* 设置最小宽度 */
  min-width: 880px;
  margin-top: 100px;
  margin-left: 0px;
  border-radius: 10px;
}

</style>