<template>
  <div class="appeal-insur-wrapper">
        <!-- 申诉信息表 -->
        <div class="appeal-info">
            <h3>项目ID </h3>
            <p> {{ appeal.project_id }} </p>

            <h3>项目承担组织 </h3>
            <p> {{ appeal.organization }} </p>

            <h3>合同编号</h3>
            <p> {{ appeal.insurance_id }} </p>

            <h3>申述次数</h3>
            <p> {{ appeal.appeal_times }} </p>
            
            <h3>参审人数</h3>
            <p> {{ appeal.censor_number }} </p>

            <h3>申诉原因 </h3>
            <p> {{ appeal.appeal_apply_reason }} </p>
        </div>
        <!-- 处理申诉表单按钮 -->
        <div class="buttons">
                <el-button  type="success" 
                            icon="el-icon-check" 
                            @click="returnAppealResult('1')">
                    同意
                </el-button>

                <el-button  type="warning" 
                            icon="el-icon-circle-close" 
                            @click="returnAppealResult('-1')">
                    驳回
                </el-button>
        </div>
  </div>
</template>

<script>
export default {
    name: "AppealInsur",
    props: ['appeal','index'],
    data: function(){
        return{
            
        }
    },
    methods:{
        // 返回申诉表单处理结果
        returnAppealResult: function(result){
            // 提取store.js中保存的当前用户的用户名与密码
            var data = {
                "third_org_name": this.$store.supervisor_username,
                "project_id": this.appeal.project_id,
                "censor_state": result
            };
            var url = 'http://10.64.111.98:8080/WillBLOCK/thirdOrgIndex/censorAppeal';
            // 发送请求
            this.axios({
                method: 'post',
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
                // 从申诉列表中移除该申述
                this.$emit('removeAppeal',this.index)
            })
            .cathc((error)=> {
                 this.$notify({
                    title: '警告',
                    message: '操作失败',
                    type: 'error',
                    showClose: false,
                    duration: '2200',
                });
            })
        }
    }
}
</script>

<style scoped>
.buttons{
    margin-left: 40px;
    margin-bottom: 30px;
}
.buttons .el-button{
    margin-right: 30px;
}
.appeal-insur-wrapper{
    width: 60%;
    /* height: 500px; */
    border: 1px solid rgb(217, 221, 224);
    box-shadow: 2px 2px 6px 6px rgb(230, 232, 233);
    margin-left: 22%;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 40px;
    margin-top: 30px;
}
.appeal-info h3{
    margin-top: 20px;
    margin-bottom: 8px;
    text-align: center;
    color: #2890f7;
}
.appeal-info p{
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    color: #777;
}

</style>