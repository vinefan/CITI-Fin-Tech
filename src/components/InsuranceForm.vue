<template>
	<div class="insurance-form">
		<!-- <h2><i class="el-icon-paperclip"></i>请完整且正确填写信息，以确保投保申请通过！</h2> -->
		<!-- 投保人信息 （公益组织）-->
		<div id="applicant-info" class="form-item">
				<h3>投保人</h3>
				<div class="item">
					<p>组织机构名称:</p>
					<el-input   
                    	:placeholder="calPriceInfo.organization" 
                    	:disabled="true">
                	</el-input>
				</div>
				<div class="item">
					<p>组织机构代码:</p>
					<el-input   
                    	:placeholder="org_code" 
                    	:disabled="true">
					</el-input>
				</div>
				<div class="item">
					<p>详细地址 (精确到门牌号):</p>
					<el-input   
                    	placeholder="——  (省/自治区/直辖市) —— (市)  ——(区/县) "
						v-model="form.applicant.address">
					</el-input>
				</div>
				<h5>授权联系人</h5>
				<div>
					<p>联系人姓名: </p>
					<el-input
						placeholder=""
						v-model="form.applicant.principal_name"></el-input>
				</div>
				<div>
					<p>手机号码: </p>
					<el-input
						placeholder=""
						v-model="form.applicant.principal_phone"></el-input>
				</div>
				<div>
					<p>证件类型</p>
					<el-select 
						v-model="value" 
						placeholder="身份证" 
						:disabled="true">
						<el-option 
							v-for="(item, index) in options" 
							:key="index" 
							:label="item" 
							:value="item">
						</el-option>
					</el-select>
				</div>
				<div>
					<p>证件信息: </p>
					<el-input
						placeholder=""
						v-model="form.applicant.principal_ident_info"></el-input>
				</div>
				<div>
					<p>电子邮箱: </p>
					<el-input
						placeholder=""
						v-model="form.applicant.principal_email"></el-input>
				</div>
				
		</div>

		<!-- 项目信息 -->
		<div id="project-info" class="form-item">
			<h3>公益项目信息</h3>
			<div>
				<p>项目名称</p>
				<el-input placeholder=""
						  v-model="form.project.project_name"></el-input>
			</div>
			
			<div>
				<p>目标筹款金额</p>
				<el-input 
					:placeholder="calPriceInfo.project_money" 
					:disabled="true"></el-input> (￥)
			</div>
			
			<div>
				<p>募集筹款方式</p>
				<el-input 
					placeholder=""
					v-model="form.project.project_issue"></el-input>
			</div>
			<div>
				<p>筹款存放银行</p>
				<el-input 
					placeholder=""
					v-model="form.project.project_bank"></el-input>
			</div>
			<div>
				<p>银行账号</p>
				<el-input 
					placeholder=""
					v-model="form.project.project_bank_account"></el-input>
			</div>
		</div>

		<!-- 受助人信息 -->
		<div id="recipient" class="form-item">
			<h3>受助人信息(保险受益人)</h3>
			<div>
				<p>姓名</p>
				<el-input 
					placeholder=""
					v-model="form.recipient.name"></el-input>
			</div>
			<div>
				<p>性别</p>
				<el-radio-group v-model="form.recipient.sex">
					<el-radio-button label="男"></el-radio-button>
					<el-radio-button label="女"></el-radio-button>
				</el-radio-group>
			</div>
			<div>
				<p>出生日期</p>
				<el-date-picker 
					v-model="form.recipient.birthday" 
					type="date" 
					placeholder=""
					format="yyyyMMdd">
				</el-date-picker>
			</div>
			<div>
				<p>证件类型</p>
				<el-select 
					v-model="value" 
					placeholder="身份证"
					:disabled="true">
					<el-option 
						v-for="(item, index) in options" 
						:key="index" 
						:label="item" 
						:value="item">
					</el-option>
				</el-select>
			</div> 	
			<div>
				<p>证件信息</p>
				<el-input 
					placeholder=""
					v-model="form.recipient.ident_info"></el-input>
			</div>
			<div>
				<p>联系住址</p>
				<el-input 
					placeholder="——  (省/自治区/直辖市) —— (市)  ——(区/县)"
					v-model="form.recipient.address"></el-input>
			</div>
			<div>
				<p>手机号码</p>
				<el-input 
					placeholder=""
					v-model="form.recipient.phone"></el-input>
			</div> 
			<div>
				<p>开户银行</p>
				<el-input 
					placeholder=""
					v-model="form.recipient.bank"></el-input>
			</div>	
			<div>
				<p>银行账号</p>
				<el-input 
					placeholder=""
					v-model="form.recipient.bank_account"></el-input>
			</div>
			<div class="reason">
				<p>筹款原因（尽量提供详细完备原因）</p>
				<el-input 
					type="textarea" 
					:autosize="{ minRows: 4, maxRows: 4}" 
					placeholder="请输入内容" 
					v-model="form.recipient.reason">
				</el-input>
			</div>
		</div>

		<!-- 保险金额 保险声明等信息 -->
		<div class="form-item">
			<div class="fee">
				<p>保险费:</p>
				<span>{{fee}}</span>
			</div>
			<div>
				<p class="date-claim-title">保险期限:</P>
				<el-input   
					:placeholder="charity_time" 
					:disabled="true">
                </el-input>
				<P class="date-claim">(保险期间为第一个捐款人发生捐款行为起至最后一个受捐人得到善款保障止 ，
					即公益项目期限。)</P>
			</div>

			<div class="claim">
				<div class="tabs">
					<el-tabs tab-position="left" style="height: 330px;">
    					<el-tab-pane label="保险条例" name="1">
							<div class="tab-view">
								<Clause></Clause>
							</div>
						</el-tab-pane>
    					<el-tab-pane label="投保人须知" name="0">
							<div class="tab-view">
								<Statement></Statement>
							</div>
						</el-tab-pane>
    				</el-tabs>
				</div>
			</div>
		</div>

		<el-button 
			type="primary"
			class="send"
			@click="send">
			确认提交
			<i class="el-icon-upload el-icon--right"></i>
		</el-button>
		
  	</div>
