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
        
        
        <div v-if="!error">
            <insurance-case 
                v-for="(item, index) in items" 
                v-bind:key="index" 
                v-bind:item="item">
            </insurance-case>
        </div>
        <div id="error">
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
                items: [{
                    "project_id": "53130000586921578D_53130000586921578DA19002",
                    "project": {
                        "project_name": "困境女童",
                        "project_url": "https://oalipay-dl-django.alicdn.com/rest/1.0/image?fileIds=RDQVm6RQQVGlcG2hjC32WQAAACMAAQED&zoom=original",
                        "project_money": 210000.0,
                        "project_reason": "项目执行计划2019年此项目将继续执行，计划至少为5000名贫困女童送去温暖和保障，让孩子们可以快乐无忧的生活和学习，更加健康快乐地成长。(1)服务时间：2020年2月前；(2)帮扶地区：河北省石家庄市周边地区。(3)受助对象：需要心理支援的女童。"
                    },
                    "applicant": {
                        "organization": "河北省新联合公益基金会",
                        "org_id": "53130000586921578D",
                        "address": "石家庄市中山西路356号中电信息大厦5楼"
                    },
                    "recipient": [{
                        "name": "小雪",
                        "sex": "女",
                        "reason": "我没有一个朋友。\r\n这个看起来有点冷漠的姑娘叫小雪，今年10岁，是兄妹三人中的老大。妈妈患有狂躁性精神障碍，爸爸患有严重的胃病。全家挤在一个小房子里，受家庭环境影响，小雪性格内向，从不主动跟人说话。面对镜头，一直躲闪，采访她时，也只是勉强应付一下。本应该在最好的年纪享受快乐，却封闭了自我。没有朋友，没有笑容，有的，只是难过。"
                    }],
                    "insurance_fee": 0.0,
                    "insurance_url": "https://oalipay-dl-django.alicdn.com/rest/1.0/image?fileIds=1-aCTcfgQNm599VOuTpl_AAAACMAAQED&zoom=original",
                    "claim_state": false,
                    "claim_context": [{
                        "claim_reason": null,
                        "claim_money": 0.0,
                        "claim_times": 0,
                        "claim_date": null
                    }],
                    "insurance_state": true
                }],
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
                var project = { "proj_name": this.input };
                this.axios({
                    method: 'get',
                    url: 'http://192.168.1.101:8080/search',
                    data: project
                    })
                    .then((response)=> {
                        this.items = response
                        // console.log("search successful !")
                    })
                    .catch((error)=> {
                        this.error = false
                        this.msg = error
                    })
            }
        },
        // 组件被挂载后执行
        mounted() {
            this.axios
                .get('http://192.168.1.106:8080/centor')
                .then(response => {
                      this.error = true;
                      this.items = response.data;
                      console.log(this.items[0].project_id);    
                      this.msg = 'successful'
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
