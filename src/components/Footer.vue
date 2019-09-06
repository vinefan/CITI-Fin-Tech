<template>
	<div id="footer">
		
		<div class="bg">


		</div>

		

		
		
		<!-- <p>版权所有© 快乐星球 团队 | CopyRight©Will Block Team.All rights reserved. | 蜀ICPxxxxxxxx号</p> -->

	</div>
</template>

<script>

    export default {
        name: "Footer",

    }
</script>

<style scoped>
	#footer{
		padding-top: 0px;
		background-color: #313942;
		height: 400px;
	}
	#footer .bg{
		background: url("../assets/bg_footer.png");
		height: 400px;
		width: 100%;
		background-size: 120% 400%;
		background-position-x: -120px;	
		background-position-y: -500px;
		opacity: 0.9;
	}
	#footer .content{
		
		width: 100%;
		height: 100%;
	
		display: flex;
	}
	#footer p{
		display: block;
		padding: 10px;
		color: #ffffff;
		background: #cccccc;
		margin-bottom: 0px;
		font-weight: 400;
	}
</style>
