<template>
    <div class="info-wrapper">
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
                  style: ["danger","#107cad"],
                  title: "为爱保驾护航",
                  icons: ["el-icon-finished","el-icon-connection","el-icon-s-custom","el-icon-s-marketing"],
                  sub_title: ["即时补偿信誉保障","资金信息全程记录","多方机构合力监督","实时查看善款信息"],
                  width: 470
                },
                {
                    id: 2,
                    style: ["primary","#52adef"],
                    title: "践行落实真公益",
                    icons: ["el-icon-document-copy","el-icon-aim","el-icon-view","el-icon-lock"],
                    sub_title: ["发挥保险补偿机制","慈善组织履约保证","信用死角完美覆盖","守护爱心有效传递"],
                    width: 350
                },
                {
                    id: 3,
                    style: ["warning","#4eddc6"],
                    title: "区块链智能合约",
                    icons: ["el-icon-microphone","el-icon-s-help","el-icon-s-custom","el-icon-s-claim"],
                    sub_title: ["公开透明不可篡改","多方审核决策准确","赔款直达受助人处","保险理赔精准高效"],
                    width: 600
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
    margin:auto ;
    margin-top: 60px;
    margin-bottom: 20px;

}
.info-wrapper{
    padding-bottom: 100px;
}
</style>
