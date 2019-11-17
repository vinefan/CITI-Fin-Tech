<template>
    <div class="appeal-tree-wrapper">
        <div class="show-tree">
            <div class="tree"></div>
            <div class="info">
                <div class="info-item">
                    <h4>默克尔树根</h4>
                    <p>{{appeal_tree.merkle_tree.merkleRootHash}}</p>
                </div>
                <div class="info-item">
                    <h4>申述人资金总占比</h4>
                    <el-progress :percentage="progress.percentage" 
                                 :color="progress.color">
                    </el-progress>
                </div>
                <div class="info-item">
                    <h4>申述总人数</h4>
                    <p>{{appeal_tree.merkle_tree.appeal_amount}}</p>
                </div>
                <div class="info-item" id="last-item">
                    <h4>申述序列号可查询范围</h4>
                    <p>{{appeal_tree.merkle_tree.startNumber}} - {{appeal_tree.merkle_tree.endNumber}}</p>
                </div>
            </div>
        </div>
        
        <div class="search-box">
            <h4>填入申述序列号进行查询</h4>
            <div class="box">
            <el-input placeholder="请输入内容" v-model="appeal_id" clearable>
                <el-select v-model="prefix" slot="prepend" placeholder="序列前缀">
                    <el-option label=" 1 -" value=" 1-"></el-option>
                    
                </el-select>
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
                <el-table-column prop="appeal_result" label="节点申述结果" width="250">
                </el-table-column>
                <el-table-column prop="txHash" label="节点散列值">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>

export default {
    name: "AppealTree",
    props: ['appeal_tree','proj_id'],
    data: function(){
        return{
            // 错误标识
            isError: false,
            // 服务器返回是否为空标识
            have_node_list: false,
            // 节点列表
            node_list: '',
            // 申诉项目ID
            appeal_id: '',
            progress: {
                color: '#f56c6c', percentage: 0
            },
            // 默克尔树前缀
            prefix: '',
        }
    },
    methods:{
        // 申诉查询
        search: function(){
            // 查询信息
            var data = {
                "project_id": this.proj_id,
                "appeal_id": this.appeal_id
            };
            var url = "http://114.67.105.154:9090/WillBLOCK/tree/appealpath";
            // 判断信息是否填写完整
            if(data.appeal_id == ""){
                this.$notify({
                    title: '警告',
                    message: '未填写序列号',
                    type: 'warning',
                    showClose: false,
                    duration: '1200',
                    offset: 100
                });
                return;
            };
            // 判断查询信息是否非法
            if(data.appeal_id<this.appeal_tree.startNumber && data.appeal_id>this.appeal_tree.endNumber){
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
            // 添加前缀
            data.appeal_id = this.prefix + data.appeal_id;
            // 发送请求
            this.axios({
                method: "post",
                data: data,
                url: url
                })
                .then((response)=> {
                    this.node_list = response.data.appeal_path;
                    this.have_node_list = true;
                })
                .catch((error)=> {
                    this.$notify.error({
                        title: '错误',
                        message: error.data
                        });
                    this.have_node_list = false;
                })

        }
    },
    mounted(){
        this.progress.percentage = this.appeal_tree.merkle_tree.appeal_result*100;
    }
}
</script>

<style scoped>
 .el-select{
     width: 120px;;
 }
.el-progress{
    width: 90%;
}
.appeal-tree-wrapper{
    width: 88%;
    margin: 120px auto;
    /* height: 400px; */
    border: 1px solid #dddddd;
    border-radius: 6px;
    box-shadow: 2px 2px 8px 4px #dddddd;
    padding-bottom: 50px;
}
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
    height: 80px;
    padding-left: 0px;
}

.info-item h4{
    color: #1574e0;
    
}

.tree{
    float: left;
    width: 45.5%;
    min-width: 540px;
    margin: 20px 0px;
    height: 400px;
    background: url('../../assets/appeal_tree.png')  no-repeat;
    background-position-y: -50px;
    background-position-x: -40px;
    background-size: 610px 420px;
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