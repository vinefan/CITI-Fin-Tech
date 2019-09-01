<template>
<!-- unfold 展开事件 -->
    <div class="insur-wrapper">
         <div>
        <div class="proj-info">
            <h3>项目信息</h3>
            <ul class="list-title">
                <li>项目名称:</li>
                <li>目标筹款金额:</li>
            </ul>
            <ul class="list-detail"
                v-if="flag == 1">
                    <li v-for="(item,index) in object"
                        v-bind:key="index">
                        ????
                    </li> 
            </ul>
        </div>
        <div class="org-info">
            <h3>投保人信息</h3>
            <ul class="list-title">
                <li>公益组织:</li>
                <li>公益组织代码:</li>
            </ul>
            <ul class="list-detail"
                v-if="flag == 1">
                    <li v-for="(item,index) in object"
                        v-bind:key="index">
                        ????
                    </li> 
            </ul>
        </div>
        <div class="recipient-info">
            <h3>受助人信息</h3>
                <ul class="list-title">
                <li>受助人:</li>
                <li>:</li>
            </ul>
            <ul class="list-detail"
                v-if="flag == 1">
                    <li v-for="(item,index) in object"
                        v-bind:key="index">
                        ????
                    </li> 
            </ul>
        </div>
    </div>
    
    <div class="buttons">
        <el-button type="primary" :icon="insur_box_icon" @click="changeBoxStatus">{{insur_box_status}}</el-button> 
        <el-button type="success" icon="el-icon-check" >通过</el-button>
        <el-button type="warning" icon="el-icon-circle-close">拒绝</el-button>

    </div>

    </div>

</template>

<script>
export default {
    data: function(){
        return{
            flag: 0,
            object: [1,2,3,4,5,6,7,8,9,10],
            insur_box_status: "展开",
            insur_box_icon: "el-icon-arrow-down"
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

                // alert(this.isUnfolded)
            }
        }
    },
    mounted(){
        
    }

}
</script>

<style scoped>
.buttons{
    margin-top: 80px;
    margin-right: 50px;
    text-align: right;
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
    display: inline-block;
    width:31%;
    height: 98%;
    margin:0% 1%;
   border-left: 1px #dddddd solid;
   
}
</style>