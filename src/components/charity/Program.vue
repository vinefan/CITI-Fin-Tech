<template>
    <div class="program-wrapper">
        <!-- 项目图片 -->
        <div class="proj-picture"></div>
        <div class="content">
            <ul>
                <li>
                    <span>[ 项目名 ]</span>
                    {{proj_info.project.project_name}}
                </li>
                <li>
                    <span>[ 筹款金额 ]</span>
                    {{proj_info.project.project_money}}元
                </li>
                <li>
                    <span>[ 公益组织 ]</span>
                    {{proj_info.applicant.organization}}
                </li>
                <li>
                    <span>[ 项目被保时间 ]</span>
                </li>
                <li class="switch-to-ali">
                    <el-button type="success" round><a :href="proj_info.project.project_url"> 前往公益项目发布平台</a></el-button>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Program",
    props: ['proj_info']
}
</script>

<style scoped>
.content .switch-to-ali{
    margin-top: 20px;
}
.program-wrapper{
    width: 88%;
    margin: 80px auto;
    height: 300px;
    border: 1px solid #dddddd;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 4px #dddddd;
}
.proj-picture{
  width: 30%;
  /* display: inline-block; */

  float: left;
  min-width: 220px;
  height: 280px;
  background: url("../../assets/sample.png") center center no-repeat;
  background-size: 220px;
  padding-right: 40px;
 }


.content{
    float: left;
    /* display: inline-block; */
    margin-top: 10px;
    width: 50%;
    height: 220px;
    /* border: 1px solid #333; */
}
.content ul{
    display: inline-block;
    text-align: left;
    padding-left: 0px;
}
.content li{
    list-style-type: none;
    height: 40px;
    font-size: 18px;
    color: #333;
    font-family: FangSong;
    font-weight: 600;
}
.content span{
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #1574e0;
}
.content a{
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}



</style>