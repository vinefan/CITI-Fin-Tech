<template>
  <div class="cal-table">
        <div class="cal-table-wrapper">
            <div class="cal-form-item">
                <p>公益组织 (公益项目发起人) :</p>
                <el-input   
                    placeholder="请输入内容" 
                    v-model="calPriceInfo.organzination" 
                    clearable>
                </el-input>
            </div>

            <div class="cal-form-item">
                <p>公益项目期限 :</p>
                <el-select 
                    placeholder="请选择"
                    v-model="calPriceInfo.time">
                    <el-option
                        v-for="(item, index) in list"
                        :key="index"
                        :label="item"
                        :value="index">
                    </el-option>
                </el-select>

            </div>
            <div class="cal-form-item">
                <p>项目筹款目标 :</p>
                <el-input   
                    placeholder="如100.00" 
                    v-model="calPriceInfo.money" 
                    clearable>                            
                </el-input> 
                <span> (￥)</span>
                <el-button 
                    type="primary" 
                    icon="el-icon-search"
                    @click="calPrice">搜索</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalForm",
    props: ['calPriceInfo'],
    data: function(){
        return{
            list: [ "公益项目期限≤3个月",
                    "3个月＜公益项目期限 ≤6个月",
                    "6个月＜公益项目期限 ≤12个月",
                    "12个月＜公益项目期限 ≤24个月",
                    "24月≤公益项目期限"],
            calPrice_url: "",
            price: 0
        }
    },
    methods: {
        calPrice: function(){
            calPriceInfo = this.calPriceInfo;
            this.axios({
                method: 'post',
                url: this.calPrice_url,
                data: calPriceInfo
                })
                .then(function(response){
                    // 触发父组件监听事件，将子组件的数据传向父组件
                })
                .catch(function(){
                    // alert "发送失败"
                    // 清空表单
                })
        }
    }
}
</script>

<style scoped>
.cal-table-wrapper{
    border-left: 1px solid #999;
    padding: 30px 0 30px 40px;
}
.cal-table{
    width: 88%;
    margin: 50px auto;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #eeeeee;
    opacity: 0.9;
}
.cal-form-item p {
    display: inline-block;
    width: 28%;
    min-width: 240px;
    font-size: 18px;
    color: rgb(0, 128, 107);
}
.cal-form-item .el-input{
    display: inline-block;
    width: 30%;
}
.cal-form-item .el-button{
    margin-left: 100px;
}
</style>