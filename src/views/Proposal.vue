<template>
	<div class="proposal">
     <p class="insurtitle">【基本信息】</p>
     <p class="insurdetail">本产品名称为“善行保”公益项目履约保证保险，由xx保险公司承保，面向全国(除港、澳、台地区)销售。</p>
     
     <p><span lang="EN-US" style="font-size: medium; color: rgb(0, 0, 0); font-family: 宋体;"><o:p>&nbsp;</o:p></span></p>

     <p class="insurtitle">【条款适用】</p>
     <p class="insurdetail">
         <span>本产品适用条款如下：</span>
         <br>
         <span>《“善行保”公益项目履约保证保险条款》</span>
         </p>
 
    <p><span lang="EN-US" style="font-size: medium; color: rgb(0, 0, 0); font-family: 宋体;"><o:p>&nbsp;</o:p></span></p>


     <p class="insurtitle">【产品介绍】</p>
     <p class="insurlist">
         <ol>
             <li>投保人：凡在中华人民共和国境内（不包括港澳台地区）依法设立并登记注册的，持有明确可行公益项目并且已经拟定切实可行公益项目计划书并获责任主管机构审批通过的社团、组织及机构</li>
             <li>被保险人：公益项目指定受助人；</li>
             <li>保险期限：本产品保险期限为第一个捐款人发生捐款行为起至最后一个受捐人得到善款保障止；</li>
             <li>受益人：法定受益人</li>
             </ol>
     </p>
     
    <p><span lang="EN-US" style="font-size: medium; color: rgb(0, 0, 0); font-family: 宋体;"><o:p>&nbsp;</o:p></span></p>

     <p class="insurtitle">【保障范围】</p>
     <p class="insurlist">
       <ol>
           <li>保险期间内，慈善组织违反慈善项目约定不履行或者不作为行为导致在本合同保险期间内，捐款人所捐的资金（以下统称“被保险产品”）在保险单载明的公益项目期限 内发生占有、挪用、挥霍、私吞、截留资金或款项流向混乱等保险事故造成慈善组织信誉受损时，保险人将按照保险合同的规定，以保险单所载明的保险金额为限，对慈善组织依法承担的信誉损失承担赔偿责任。</li>
           <li>保险事故发生后，被保险人因保险事故而被提起仲裁或者诉讼的，对应由被保险人支付的仲裁或诉讼费用以及事先经保险人书面同意支付的其他必要的、合理的费用（以下简称“法律费用”），保险人按照本保险合同约定负责赔偿。</li>
       </ol>
     </p>
     
    <p><span lang="EN-US" style="font-size: medium; color: rgb(0, 0, 0); font-family: 宋体;"><o:p>&nbsp;</o:p></span></p>

     <p class="insurtitle">【责任免除】</p>
     <p class="insurdetail">
        <span> 投保前，请务必阅读本保险适用的保险条款中的责任免除部分。以下为部分责任免除条款，下列情形下的损失、费用和责任，保险人不负责赔偿。（全部免责条款详见适用保险条款）：</span>
        <ol>
            <li>被保险人未依法取得民政部门或法律规定的其他责任主管机构承认的合法地位及从事相关活动的许可，或持伪造、变造、过期的许可证，或许可证被撤销、吊销或注销的；</li>
            <li>被保险人从事与其资质等级或许可范围不符的活动；</li>
            <li>被保险人从事法律、法规或规定禁止从事的活动，或未按照法律、法规或规定获批准方式开展公益项目；</li>
            <li>被保险人持有的公益项目未依法取得民政部门或法律规定的其他责任主管机构批准；</li>
            <li>投保人或被保险人在投保时已经知道或可以合理预见索赔发生的；</li>
            <li>款项在从捐款方到发起方的资金流转过程中发生的，导致其未顺利进入发起方账户的损失；</li>
            <li>善款落实效果已达成公益项目计划金额但未达宣传效果的部分；</li>
            <li>因本保险所在的生态圈出现的技术问题崩溃而造成资金损失的部分；</li>
        </ol> 
     </p>
    </div>
</template>

<script>
    export default {
        name: "Proposal"
    }
</script>

<style scoped>
.proposal{
  padding:2rem;
  width:70%;
  margin:auto;
  padding-bottom:10%;
}
.insurtitle{
    font-size:large;
    color:rgb(0,0,0);
    text-align:left;
    font-weight:bold;
    font-family:'宋体';   
}
.insurdetail{
    font-size:medium;
    color:rgb(0,0,0);
    text-align:left;
    font-family:'宋体';
    padding-left:45px;
    line-height: 36px;
}
.insurlist{
    font-size:medium;
    color:rgb(0,0,0);
    text-align:left;
    font-family:'宋体';
    padding-left:30px;
    line-height: 36px;
}
.insurlistnote{  
    color:red;   
}
</style>
