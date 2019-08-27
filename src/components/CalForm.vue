<template>
  <div class="cal-table">
        <div class="cal-table-wrapper">
            <p class="alert" v-if="alert">
                <i class="el-icon-question"/>
                {{ msg }}
            </p>
            <div class="cal-form-item">
                <p>公益组织 (公益项目发起人) :</p>
                <el-input   
                    placeholder="请输入内容" 
                    v-model="calPriceInfo.organization" 
                    clearable>
                </el-input>
            </div>

            <div class="cal-form-item">
                <p>公益项目期限 :</p>
                <el-select 
                    placeholder="请选择"
                    v-model="calPriceInfo.insurance_date">
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
                    v-model="proj_money" 
                    clearable>                            
                </el-input> 
                <span> (￥)</span>
                <el-button 
                    type="primary" 
                    icon="el-icon-search"
                    @click="calPrice"
                    >搜索</el-button>
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
                    "公益项目期限 ≤6个月",
                    "公益项目期限 ≤12个月",
                    "公益项目期限 ≤24个月",
                    "24月≤公益项目期限"],
            calPrice_url: "http://192.168.1.105:9090/start/calPremium",
            proj_money: "",
            alert: false,
            msg: "",
            data: {
                calPriceInfo: "",
                org_code: "",
                fee: ""
            },
            
        }
    },
    watch: {
        proj_money: function () {
            // 判断金额输入框是否是一个数
            if(isNaN(this.proj_money)){
                this.msg = "请正确填写筹款金额"
                this.alert = true
            }
            else{
                this.alert = false;
            }

            // 判断是否数的精度是否大于2
            var money = this.proj_money*100;
            
            if(money!=Math.floor(money)){
                this.msg = "请正确填写筹款金额"
                this.alert = true
            }
            else{
                this.alert = false;    
            }
        }
    },

    methods: {
        calPrice: function(){
            var calPriceInfo = this.calPriceInfo;
            calPriceInfo.project_money = this.proj_money ;

            // 检查表单是否填写完整
            if(this.proj_money == "" || calPriceInfo.organization == ""){
                this.msg = "请填写完整表单";
                this.alert = true;
                return;
            }

            // 发送异步请求
            this.axios({
                method: 'post',
                url: this.calPrice_url,
                data: calPriceInfo
                })
                // function(response)
                .then((response)=> {
                    // 触发父组件监听事件 (showPrice)，
                    // 将子组件的数据传向父组件, 数据应当包括 price list[calPriceInfo.time]  
                
                    this.data.calPriceInfo = calPriceInfo;
                    this.data.fee = response.data.fee;
                    this.data.org_code = response.data.code; 
                    this.$emit("showPrice",this.data)
                })
                .catch((error)=> {
                    // 提示发送失败
                    this.msg = "发送失败" + error;
                    this.alert = true;
                })
        },
        
    }
}
</script>

<style scoped>
.alert{
    color: rgb(247, 58, 58);
    font-size: 18px;
    padding: 0;
    margin: 0;
}
.alert i{
    font-size: 20px;
}

.cal-table{
    width: 88%;
    margin: 50px auto;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #eeeeee;
    opacity: 0.9;
}

.cal-table-wrapper{
    border-left: 1px solid #999;
    padding: 30px 0 30px 40px;
}

.cal-form-item p {
    display: inline-block;
    width: 28%;
    min-width: 240px;
    font-size: 17px;
    color: #222222;
}
.cal-form-item .el-input{
    display: inline-block;
    width: 30%;
}
.cal-form-item .el-button{
    margin-left: 100px;
}
</style>