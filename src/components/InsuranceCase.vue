<template>
  <div class="case">
    <div class="proj-left">
      <!-- 项目图片 -->
      <div class="proj-picture"></div>
      <ul>
        <li>
            <span>[项目]</span>
            {{item.project.project_name}}
        </li>
        <li>
            <span>[金额]</span>
            {{item.project.project_money}}元
          </li>
      </ul>
      
    </div>
      
      <!-- 项目简介 -->
      <div class="content">
        <ul>
          <li>
            <span>[项目简介]</span>
            <p>{{item.project.project_reason}}</p>        
          </li>
          <li>
            <span>[发起平台]</span>
            <p>{{item.applicant.organization}}</p>
          </li>
          
          <li>
            <span>[保险状态]</span>
          </li>
          <li>
              <router-link :to="{ name: 'linktocharity', params: { proj_name: item.project.project_name }}">
                <div class="click-but"> 
                  <el-button type="primary" round>查看链上信息</el-button>
                </div>
              </router-link>
          </li>
        </ul>
      </div>

      <!-- 撑起父元素 -->
      <div style="clear:both;"></div>
  </div>
</template>

<script>
import Charity from './charity/Charity.vue';

export default {
    name: "InsurCase",
    props: ['item'],
   
}
</script>

<style scoped>
.content a{
  display: inline-block;
  padding: 20px 0;
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  color: #096fce;
  font-family: Arial, Helvetica, sans-serif;
}
.content i{
  font-size: 25px;
  font-weight: 800;
}

.case{
  width: 90%;

  /* 设置最小宽度 */
  min-width: 880px;
  background-color: #ffffff;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 4px 4px 6px 4px #dddddd;
  padding: 30px 20px;
}

.proj-left{
  float: left;
}

/* 实现了图片等比缩放至200px, 居中显示, 不重复 */
.proj-picture{
  width: 200px;
  height: 200px;
  background: url("../assets/sample.png") center center no-repeat;
  background-size: 200px;
  margin-top: 30px;
  margin-left: 20px;
}

.content{
  float:right;
  width: 600px;
  /* height: 260px; 去掉高度设置，让高度随内容变化 */
  margin-right: 30px;
  margin-top: 20px;
}

.content li{
  /* list-style-type: none; */
  color: #333;
  font-size: 18px;
  margin-top: 14px;
  padding-right: 5px;
}
.proj-left ul,
.content ul{
  text-align: left;
  font-size: 16px;
  padding-left: 18px;
}

li{
  list-style-type: none;
}
.proj-left span,
.content span{
  font-size: 18px;
  color: #539cf0;
  font-weight: bold;
}
.content p{
  margin: 8px 0 24px ;
}

</style>