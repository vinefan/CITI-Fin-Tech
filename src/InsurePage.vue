<template>
   <div class="container">
       <!-- logo -->
       <Header></Header>

       <!-- 步骤条 -->
        <el-steps :active="step" >
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
            v-if="isCalPrice"
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
            // calPriceInfo用于发送至服务器计算保费
            calPriceInfo: {
                organization: "",
                insurance_date: 0,
                project_money: "0"
                },
            // 标记是否计算出保费
            // 默认值：false
            // 若已计算出保费，isCalprice的值修改为true，进入下一步填写保单
            isCalPrice: false,
            // 标记用户是否确认投保
            // 默认值: false
            // 当用户点击“确认按钮”，isInsuring修改为true
            isInsuring: false,
            // 保存服务器端发来保费
            insurancePrice: 0,
            // 记录用户投保所处阶段
            step: 0,
            // 保存投保组织代码
            org_code: "",
            // 保存慈善项目筹款总金额
            raise_time: 0,
            // 保存慈善项目运营时长
            charity_time: 0
}
    },
    methods: {
        // 显示保费函数 
        // data：ShowPrice组件回传数据
        showPrice: function(data){
        
            // 处理子组件传来的data 
            this.calPriceInfo = data.calPriceInfo;
            this.org_code = data.org_code;
            this.insurancePrice = data.fee;
            this.raise_time = data.raise_time;
            this.charity_time = data.charity_time;

            // 显示showPrice组件          
            this.isCalPrice = true;
            // 修改步骤条进度
            this.step = 1;
       
        },
        // 显示保单第二部分
        showInsurance: function(){
            // 是否投保修改为true
            this.isInsuring = true;
            // 修改步骤条进度
            this.step = 2;
        },
        // 用户点击发送投保单后出发该函数
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
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 4px 4px 6px 4px #dddddd;
}
.el-steps{
    margin-top: 50px;
    width: 50%;
    height: 35px;   
    margin-bottom: 80px; 
}





</style>