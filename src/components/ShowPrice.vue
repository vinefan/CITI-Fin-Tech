<template>
  <div class="show-price">
      <el-button 
        type="primary" 
        icon="el-icon-edit"
        @click="showInsurance">投保</el-button>
  </div>
</template>

<script>
export default {
    name: "ShowPrice",
    props: [],
    methods: {
        showInsurance: function () {
            // 触发父组件的 showInsurance 事件
            this.$emit('showInsurance')
          }
    }
}
</script>

<style scoped>

.show-price{
    width: 90%;
    margin: auto;
}

</style>