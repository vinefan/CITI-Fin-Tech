<template>
    <div id="header">
        <!-- logo -->
        <div id="logo"></div>
        <!-- menu -->
        <div id="menu">
            <template v-for="(item, index) in items">
                <a  :href="item.href" 
                    :key="index" 
                    @mouseover="changeColor(item)" 
                    @mouseout="changeColor(item)"
                    @click="search(index)"
                    v-bind:class="{ 'active': item.active }"
                    target="_blank">
                        <i v-bind:class="item.icon"></i>
                        {{item.title}}
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
                        icon: "el-icon-s-order",
                        title: "投保 ",
                        active: false,
                        href: "/insure"
                    },
                    {
                        icon: "el-icon-s-custom",
                        title: "申述  ",
                        active: false,
                        href: "/appeal"
                    }, 
                    {
                        icon: "el-icon-s-check",
                        title: "审核 ",
                        active: false,
                        href: "/check"
                    },
                    {
                        icon: "el-icon-s-data",
                        title: "查询 ",
                        active: false,
                        href: ""
                    }
                ],

            }
        },
        methods:{
            // 修改当前导航栏的激活项
            changeColor: function (item){   
                item.active = !item.active 
            },
            // 点击“查询”项后触发函数
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
        
        background-color: #ffffff;
        width: 76%;
        margin: auto;
        height: 80px;
        min-width: 1000px;
        border-radius: 10px;

        /* 顶部header透明 */
        filter: alpha(opacity=75);
        /* IE */
        -moz-opacity: 0.75;
        /* Firefox */
        opacity: 0.75;
        /* others */
    }
    #logo{
        width: 120px;
        height: 80px;
        float: left;
        color:steelblue;
        margin-left: 50px;
        background: url('../assets/header_logo.png') center center no-repeat;
        background-size: 120px 113px;
        background-position-y: -5px;
    }

    #menu{
        
        float: right;
        font-size: 26px;
        font-family: Arial, Helvetica, sans-serif !important;
        text-decoration: none; 
        width: 500px;
        height: 90%;
        color: #333;
        margin-top: 20px;
        padding-right: 20px;
        opacity: 1;
    }

    a{
        color: #222;
        display: inline-block;
        width: 122px;
        text-decoration: none;
        /* font-weight: bold; */

    }

    .active{
        color: rgb(42, 124, 248);
        font-size: 26px;
        
    }
</style>
