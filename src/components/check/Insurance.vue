<template>
<!-- unfold 展开事件 -->
    <div class="insur-wrapper">
         <div class="insur-info-wrapper">
             <div class="proj-info">
                 <h3>项目信息</h3>
                 <ul class="list-title">
                     <li>项目名称:
                         <span>{{ proj_info.project_name}}</span>
                     </li>
                     <li>目标筹款金额:
                         <span>{{proj_info.project_money}} 元</span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li>项目发布平台：</li>
                     <li class="info">
                         <a :href="proj_info.project_url"><i class="el-icon-share"></i>点击查看</a>
                     </li>

                     <li>项目筹款时间：</li>
                     <li class="info"> {{ proj_info.project_raise_money_time }}天</li>

                     <li>项目持续时间：</li>
                     <li class="info"> {{ insur.insurance_valid_time }}天 </li>

                     <li>筹款存放银行：</li>
                     <li class="info">
                         {{ proj_info.project_bank }}
                     </li>

                     <li>银行账号： </li>
                     <li class="info">
                         {{ proj_info.project_bank_account }}
                     </li>

                     <li id="proj-reason">公益项目简介：</li>
                     <div class="info">
                         <p>{{ proj_info.project_reason }}</p>
                     </div>
                 </ul>
             </div>
             <!-- 公益组织 -->
             <div class="org-info">
                 <h3>投保人信息</h3>
                 <ul class="list-title">
                     <li>公益组织:
                         <span> {{applicant.organization}} </span>
                     </li>
                     <li>公益组织代码:
                         <span> {{applicant.org_id}} </span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li>地址:</li>
                     <li class="info"> {{ applicant.address }} </li>

                     <li>项目负责人：</li>
                     <li class="info"> {{ applicant.principal_name }} </li>

                     <li>负责人证件信息：</li>
                     <li class="info"> {{ applicant.principal_ident_info }} </li>

                     <li>负责人电话：</li>
                     <li class="info"> {{ applicant.principal_phone }} </li>
                     <li>负责人邮箱：</li>
                     <li class="info">] {{ applicant.principal_email }} </li>
                 </ul>
             </div>
             <!-- 公益项目 -->
             <div class="recipient-info">
                 <h3>受助人信息</h3>
                 <ul class="list-title">
                     <li>受助人:
                         <span> {{insur.recipient[0].name}} </span>
                     </li>
                     <li>性别:
                         <span> {{insur.recipient[0].sex}} </span>
                     </li>
                 </ul>
                 <ul class="list-detail" v-if="flag == 1">
                     <li>年龄：</li>
                     <li class="info"> {{recip[0].birthday}} </li>

                     <li>证件信息：</li>
                     <li class="info"> {{recip[0].certification_type}} </li>

                     <li>住址：</li>
                     <li class="info"> {{ recip[0].address }} </li>

                     <li>联系电话：</li>
                     <li class="info"> {{ recip[0].phone }} </li>

                     <li>银行账户：</li>
                     <li class="info"> {{ recip[0].bank_account }} </li>
                     <li>受助原因：</li>
                     <div class="info">
                         <p> {{recip[0].reason}} </p>
                     </div>
                 </ul>
             </div>
         </div>

        <div class="buttons">
            <el-button type="primary" :icon="insur_box_icon" @click="changeBoxStatus">{{insur_box_status}}</el-button> 
            <el-button type="success" icon="el-icon-check" @click="setResult('1')">通过</el-button>
            <el-button type="warning" icon="el-icon-circle-close" @click="setResult('-1')">拒绝</el-button>
        </div>

    </div>

</template>

<script>
export default {
    name: 'Insurance',
    props: ['insur','index'],
    data: function(){
        return{
            flag: 0,
            proj_info: '',
            applicant: '',
            recip: '',
            insur_box_status: "展开",
            insur_box_icon: "el-icon-arrow-down",
            censor_state: ''
        }
    },
    methods:{
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
        setResult: function(result){
            this.censor_state = result;
            this.returnCheckResult();
        },
        returnCheckResult: function(){
            var data = {
                "third_org_name": this.$store.state.supervisor_username,
                "project_id": this.insur.project_id,
                "censor_state": this.censor_state
            }
            var url = 'http://192.168.1.102:8080/WillBLOCK/thirdOrgIndex/censorInsurance ';
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
                    // 去掉当前这个保单
                    this.$emit('removeInsur',this.index)

                })
                .catch((error)=> {

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
    color: #333;
    font-size: 17px;
}
.list-title span{
    padding-left: 20px;
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
h3{
    text-align: center;
}
.proj-info h3{
    color: #1b95db;
}
.org-info h3{
    color: #e96857;
}
.recipient-info h3{
    color: #f8bf01;
}
ul li{
    list-style-type:none;
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
    float: left;
    width:31%;
    height: 98%;
    margin:0% 1%;
   border-left: 1px #dddddd solid;
   
}
</style>