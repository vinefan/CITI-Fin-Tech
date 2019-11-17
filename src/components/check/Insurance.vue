<template>

    
<!-- unfold 展开事件 -->
    <div class="insur-wrapper">
         <div class="insur-info-wrapper">
             <div class="proj-info">
                 <h3>项目信息</h3>
                 <ul class="list-title">
                     <li class="item-title">
                         项目名称:
                         <span>{{ proj_info.project_name}}</span>
                     </li>
                     <li  class="item-title">
                         目标筹款金额:
                         <span>{{proj_info.project_money}} 元</span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li class="item-title">项目发布平台：</li>
                     <li class="info">
                         <a :href="proj_info.project_url"><i class="el-icon-share"></i>点击查看</a>
                     </li>

                     <li class="item-title">项目筹款时间：</li>
                     <li class="info"> {{ proj_info.project_raise_money_time }}天</li>

                     <li class="item-title">项目持续时间：</li>
                     <li class="info"> {{ insur.insurance_valid_time }}天 </li>

                     <li class="item-title">筹款存放银行：</li>
                     <li class="info">
                         {{ proj_info.project_bank }}
                     </li>

                     <li class="item-title">银行账号： </li>
                     <li class="info">
                         {{ proj_info.project_bank_account }}
                     </li>

                     <li id="proj-reason"  class="item-title">公益项目简介：</li>
                     <div class="info">
                         <p>{{ proj_info.project_reason }}</p>
                     </div>
                 </ul>
             </div>
             <!-- 公益组织 -->
             <div class="org-info">
                 <h3>投保人信息</h3>
                 <ul class="list-title">
                     <li class="item-title">公益组织:
                         <span> {{applicant.organization}} </span>
                     </li>
                     <li class="item-title">公益组织代码:
                         <span> {{applicant.org_id}} </span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li class="item-title">地址:</li>
                     <li class="info"> {{ applicant.address }} </li>

                     <li class="item-title">项目负责人：</li>
                     <li class="info"> {{ applicant.principal_name }} </li>

                     <li class="item-title">负责人证件信息：</li>
                     <li class="info"> {{ applicant.principal_ident_info }} </li>

                     <li class="item-title">负责人电话：</li>
                     <li class="info"> {{ applicant.principal_phone }} </li>
                     <li class="item-title">负责人邮箱：</li>
                     <li class="info">] {{ applicant.principal_email }} </li>
                 </ul>
             </div>
             <!-- 公益项目 -->
             <div class="recipient-info">
                 <h3>受助人信息</h3>
                 <ul class="list-title">
                     <li class="item-title">受助人:
                         <span> {{insur.recipient[0].name}} </span>
                     </li>
                     <li class="item-title">性别:
                         <span> {{insur.recipient[0].sex}} </span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li class="item-title">年龄：</li>
                     <li class="info"> {{recip[0].birthday}} </li>

                     <li class="item-title">证件信息：</li>
                     <li class="info"> {{recip[0].certification_type}} </li>

                     <li class="item-title">住址：</li>
                     <li class="info"> {{ recip[0].address }} </li>

                     <li class="item-title">联系电话：</li>
                     <li class="info"> {{ recip[0].phone }} </li>

                     <li class="item-title">银行账户：</li>
                     <li class="info"> {{ recip[0].bank_account }} </li>
                     <li class="item-title">受助原因：</li>
                     <div class="info">
                         <p> {{recip[0].reason}} </p>
                     </div>
                 </ul>
             </div>
         </div>

        <div class="buttons">
            <el-button type="primary" :icon="insur_box_icon" @click="changeBoxStatus">{{insur_box_status}}</el-button> 
            <el-button type="success" icon="el-icon-check" @click="setResult('1')">通过</el-button>
            <el-button type="info" icon="el-icon-circle-close" @click="setResult('-1')">拒绝</el-button>
        </div>

    </div>

</template>

