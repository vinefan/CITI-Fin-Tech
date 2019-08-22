<template>
    <div>
        <feature v-for="(item, index) in items"
                 v-bind:key="index"
                 v-bind:item="item">
        </feature>
    </div>

</template>

<script>
  import Feature from "../components/Feature"
  export default {
      name: "Info",
      data: function (){
          return{
              items: [{
                  id: 1,
                  style: ["danger","#e96857"],
                  title: "为爱保驾护航",
                  icons: ["el-icon-finished","el-icon-connection","el-icon-s-custom","el-icon-s-marketing"],
                  sub_title: ["信誉保障","区块链平台资金信息全纪录","多方机构合力监督","实时查看善款信息"]
              },
                  {
                      id: 2,
                      style: ["primary","#59beec"],
                      title: "真公益",
                      icons: ["l-icon-document","el-icon-service","el-icon-sunny"],
                      sub_title: ["补偿机制","履约保障","爱心有效传递"]
                  },
                  {
                      id: 3,
                      style: ["warning","#f1c946"],
                      title: "智能合约",
                      icons: ["el-icon-position","el-icon-s-help"],
                      sub_title: ["赔款直接到达受助人手中","理赔精准高效"]
                  }
              ]
          }
      },
      components: {
          Feature
      }
  }
</script>

<style scoped>
div{
    width: 80%;
    margin:50px auto;
}
</style>
