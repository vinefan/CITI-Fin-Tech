<template>
    <div class="feature-wrapper">
        <div class="title-wrapper">
           <div class="id-num" v-bind:style="{backgroundColor: item.style[1]}">{{ item.id }}</div>
           <div class="title" >
           <div  v-bind:style="{backgroundColor: item.style[1]}">{{item.title}}</div> 
           </div>
           
        </div>
        
        <div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Feature",
    props: ["item"],
    data: function (){
       
    }

}
</script>

<style scoped>
.feature-wrpper{
    width: 80%;
    padding-left: 0px;
}
.title-wrapper div {
    display: inline-block;
    color: #ffffff;
    font-family: FangSong;
    font-size: 23px;
    font-weight: 400;

    line-height:50px; 
    border-radius: 25px;  
}
.id-num{
    width: 50px;
    height: 50px;
    margin-right: 30px;
    
    
}
.title{
    width: 80%;
    height: 50px;

}


</style>