<script>
export default {
    name: 'Insurance',
    props: ['insur','index'],
    data: function(){
        return{
            // 标记该投保保单是“收起”状态还是“展开”状态
            // 默认值：0（收起） 
            flag: 0,
            // 保存投保项目信息
            proj_info: '',
            // 保存公益组织信息
            applicant: '',
            // 保存受助人信息
            recip: '',
            // 保存保单状态按钮值
            insur_box_status: "展开",
            // 保单状态按钮图标值
            insur_box_icon: "el-icon-arrow-down",
            censor_state: ''
        }
    },
    methods:{
        // 切换保单状态
        // 当前保单状态为“收起”，切换为“展开”
        // 当前保单状态为“展开”，切换为“收起”
        changeBoxStatus: function(){
            if(this.flag == 0){
                this.insur_box_status = "收起";
                this.insur_box_icon = "el-icon-arrow-up";
                this.flag = 1;
            }
            else{
                this.insur_box_status = "展开";
                this.insur_box_icon = "el-icon-arrow-down";
                this.flag = 0;
            }

        },
        // 点击“通过”、“拒绝”按钮触发setResult()
        // result为对应传入处理结果
        setResult: function(result){
            this.censor_state = result;
            this.returnCheckResult();
        },
        // 向服务器发送当前保单处理结果
        returnCheckResult: function(){
            // 返回的处理信息
            var data = {
                "third_org_name": this.$store.state.supervisor_username,
                "project_id": this.insur.project_id,
                "censor_state": this.censor_state
            }
            // 异步请求
            var url = 'http://114.67.105.154:9090/WillBLOCK/thirdOrgIndex/censorInsurance ';
            this.axios({
                method: "post",
                data: data,
                url: url
                })
                .then((response)=> {
                    // 提示用户执行成功
                    this.$notify({
						title: '成功',
						message: '操作成功',
						type: 'success',
						showClose: false,
						duration: '2200',
                    });
                    // 从管理界面去掉当前这个保单
                    this.$emit('removeInsur',this.index)

                })
                .catch((error)=> {
                    // 提示错误信息
                    this.$notify({
						title: '警告',
						message: '操作失败',
						type: 'error',
						showClose: false,
						duration: '2200',
                    });
                })
        }
    },
    mounted(){
        this.proj_info = this.insur.project;
        this.applicant = this.insur.applicant;
        this.recip = this.insur.recipient;
    }
    
}
</script>

<style scoped>
.insur-info-wrapper{
    margin-bottom: 50px;
}
.list-detail{
    height: 600px;
}
li{
    color: #444;
    font-size: 17px;
    /* font-weight: bold; */
}
.list-title span{
    padding-left: 20px;
    font-weight: 400;
    color: #777;
}

.info,
.info a,
.info p
{
    color: #777;
    text-decoration: none;
    padding: 7px 5px 16px;
    font-size: 16px;
}
.info p{
    margin:0;
}
.item-title{
    font-weight: bold;
}
#proj-reason{
    margin-top: 15px;
}

.buttons{
    margin-right: 50px;
    text-align: right;
}
.el-button{
    margin-top: 50px;
}
/* h3{
    text-align: center;
    
} */
.proj-info h3{
    color: #1b95db;
   
}
.org-info h3{
    color: #1b95db;
}
.recipient-info h3{
    color: #1b95db;
}
ul li{
    list-style-type:none;
}
ul{
    padding-left: 0px;
}
.insur-wrapper{
    width: 85%;
    /* 不能写死高度 */
    /* height: 200px; */
    margin-left: 10%;
    margin-bottom: 50px;
    background-color:#ffffff;
    border-radius: 10px;
    border: 1px #dddddd solid;
    box-shadow: 2px 2px 8px 4px #dddddd;
    padding: 20px 10px;
}

.org-info,
.proj-info,
.recipient-info{
    padding-left: 10px;
    float: left;
    width:30%;
    height: 98%;
    border-left: 1px #dddddd dotted;
    margin-left: 20px;
   
}
</style>