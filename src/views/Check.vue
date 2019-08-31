<template>
	<div>
		<el-menu id="menu"
					default-active="2" 
					class="el-menu-vertical-demo" 
					@open="handleOpen" 
					@close="handleClose"
					collapse="true"
					>
					<el-menu-item @click="logout">
						<i class="el-icon-switch-button"></i>
						<span slot="title">退出登录</span>
					</el-menu-item>
					<el-menu-item index="2" @click="skipToInsur">
						<i class="el-icon-document"></i>
						<span slot="title">审核保单</span>
					</el-menu-item>
					<el-menu-item index="3"  @click="skipToAppeal">
						<i class="el-icon-setting"></i>
						<span slot="title">审核申诉</span>
					</el-menu-item>
					<el-menu-item index="5" disabled="">
						<i class="el-icon-s-custom"></i>
						<span slot="title">个人信息</span>
					</el-menu-item>
		</el-menu>

		<div class="view">
			<div class="insur-module" v-if="atInsur">
				<transition-group tag="div">
					<Insurance v-for="i in items" v-bind:key="i"></Insurance>
				</transition-group>
			</div>
			<div class="appeal-module" v-if="atAppeal">
				miao
			</div>
		</div>
		
	</div>
</template>

<script>
import Insurance from "../components/check/Insurance"
export default {
	name: "Check",
	components:{
		Insurance,
	},
	methods:{
		logout: function(){
			// 去掉session
			this.$cookies.remove('superSession');
			// 删除密码
			this.$store.commit('setSuperPassword',"");
			this.$store.commit('setSuperUsername',"");
			// 切换到登录页面
			this.$router.push("/check");
		},
		listenScreen: function(){
			this.screenHeight = window.screen.height;
			this.screenHeight = this.screenHeight+"px";
		},
		skipToAppeal: function(){
			
			this.atInsur = false;
			this.atAppeal = true;
		},
		skipToInsur: function(){
			this.atAppeal = false;
			this.atInsur = true;
		},
		askForInsur: function(){
			// 请求待审保单
			// 保存给 this.insur_list
		},
		askForAppeal: function(){
			// 请求待理赔项目
			// 保存给 this.appeal_list
		}
	},
	data: function(){
		return{
			
			insur_module: "true",
			appeal_module: "false",
			items: [1,2,3,4,5],
			atInsur: true,
			atAppeal: false,
			insur_list: [],
			appeal_list: []
		}
	},
	mounted(){
		// 请求待审保单
		askForInsur();
	}

}
</script>

<style scoped>
.insur-module{
	padding-top: 100px; 
	padding-bottom: 100px;
}

#menu{
	height: 1500px;
	position: fixed;
	padding-left: 20px;
	padding-top: 60px;	
}
#menu .el-menu-item{
	
	width: 64px;
	height: 80px;
	border-radius: 5px;
	line-height: 80px;
}

.el-menu-item i,
.el-menu-item span
{
	font-size: 20px  !important;
	font-weight: 300;
}

.view{
	width: 100%;	
	background-color: #f3f3f3;
}
</style>