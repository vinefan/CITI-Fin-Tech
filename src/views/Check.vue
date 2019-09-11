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

				<!-- 动画效果 -->
				<transition-group tag="div" name="list-complete">
					<Insurance  v-for="(insur,index) in insur_list" 
								:key="index" 
								:insur="insur" 
								:index="index"
								v-on:removeInsur="removeInsur" 
								class="list-complete-item">
					</Insurance>
				</transition-group>
			</div>

			<div class="appeal-module" v-if="atAppeal">

				<transition-group tag="div" name="list-complete">
					<AppealInsur 
						v-for="(appeal, index) in appeal_list" 
						:key="index" 
						:appeal="appeal" 
						:index="index"
						v-on:removeAppeal="removeAppeal" 
						class="list-complete-item">
					</AppealInsur>
				</transition-group>
			</div>
		</div>
		
	</div>
</template>

<script>
import Insurance from "../components/check/Insurance"
import AppealInsur from '../components/check/AppealInsur'

export default {
	name: "Check",
	components:{
		Insurance,
		AppealInsur
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
			var data = {
				"third_org_name": this.$store.state.supervisor_username
			}
			var url = "http://192.168.1.105:8080/thirdOrgIndex"
			// 请求待审保单
			this.axios({
				method: "post",
				data: data,
				url: url
				})
				.then((response)=> {

					
					this.insur_list = response.data.insurances;
					this.appeal_list = response.data.appeals;
				})
				.catch((error)=> {
					this.$notify({
						title: '警告',
						message: '网络异常',
						type: 'warning',
						showClose: false,
						duration: '2200',
                    });
				})
			// 保存给 this.insur_list
		},
		askForAppeal: function(){
			// 请求待理赔项目
			// 保存给 this.appeal_list
			this.askForInsur();
		},
		removeInsur: function(index){
			this.insur_list.splice(index,1);
			
		},
		removeAppeal: function(index){
			this.appeal_list.splice(index,1);
		}
	},
	
	data: function(){
		return{
			
			insur_module: "true",
			appeal_module: "false",
			atInsur: true,
			atAppeal: false,
			insur_list: [],
			appeal_list: []
		}
	},
	mounted(){
		
		// 请求待审保单
		this.askForInsur();
	}

}
</script>

<style scoped>
/* 动画效果 */
.list-complete-item {
  transition: all 2s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  /* transform: translateX(130px); */
  transform: translateY(130px);
}


.insur-module{
	padding-top: 100px; 
	padding-bottom: 100px;
	min-height: 640px;
}
.appeal-module{
	min-height: 800px;
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