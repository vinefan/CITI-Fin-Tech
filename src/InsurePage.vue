<template>
   <div class="container">
       <!-- logo -->
       <Header></Header>

       <!-- 步骤条 -->
        <el-steps :active="step" simple>
            <el-step title="估价" icon="el-icon-link" class="gujia"></el-step>
            <el-step title="立即投保" icon="el-icon-collection-tag"></el-step>
            <el-step title="提交保单" icon="el-icon-mouse"></el-step>
        </el-steps>

       <!-- 估价表单 -->
        <CalForm 
            :calPriceInfo="calPriceInfo"
            v-on:showPrice="showPrice"></CalForm>

        <!-- 估价信息展示 -->
        <ShowPrice 
            v-if="true"
            v-on:showInsurance="showInsurance"
            :fee="insurancePrice"></ShowPrice>

        <!-- 保单 v-if="isInsuring" -->
        <Insurance
            v-if="isInsuring"
            :calPriceInfo="calPriceInfo"
            :fee="insurancePrice"
            :org_code="org_code"
            :raise_time="raise_time"
            :charity_time="charity_time"></Insurance>
   </div>
</template>

<script>

import Header from './components/InsureHeader'
import CalForm from './components/CalForm'
import ShowPrice from './components/ShowPrice'
import Insurance from './components/InsuranceForm'

export default {
    name: "InsurePage",
    components: {
        Header,
        CalForm,
        ShowPrice,
        Insurance
    },
    data: function(){
        return{
            calPriceInfo: {
                organization: "",
                insurance_date: 0,
                project_money: "0"
                },
            isCalPrice: false,
            isInsuring: false,
            insurancePrice: 1746.23,
            step: 0,
            org_code: "",
            raise_time: 0,
            charity_time: 0
}
    },
    methods: {
        // function 缺参数
        showPrice: function(data){
        
            // 处理子组件传来的data 
            this.calPriceInfo = data.calPriceInfo;
            this.org_code = data.org_code;
            this.insurancePrice = data.fee;
            this.raise_time = data.raise_time;
            this.charity_time = data.charity_time;

            // 显示showPrice组件          
            this.isCalPrice = true;
            // 步骤条改变
            this.step = 1;
       
        },
        showInsurance: function(){
            this.isInsuring = true;
            this.step = 2;
        },
        lastStep: function(){
            this.step = 3;
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