</template>

<script>
import Clause from './Clause';
import Statement from './Statement';

export default {
	name: "InsuranceForm",
	components: {
		Clause,
		Statement
	},
	data: function(){
		return{
			email_suffixs: ['@qq.com','@163.com','@126.com'],
			options: ['身份证'],
			// 保存完整保单信息
			form: {
				insurance_date: 0,
				insurance_fee: 0,
				insurance_valid_time: 0,
				project:{
					project_reason: "",
					project_name: "",
					project_money: 0,
					project_issue: "",
					project_bank: "",
					project_bank_account: "",
					project_raise_money_time: 0
				},
				applicant:{
					organization: "",
					org_id: "",
					address: "",
					principal_name: "",
					principal_ident_info: "",
					principal_phone: "",
					principal_email: ""
				},
				recipient:{
					name: "",
					sex: "男",
					birthday: "",
					ident_info: "",
					phone: "",
					bank: "",
					bank_account: "",
					reason: "",
					address: ''
				}
			},
			isOk: false
		}
	},
	methods: {
		// 提交完整保单信息
		send: function(){
			// 保费  
			this.form.insurance_fee = this.fee;
			// 保险时间 
			this.form.insurance_valid_time = this.charity_time;
			// 保险因子
			this.form.insurance_date = this.calPriceInfo.insurance_date;
			// 筹款金额
			this.form.project.project_money = this.calPriceInfo.project_money;
			// 筹款时间
			this.form.project.project_raise_money_time = this.raise_time;
			// 组织名
			this.form.applicant.organization = this.calPriceInfo.organization;
			// 组织代号
			this.applicant.org_id = this.org_code;
			// 触发父组件Insurepage的lastStep监听器
			this.$emit("lastStep");
			// 异步发送保单信息
			this.axios({
				method: "post",
				url: "http://114.67.105.154:9090/WillBLOCK/receiveForm",
				data: this.form
				})
				.then((response)=> {
					if(response.state == 200)
					this.isOk = true;
					
				})
				.catch(()=>{
					this.$notify({
                    title: '警告',
                    message: '上传失败',
                    type: 'warning',
                    showClose: false,
                    duration: '2200',
                    });
				})
		},
		// 邮箱后缀补全
		emailComplete(queryString, cb){
			var completedEmails = [];
			for(var i = 0; i<this.email_suffixs.length; i++){
				var email = queryString + this.email_suffixs[i];
				completedEmails.push(email);
			}
			cb(completedEmails)
		}
	},
	props: ["calPriceInfo","fee","org_code","charity_time","raise_time"] ,

}
</script>

<style scoped>
.send{
	
	width: 16%;
	height: 45px;
	min-width: 120px;
	margin: 70px auto;
	margin-left: 42%
}
.claim{
	margin-top: 50px;
	width:96%;
	height: 400px;
	border: 2px solid #92bbeb;
	border-style: inset;
}
.tabs{
	display: inline-block;
	width: 100%;
	margin-top: 40px;
	
}
.tab-view{

	overflow-y: scroll;
	height: 330px;
	width: 97%;
}

h2{
	color: rgb(36, 150, 243);
	
	font-weight: 400;
}
.insurance-form {
	width: 88%;
	border-radius: 10px;
	margin-top: 130px;
}

.form-item{
	border-left: 1px solid #999;
	padding: 20px 0 30px 40px;
	margin-top: 50px;
}

.form-item p{
	display: inline-block;
	width: 20%;
}
.form-item .el-input{
	display: inline-block;
	width: 35%;
}

h3,
h5{
	color: rgb(36, 150, 243);
}
h3{
	font-size: 24px;
}
h5{
	font-size: 16px;
}

.reason p {
	display: block;
	width: 70%;
}
.reason .el-textarea{
	width: 70%;
	
}
.el-textarea textarea{
	height: 200px;
}
.fee p{
	width: 10%;
}
.fee span{
	font-size: 20px;
	color: rgb(36, 150, 243);
}
.date-claim-title{
	width: 10% !important;
}
.date-claim{
	width: 80% !important;
	color: rgb(240, 36, 0);
}
p{
	font-weight: bold;
}
</style>