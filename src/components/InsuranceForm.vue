<template>
	<div class="insurance-form">
		<h2><i class="el-icon-paperclip"></i>请完整且正确填写信息，以确保投保申请通过！</h2>
		<!-- 投保人信息 （公益组织）-->
		<div id="applicant-info" class="form-item">
				<h3>投保人</h3>
				<div class="item">
					<p>组织机构名称:</p>
					<el-input   
                    	:placeholder="calPriceInfo.organzination" 
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
					:placeholder="calPriceInfo.money" 
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

		
  	</div>
</template>

<script>
export default {
	name: "InsuranceForm",
	data: function(){
		return{
			options: ['身份证'],
			form: {
				insurance_date: this.calPriceInfo.time,
				insurance_fee: this.fee,
				project:{
					project_reason: "",
					project_name: "",
					project_money: this.calPriceInfo.money,
					project_issue: "",
					project_bank: "",
					project_bank_account: ""
				},
				applicant:{
					organzination: this.calPriceInfo.organzination,
					org_id: this.org_code,
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
					reason: ""
				}
			},
		}
	},
	props: ["calPriceInfo","fee","org_code"] ,

}
</script>

<style scoped>
h2{
	color: rgb(247, 107, 14);
	
	font-weight: 400;
}
.insurance-form {
	width: 88%;
	margin: 50px auto;
	padding: 20px 20px;
	border-radius: 10px;
	background-color: #eeeeee;
	opacity: 0.9;
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
	color: steelblue;
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
</style>