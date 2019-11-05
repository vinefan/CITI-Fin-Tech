<template>
  <div class="cal-table">
        <div class="cal-table-wrapper">
            <!-- 错误填写提示信息 -->
            <p class="alert" v-if="alert">
                <i class="el-icon-question"/>
                {{ msg }}
            </p>
            <!-- 公益组织名 -->
            <div class="cal-form-item">
                <p>公益组织 (公益项目发起人) :</p>
                <el-input   
                    placeholder="请输入内容" 
                    v-model="calPriceInfo.organization" 
                    clearable>
                </el-input>
            </div>
            <!-- 慈善项目筹款时间 -->
             <div class="cal-form-item">
                <p>筹款时间区间:</p>
                <el-date-picker
                    v-model="raise_money_quantum"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy/MM/dd"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </div>
            <!-- 慈善项目运营时间 -->
            <div class="cal-form-item">
                <p>公益项目区间:</p>
                <el-date-picker
                    v-model="charity_quantum"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy/MM/dd"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </div>
            <!-- 慈善项目筹款目标 -->
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
                    >估价</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalForm",
    // 父组件InsurePage传来数据
    // calPriceInfo: {
    //             organization: "",
    //             insurance_date: 0,
    //             project_money: "0"
    //             },
    props: ['calPriceInfo'],
    data: function(){
        return{
            // 保存筹款开始时间和终止时间
            raise_money_quantum: [],
            // 保存慈善项目运行的开始时间和结束时间
            charity_quantum: [],
            // 公益项目可选投保区间列表
            list: [ {index: 0, content: "公益项目时间 ≤ 90天" },
                    {index: 1, content: "公益项目时间 ≤ 180天" },
                    {index: 2, content: "公益项目时间 ≤ 360天" },
                    {index: 3, content: "公益项目时间 ≤ 720天" },
                    {index: 4, content: "720天 ≤ 公益项目时间"}  
                ],
            calPrice_url: "http://10.64.111.98:8080/WillBLOCK/calPremium ",
            proj_money: "",
            // 表示用户填写保单是否错误
            // 默认：false
            // 触发错误时被修改为true
            alert: false,
            // 保存错误提示信息
            msg: "",
            // 保存服务器端计算完保费后发来的信息，用于回传给父组件Insurepage
            data: {
                calPriceInfo: "",
                org_code: "",
                fee: "",
                raise_time: 0,
                charity_time: 0
            },
            
        }
    },
    watch: {
        // 监听用户输入项目金额是否合法
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
        // 错误提示函数
        // alert_msg：当前错误信息
        error: function(alert_msg){
			this.$notify({
                    title: '警告',
                    message: alert_msg,
                    type: 'warning',
                    showClose: false,
                    duration: '2200',
                    });
        },
        // 用户点击查询保费后触发函数
        calPrice: function(){
            var calPriceInfo = this.calPriceInfo;
            calPriceInfo.project_money = this.proj_money ;
            // 筹款时间取出
            var raise_start = new Date(this.raise_money_quantum[0]);
            var raise_end = new Date(this.raise_money_quantum[1]);
            // 项目时间取出
            var charity_start = new Date(this.charity_quantum[0]);
            var charity_end = new Date(this.charity_quantum[1]);

            // 检查表单是否填写完整
            if( this.proj_money == '' || calPriceInfo.organization == ''
                || raise_start == ''  || raise_end == '' 
                || charity_start == '' || charity_end == '')
            {
                this.msg = "请填写完整表单";
                this.error(this.msg);
                return;
            }
            
            // 检查筹款时间区间是否为项目时间区间的子集
            if(raise_start < charity_start || raise_end > charity_end){
                this.msg = "筹款时间应当在项目时间区间内";
                this.error(this.msg);
                return;
            }
            // 计算insurance_date 
            var date = charity_end.getDate() - charity_start.getDate();      
            if(date <= 90 ){
                calPriceInfo.insurance_date = 0
            }
            if(90 < date && date <= 180){
                calPriceInfo.insurance_date = 1
            }
            if(180 < date && date <=360){
                calPriceInfo.insurance_date = 2
            }
            if(360 < date && date <=720){
                calPriceInfo.insurance_date = 3
            }
            if(720 < date){
                calPriceInfo.insurance_date = 4
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
                    // 筹款天数
                    this.data.raise_time = raise_end.getDate() - raise_start.getDate();
                    // 项目天数
                    this.data.charity_time = date;
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