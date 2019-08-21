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
                  console.log("add event from info !");
                  store.commit('increase','vine');
                  console.log("after increase action !");
                  console.log(store.state.count)
            }
        }
  }
</script>

<style scoped>
    div{
        height: 1000px;
    }
</style>
