<template>
    <div class="feature-wrapper">
        <div class="title-wrapper">
           <div class="id-num" v-bind:style="{backgroundColor: item.style[1]}">{{ item.id }}</div>
           <div class="title" ><p v-bind:style="{backgroundColor: item.style[1]}">{{item.title}}</p></div> 
           
        </div>
        
        <div>
            <ul>
            <li v-for="(icon, index ) in item.icons"
                 v-bind:key="index"
                 class="sub-title">

                <i v-bind:class="icon"
                   v-bind:style="{color: item.style[1]}">
                </i>
                <p>{{item.sub_title[index]}}</p>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Feature",
    props: ["item"],
    data: function (){
       return{
          i: 0
       }
    },
    

}
</script>

<style scoped>
ul{
    text-align: left;
    margin-top: 30px;
}
li{
    list-style-type: none;
    margin-top: 20px;
    margin-left: 80px
}

.sub-title i{
    display: inline;
    font-size: 20px;
    text-align: left;
    margin-right: 10px
}
.sub-title p{
    text-align: left;
    display: inline;
    color: #000;
    font-family: FangSong;  
    font-weight: 800;
    font-size: 20px
}

.feature-wrpper{
    width: 80%;
}
.title-wrapper div {
    display: inline-block;
    color: #ffffff;
    font-family: FangSong;
    font-size: 23px;
    font-weight: 400;
    line-height:50px; 
    
}
.id-num{
    width: 50px;
    height: 50px;
    margin-right: 30px;
    border-radius: 25px;  
    
}
.title{
    width: 80%;
    height: 50px;

}
.title p {
    border-radius: 25px;
    width: 300px;
}



</style>