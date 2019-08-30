<template>
    <div id="header">
        <div id="logo">
            <i class="el-icon-s-tools"></i>
            <div>善行保</div>
        </div>
        <div id="menu">
            <template v-for="(item, index) in items">
                <a  :href="item.href" 
                    :key="index" 
                    @mouseover="changeColor(item)" 
                    @mouseout="changeColor(item)"
                    @click="search(index)"
                    v-bind:class="{ 'active': item.active }">
                        <i :class="item.icon">
                            {{item.title}}
                        </i>
                </a>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                items: [{
                        icon: "el-icon-tickets",
                        title: "投保 | ",
                        active: false,
                        href: "insure.html"
                    },
                    {
                        icon: "el-icon-paperclip",
                        title: "申述 | ",
                        active: false,
                        href: "/appeal"
                    }, 
                    {
                        icon: "el-icon-s-check",
                        title: "审核 |",
                        active: false,
                        href: "/check"
                    },
                    {
                        icon: "el-icon-view",
                        title: "查询 |",
                        active: false,
                        href: ""
                    }
                ],

            }
        },
        methods:{
            changeColor: function (item){
                
                item.active = !item.active 
            },
            search: function(index){
                if(index==3){                        
                    this.$emit("changeRoute");
                }
            }
        }
    }
</script>

<style scoped>
    #header{
        
        background-color: #eeeeee;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;


        /* 顶部header透明 */
        filter: alpha(opacity=80);
        /* IE */
        -moz-opacity: 0.8;
        /* Firefox */
        opacity: 0.8;
        /* others */



    }
    #logo{
        width: 275px;
        height: 90px;
        display: inline-block;
        color:steelblue;
    }
    #logo i {
        margin-top: 25px;
        font-size: 40px;
        height: 100px;
        display: inline-block;

    }
    #logo div{
        margin-left: 20px;
        font-size: 40px;
        display: inline-block;
    }
    #menu{
        
        display: inline-block;
        /* float: right; */
        font-size: 22px;
        width: 500px;
        height: 90%;
        color: #333
    }

    a{
        color: #111;
        display: inline-block;
        width: 105px;
    }

    .active{
        color: rgb(37, 89, 168);
        font-size: 23px;
        font-weight: 800;
    }
</style>
