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
          <li>
            <a href="/charity.html" @click="storeParams">
              <i class="el-icon-mouse"/>查看详情 ...
            </a>
          </li>
        </ul>
      </div>

      <!-- 撑起父元素 -->
      <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
    name: "InsurCase",
    props: ['item'],
    methods: {
      storeParams: function(){
        this.$store.commit("setProjName",this.item.project_id);
        this.$store.commit("setProjId",this.item.project.project_name);
      }
    }
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
  background-color: #eee;
  margin: 100px auto;
  border-radius: 10px;
  padding: 30px 20px;
}

/* 实现了图片等比缩放至200px, 居中显示, 不重复 */
.proj-picture{
  float: left;
  width: 200px;
  height: 200px;
  background: url("../assets/cat.jpg") center center no-repeat;
  background-size: 200px;
  margin-top: 30px;
  margin-left: 20px;
}

.content{
  float:right;
  width: 600px;
  /* height: 260px; 去掉高度设置，让高度随内容变化 */
  background-color: #ddd;
  margin-right: 40px;
  margin-top: 20px;
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