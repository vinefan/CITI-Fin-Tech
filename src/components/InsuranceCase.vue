<template>
  <div class="case">
      <!-- 项目图片 -->
      <div class="proj-picture"></div>
      <!-- 项目简介 -->
      <div class="content">
        <ul>
          <li>
            <span>[项目名]</span>
            {{item.project.project_name}}
          </li>
          <li>
            <span>[项目简介]</span>
            {{item.project.project_reason}}
          </li>
          <li>
            <span>[发布人]</span>
            {{item.applicant.organization}}
          </li>
          <li>
            <span>[金额]</span>
            {{item.project.project_money}}￥
          </li>
          <li>
            <span>[保险状态]</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "InsurCase",
    props: ['item']
}
</script>

<style scoped>
.case{
  width: 90%;
  height: 300px;
  background-color: #eee;
  margin: 100px auto;
  border-radius: 10px;
 
}

/* 实现了图片等比缩放至200px, 居中显示, 不重复 */
.proj-picture{
  float: left;
  width: 200px;
  height: 200px;
  background: url("../assets/cat.jpg") center center no-repeat;
  background-size: 200px;
  margin-top: 50px;
  margin-left: 20px;
}

.content{
  float:right;
  width: 600px;
  height: 260px;
  background-color: #ddd;
  margin-top: 20px;
  margin-right: 40px;
  border-left: #aaa 1px solid;
  opacity: 0.8;
}

.content li{
  list-style-type: none;
  font-family: FangSong;
  color: #000;
  font-size: 18px;
  margin-top: 14px;
  padding-right: 5px;
}
.content ul{
  text-align: left;
}
li span{
  color: #2c86cf;
  font-weight: 800;
}

</style>