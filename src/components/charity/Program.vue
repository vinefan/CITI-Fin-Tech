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
                <li>
                    <a :href="proj_info.project.project_url"
                        >
                        <i class="el-icon-d-arrow-right"></i>
                        <i class="el-icon-d-arrow-right"></i>
                        前往公益项目发布平台
                        
                    </a>
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
.program-wrapper{
    width: 88%;
    margin: 50px auto;
    height: 340px;
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
  background: url("../../assets/cat.jpg") center center no-repeat;
  background-size: 220px;
  margin-top: 30px;
  margin-left: 10px;
  padding-right: 40px;
  border-right: 1px solid #aaaaaa
}


.content{
    float: left;
    /* display: inline-block; */
    margin-top: 40px;
    width: 50%;
    height: 250px;
    /* border: 1px solid #333; */
}
.content ul{
    display: inline-block;
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
    display: inline-block;
    color: orange;
    text-decoration: none;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    margin-top: 30px;

}
.content a :hover{
    font-size: 30px;
}

</style>