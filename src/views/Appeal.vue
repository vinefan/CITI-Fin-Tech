<template>
	<div class="appeal-wrapper">
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
					<el-menu-item index="2" @focus="skipToInsur">
						<i class="el-icon-view"></i>
						<span slot="title">提交申述</span>
					</el-menu-item>
					<el-menu-item index="3" disabled="">
						<i class="el-icon-s-operation"></i>
						<span slot="title">过往记录</span>
					</el-menu-item>
					<el-menu-item index="5" disabled="">
						<i class="el-icon-s-custom"></i>
						<span slot="title">个人中心</span>
					</el-menu-item>
		</el-menu>
		<div class="view">
			<div class="appeal-box">
				<h3>项目编号 (Project ID)</h3>
					<el-input placeholder="请输入内容" 
							v-model="proj_id" 
							clearable
							v-bind:class="{inputError: idIsNull}"
							@focus="idIsNull = false">
					</el-input>
				
				<h3>密码 (Donor Password)</h3>
				<el-input placeholder="请输入密码" 
						  v-model="donor_pwd" 
						  show-password
						  v-bind:class="{inputError: pwdIsNull}"
						  @focus="pwdIsNull = false">
				</el-input>
				<h3>申述理由</h3>
				<el-input type="textarea" 
						  :rows="5" 
						  placeholder="请输入内容" 
						  v-model="appeal_reason" 
						  maxlength="100"
						  v-bind:class="{inputError: reasonIsNull}"
						  @focus="reasonIsNull = false">
				</el-input>
				<el-button type="primary" 
						   @click="send">
					提交<i class="el-icon-upload el-icon--right"></i>
				</el-button>
			</div>
		</div>

	</div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';
export default {
	name: "Appeal",
	data: function(){
		return{
			proj_id: "",
			donor_pwd: "",
			appeal_reason: "",
			idIsNull: false,
			pwdIsNull: false,
			reasonIsNull: false,
		}
	},
	methods:{
		rsaEncrypt: function(data){
            let encrypor = new JSEncrypt();
            encrypor.setPublicKey(this.$store.state.pubKey);            
            return encrypor.encrypt(data);
        },
		logout: function(){
			// 去掉session
			this.$cookies.remove('DonorSession');
			// 删除密码
			this.$store.commit('setDonorPassword',"");
			this.$store.commit('setDonorUsername',"");
			// 切换到登录页面
			this.$router.push("/appeal");
		},
		send: function(){
			var appeal = {
				"project_id": this.proj_id,
				"donor_pwd": this.donor_pwd,
				"appeal_reason": this.appeal_reason
			}

			if(appeal.project_id == ""){
				this.idIsNull = true;
				this.$notify({
                    title: '警告',
                    message: '未填写项目编号',
                    type: 'warning',
                    showClose: false,
                    duration: '1400',
                    
				});
				
			}
			if(appeal.donor_pwd == ''){
				this.pwdIsNull = true;
				this.$notify({
                    title: '警告',
                    message: '未填写用户密码',
                    type: 'warning',
                    showClose: false,
                    duration: '1400',
                    offset: 60
				});
				
			}
			if (appeal.appeal_reason == '') {
				this.reasonIsNull = true;
				this.$notify({
					title: '警告',
					message: '未填申述原因',
					type: 'warning',
					showClose: false,
					duration: '1400',
					offset: 120
				});
			}
			if (appeal.appeal_reason == '' && appeal.donor_pwd == '' && appeal.project_id == '') {
				return
			}

			// jiami
			appeal.donor_pwd = this.rsaEncrypt(appeal.donor_pwd);
			
			var url = "http://192.168.1.106:8080/start/receiveAppeal" ;
			this.axios({
				method: 'post',
				data: appeal,
				url: url 
				})
				.then((response) => {
							this.$notify({
								title: '成功',
								message: '您的申请已提交成功',
								type: 'success',
								offset: 100,
								duration: '2000'
							});
							this.proj_id = '';
							this.donor_pwd = '';
							this.appeal_reason = '';
				})
				.catch((error)=> {

				})

		}
	},
	
}
</script>

<style scoped>
.inputError {
    padding: 0.3px;
    border: 1px solid rgb(255,255,255) !important;
    border-radius: 5px;
	
}
.appeal-box .el-button{
	width: 25%;
	margin-top: 20px;
	margin-left: 37%;
	font-size: 18px;
}
.appeal-box h3{
	color:#333;

}
.appeal-box .el-input{
	width: 60%;
}
.appeal-box .el-textarea{
	width: 90%;
}
.appeal-wrapper{
	background: #ffffff;
}
.appeal-box{
	
	width: 66%;
	height: 490px;
	margin: auto;
	border: 1px #dddddd solid;
	border-radius: 7px;
	background: #eeeeee;
	opacity: 0.92;
	box-shadow: #efefef 1px 1px 8px 8px;
	padding-left: 20px;
}
.view{
	padding-top: 130px;
	width: 68%;
	margin:auto;
	height: 800px;
	background: url("../assets/28-10.png") center center no-repeat;
	background-size: 100%;
	background-position-y: -73px;
	

}
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
	font-size: 21px  !important;
	font-weight: 400;
	color: #333;
}

</style>