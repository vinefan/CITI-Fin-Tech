<template>
    <div class="money-tree-wrapper">
        <div class="show-tree">
            <div class="tree"></div>
            <div class="info">
                <div class="info-item">
                    <h4>默克尔树根</h4>
                    <p>{{money_tree.merkle_tree.merkleRootHash}}</p>
                </div>
                <div class="info-item">
                    <h4>捐款总额</h4>
                    <p>{{money_tree.merkle_tree.raised_money}} 元</p>
                </div>
                <div class="info-item">
                    <h4>捐款总人数</h4>
                    <p>{{money_tree.merkle_tree.donate_amount}} 人</p>
                </div>
                <div class="info-item" id="last-item">
                    <h4>捐款序列号可查询范围</h4>
                    <p>{{money_tree.merkle_tree.startNumber}} - {{money_tree.merkle_tree.endNumber}}</p>
                </div>
            </div>
        </div>
        
        <div class="search-box">
            <h4>填入捐款序列号进行查询</h4>
            <div class="box">
            <el-input placeholder="请输入内容" v-model="donor_id" clearable>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
        </div>

        <div class="error" v-if="isError">
            <h5>{{msg}}</h5>
        </div>
        <div class="tree-node" v-if="have_node_list">
            <el-table :data="node_list" stripe="true">
                <el-table-column prop="nodeID" label="节点序列号" width="250">
                </el-table-column>
                <el-table-column prop="donate_money" label="节点金额" width="250">
                </el-table-column>
                <el-table-column prop="txHash" label="节点散列值">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoneyTree",
    props: ['money_tree','proj_id'],
    data: function(){
        return{
            msg: "提示信息",
            iserror: false,
            have_node_list: false,
            donor_id: "",
            node_list: ''
        }
    },
    methods:{
        // 向服务器查询序列号
        search: function(){  
            // 发送信息
            var data = {
                "project_id": this.proj_id,
                "donor_id": this.donor_id
            };
            
            // 判断发送信息是否正确
            // 错误则提示错误原因
            if(data.donor_id == ""){
                this.$notify({
                    title: '警告',
                    message: '未填写序列号',
                    type: 'warning',
                    showClose: false,
                    duration: '1200',
                    offset: 100
                });
                return;
            }
            if(data.donor_id<this.money_tree.startNumber && data.donor_id>this.money_tree.endNumber){
                this.$notify({
                    title: '警告',
                    message: '填写序列号不存在',
                    type: 'warning',
                    showClose: false,
                    duration: '1200',
                    offset: 100
                });
                return;
            }
            // 发送请求
            var url = "http://114.67.105.154:9090/WillBLOCK/tree/moneypath";
            this.axios({
                method: "post",
                data: data,
                url: url
                })
                .then((response)=> {
                    this.node_list = response.data.money_path;
                    this.have_node_list = true;
                })
                .catch((error)=> {
                    this.$notify.error({
                        title: '错误',
                        message: error
                        });
                    this.have_node_list = false;
                })

        }
    }
}
</script>

<style scoped>
.tree-node .el-table{
    width: 96%;
    margin: 10px auto;
}
.el-table .cell{
    
    font-size: 20px;
}
.tree-node{
    width: 90%;
    border: 1px #dddddd solid; 
    margin: 50px auto;
    border-radius: 3px;
}
.search-box{
    
    height: 120px;
    margin-top: 120px;
    text-align: center;
}
.error{
    margin-bottom: 50px;
}
.error h5{
    margin: 0;
    padding: 0;
    text-align: center;
    color: #888;
}
.search-box .el-input{
    width: 70%;
    margin-right: 40px;
}
.search-box h4{
    text-align: center;
}
.box{
    margin-left: 26%;
    width: 60%;
    
}

.info-item{
    border-radius: 5px;
    height: 80px;
}

.info-item h4{
    color: #1574e0;
    margin-bottom: 10px;
    text-align: left;
}
.money-tree-wrapper{
    width: 88%;
    margin: 50px auto;
    /* height: 800px; */
    border: 1px solid #dddddd;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 4px #dddddd;
    padding-bottom: 50px;
}
.tree{
    float: left;
    width: 46%;
    min-width: 500px;
    margin: 20px 0px;
    height: 400px;
    background: url('../../assets/money_tree.png')  no-repeat;
    background-position-y: -40px;
    background-position-x: -40px;
    background-size: 610px 400px;
    border-right: 1px dotted #dddddd;
}
.info{
    display: inline-block;
    width: 43%;
    height: 380px;
    margin-top: 20px;
    padding-left: 30px;
}
.info p{
    padding-left: 5px;
    color: #444
}
</style>