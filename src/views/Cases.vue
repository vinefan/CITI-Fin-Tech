<template>
	<div id="cases-wrapper">
        <div class="search">
            <el-row :gutter="40">
                
                <el-col :span="12">
                    <el-input placeholder="请输入被保项目名" v-model="input" clearable>
                    </el-input>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" 
                               icon="el-icon-search"
                               v-on:click="search">
                        搜索
                    </el-button>
                </el-col>
            </el-row>
            
        </div>
        <div v-if="error">
            <insurance-case 
                v-for="(item, index) in items" 
                v-bind:key="index" 
                v-bind:item="item">
            </insurance-case>
        </div>
        <div id="!error">
            {{msg}} 
        </div>
    </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld"
// 组件名驼峰写法， html中可以替换成<hello-world>

import InsuranceCase from "../components/InsuranceCase"

    export default {
        name: "Cases",
        data: function(){
            return{
                items: [] ,
                error: false,
                msg: "loading. . .",
                input: ''
            }
        },
        components:{
            InsuranceCase
        },
        methods: {
            search: function() {
                var data = { "proj_name": this.input };
                alert(data.proj_name)
            }
        },
        // 组件被挂载后执行
        mounted() {
            this.axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                      this.error = true;
                      this.items = response
                })
                .catch(error => {
                    
                    this.msg = error
                })
        }
    }
</script>

<style scoped>
#cases-wrapper{
    width: 70%;
    margin: auto;
}
.search{
    margin-top: 50px;
    width: 95%;
    margin-left: auto;
    margin-bottom: 50px;
}
</style>
