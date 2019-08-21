<template>
    <div>
        <h3>this is an info component !</h3>
        <button type="button" @click="add()">添加</button>
    </div>

</template>

<script>
  import store from '../store'
  export default {
        name: "Info",
        store,
        methods: {
            add(){
                 
                  store.commit('increase','vine');
                  
            }
        }
  }
</script>

<style scoped>
    div{
        height: 1000px;
    }
</style>
