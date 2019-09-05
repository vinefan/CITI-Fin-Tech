<template>
    <div class="appeal-tree-wrapper">
        <div class="show-tree">
            <div class="tree"></div>
            <div class="info">
                <div class="info-item">
                    <h4>默克尔树根</h4>
                    <p>{{appeal_tree.merkleRootHash}}</p>
                </div>
                <div class="info-item">
                    <h4>申述人资金总占比</h4>
                    <el-progress :percentage="20" :color="progress.color"></el-progress>
                </div>
                <div class="info-item">
                    <h4>申述总人数</h4>
                    <p>{{appeal_tree.appeal_amount}}</p>
                </div>
                <div class="info-item" id="last-item">
                    <h4>申述序列号可查询范围</h4>
                    <p>{{appeal_tree.startNumber}} - {{appeal_tree.endNumber}}</p>
                </div>
            </div>
        </div>
        
        <div class="search-box">
            <h4>填入申述序列号进行查询</h4>
            <div class="box">
            <el-input placeholder="请输入内容" v-model="appeal_id" clearable>
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
    props: ['appeal_tree'],
    data: function(){
        return{
            isError: false,
            have_node_list: false,
            node_list: '',
            appeal_id: '',
            progress: {
                color: '#f56c6c', percentage: 0
            }
        }
    },
    methods:{
        search: function(){
            var data = {
                "project_id": this.$store.proj_id,
                "appeal_id": this.appeal_id
            };
            var url = "";

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
            this.axios({
                method: "post",
                data: data,
                url: url
                })
                .then((response)=> {
                    this.node_list = response.data;
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
        this.progress.percentage = this.appeal_tree.appeal_result*100;
    }
}
</script>

<style scoped>
.el-progress{
    width: 90%;
}
.appeal-tree-wrapper{
    width: 88%;
    margin: 50px auto;
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
    height: 300px;
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
    font-size: 
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
    padding-left: 40px;
}

.info-item h4{
    color: #1574e0;
}

.tree{
    float: left;
    width: 53%;
    min-width: 580px;
    margin: 20px 0px;
    height: 400px;
    background: url('../../assets/appeal_tree.png')  no-repeat;
    background-position-y: -50px;
    background-position-x: -40px;
    background-size: 720px 420px;
    border-right: 1px solid #dddddd;
}
.info{
    display: inline-block;
    width: 43%;
    height: 380px;
    margin-top: 20px;
   
}
</style>