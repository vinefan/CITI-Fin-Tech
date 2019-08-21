<template>
	<div>insurance - claim</div>
</template>

<script>
    export default {
        name: "Claim",
        // 组件被挂载后执行
        mounted() {
            this.axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then((response) => {
                      alert(response.data)
                })
        }
    }
</script>

<style scoped>

</style>
