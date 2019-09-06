<template>
	<div id="footer">
		<div class="bg">
			<div class="contact">
				<div class="connect">
					<p>联系我们 <i class="el-icon-share"></i></p>
					<div class="connect-imgs">
						<div class="img" id="weixin"></div>
						<div class="img" id="weibo"></div>
						<div class="img" id="twitter"></div>
						<div class='img' id="facebook"></div>
					</div>
					
				</div>
			</div>

			<div class="info">
				<div class="company-info">
					<h3>
						公司信息
					</h3>
					<ul>
						<li>项目简介</li>
						<li>项目进度</li>
						<li>项目计划</li>
						<li>技术博客</li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="cooperation">
					<h3>
						合作
					</h3>
					<ul>
						<li>github</li>
						<li>参与贡献</li>
						<li>合作计划</li>
						<li>高校支持</li>
						<li>开发者团队</li>
						<li></li>
					</ul>
				</div>
				<div class="service">
					<h3>
						服务
					</h3>
					<ul>
						<li>企业版</li>
						<li>项目API</li>
						<li>会员服务</li>
						<li>用户手册</li>
						<li>常见问题</li>
						<li>隐私条款</li>
					</ul>
				</div>
			</div>
		</div>
		<p class="certify">版权所有© 快乐星球 团队 | CopyRight©Will Block Team.All rights reserved. | 蜀ICPxxxxxxxx号</p>


	</div>
</template>

<script>

    export default {
        name: "Footer",

    }
</script>

<style scoped>
.certify{
	background: rgb(38, 40, 44);
	font-weight:100;
	font-family: Arial, Helvetica, sans-serif;
}
.info ul{
	height: 70%;
}

	.connect-imgs .img{
		display: inline-block;
		width: 13%;
		height: 35px;
		margin-left: 10px;
	}
	.connect-imgs{
		text-align: left;
	}
	#weibo{
		background: url("../assets/weibo.png") left center no-repeat;
		background-size: 35px 30px;
	}
	#weixin{
		background: url("../assets/weixin.png") left center no-repeat;
		background-size: 35px 30px;
	}
	#twitter{
		background: url("../assets/twitter.png") center center no-repeat;
		background-size: 70px 70px;
	}
	#facebook{
		background: url('../assets/facebook.png')center center no-repeat;
		background-size: 70px 70px;
		border-radius: 6px;
		background-position-y: -12px;
		width: 12%;
	}
	.connect {
		width: 80%;
		height: 90px;
		margin: auto;
	}
	.contact p{
		text-align: left !important;
		font-size: 19px;
		font-weight: 100;
	}
	
	.contact{
		float: left;
		width:30%;
		height: 300px;
		padding-top: 60px;
	}
	.info{
		float: right;	
		width: 69%;
		height: 300px;
		padding-top: 30px;
	}
	.company-info{
		float: left;
		width:30%;
		height: 300px;
		/* background: #dddddd; */
	
	}
	.cooperation{
		float: left;
		width:30%;
		height: 300px;
		/* background: #ffffff; */
	}
	.service{
		
		float: left;
		width:30%;
		height: 300px;
		/* background: #ffffff; */
	
	}
	.info h3{
		text-align: left;
		padding-left: 40px;
	}
	.info li{
		list-style-type: none;
		text-align: left;
		color: #aaaaaa;
		height: 27px;
	}
	#footer{
		padding-top: 0px;
		background-color: #313942;
		height: 400px;
	}
	#footer .bg{
		background: url("../assets/bg_footer.png");
		height: 370px;
		width: 100%;
		background-size: 120% 480%;
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
		/* background: #cccccc; */
		margin-bottom: 0px;
		font-weight: 400;
	}
</style>
