<template>
   <div class="container">
       <!-- logo -->
       <Header></Header>

       <!-- 步骤条 -->
        <el-steps :active="0" simple>
            <el-step title="估价" icon="el-icon-link" class="gujia"></el-step>
            <el-step title="立即投保" icon="el-icon-collection-tag"></el-step>
            <el-step title="提交保单" icon="el-icon-mouse"></el-step>
        </el-steps>

       <!-- 估价表单 -->
        <CalForm :calPriceInfo="calPriceInfo"></CalForm>
        <!-- 撑起父元素 -->
      <div style="clear:both;"></div>
        
   </div>
</template>

<script>

import Header from './components/InsureHeader'
import CalForm from './components/CalForm'

export default {
    name: "InsurePage",
    components: {
        Header,
        CalForm
    },
    data: function(){
        return{
            calPriceInfo: {
                organzination: "",
                time: 0,
                money: ""
            },
            isCalPrice: false,
            isInsuring: false,
            insurancePrice: 0,
        }
    }

}
</script>

<style scoped>
.container{
    width: 80%;
    margin: 45px auto;
    padding: 10px 40px;
    min-width: 1000px;
    background-color: #f8f9fa;
    border-radius: 20px;
}
.el-steps{
    margin-top: 50px;
    width: 50%;
    height: 35px;    
}





</style>