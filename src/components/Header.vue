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
                        href: "/insure"
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
        
        background-color: #ebecec;
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        min-width: 1200px;

        /* 顶部header透明 */
        filter: alpha(opacity=90);
        /* IE */
        -moz-opacity: 0.8;
        /* Firefox */
        opacity: 0.8;
        /* others */



    }
    #logo{
        width: 320px;
        height: 100px;
        float: left;
        color:steelblue;
        margin-left: 50px;
        background: url('../assets/header_logo.png') center center no-repeat;
        background-size: 100%;
        background-position-y: -50px;
    }

    #menu{
        
        float: right;
        font-size: 24px;
        width: 500px;
        height: 90%;
        color: #333;
        margin-top: 40px;
        margin-right: 35px;
    }

    a{
        color: #111;
        display: inline-block;
        width: 105px;
    }

    .active{
        color: rgb(37, 89, 168);
        font-size: 24px;
        
    }
</style>
