<template>
	<div class="charity-wrapper">

		<!-- 项目信息 -->
		<Program v-bind:proj_info="proj_info">

		</Program>
		<!-- 资金树信息 -->
		<MoneyTree v-bind:money_tree="money_tree" 
				   v-bind:proj_id="proj_info.project_id">
		</MoneyTree>
		<!-- 申述树信息 -->
		<AppealTree v-bind:appeal_tree="appeal_tree" 
					v-bind:proj_id="proj_info.project_id" 
					v-if="isAppealed">

		</AppealTree>
		<!-- footer -->
		<!-- <div id="footer">
            <div>
                <p>版权所有©西南财经大学</p>
                <p>CopyRight©Southwestern University Of Financial
                     And Economics.All rights reserved.</p>
                <p>联系 : 0000000</p>
            </div>
        </div> -->
	</div>
</template>

<script>
import Program from './Program';
import AppealTree from './AppealTree';
import MoneyTree from './MoneyTree';

export default {
	name: "Charity",
	components:{
		Program,
		AppealTree,
		MoneyTree
	},
	data: function(){
		return{
			proj_info: {
                    "project_id": "13100000500004729P_关爱留守儿童",
                    "project": {
                        "project_name": "困境女童",
                        "project_url": "https://oalipay-dl-django.alicdn.com/rest/1.0/image?fileIds=RDQVm6RQQVGlcG2hjC32WQAAACMAAQED&zoom=original",
                        "project_money": 210000.0,
                        "project_reason": "项目执行计划2019年此项目将继续执行，计划至少为5000名贫困女童送去温暖和保障，让孩子们可以快乐无忧的生活和学习，更加健康快乐地成长。(1)服务时间：2020年2月前；(2)帮扶地区：河北省石家庄市周边地区。(3)受助对象：需要心理支援的女童。"
                    },
                    "applicant": {
                        "organization": "河北省新联合公益基金会",
                        "org_id": "53130000586921578D",
                        "address": "石家庄市中山西路356号中电信息大厦5楼"
                    },
                    "recipient": [{
                        "name": "小雪",
                        "sex": "女",
                        "reason": "我没有一个朋友。这个看起来有点冷漠的姑娘叫小雪，今年10岁，是兄妹三人中的老大。妈妈患有狂躁性精神障碍，爸爸患有严重的胃病。全家挤在一个小房子里，受家庭环境影响，小雪性格内向，从不主动跟人说话。面对镜头，一直躲闪，采访她时，也只是勉强应付一下。本应该在最好的年纪享受快乐，却封闭了自我。没有朋友，没有笑容，有的，只是难过。"
                    }],
                    "insurance_fee": 0.0,
                    "insurance_url": "https://oalipay-dl-django.alicdn.com/rest/1.0/image?fileIds=1-aCTcfgQNm599VOuTpl_AAAACMAAQED&zoom=original",
                    "claim_state": false,
                    "claim_context": [{
                        "claim_reason": null,
                        "claim_money": 0.0,
                        "claim_times": 0,
                        "claim_date": null
                    }],
                    "insurance_state": true
                },
			money_tree: '',
			appeal_tree: '',
			isAppealed: false,
		}
	},
	props: ['proj_name'],
	
	methods:{
		backTocases: function(alert_msg){
			this.$notify({
                    title: '警告',
                    message: alert_msg,
                    type: 'warning',
                    showClose: false,
                    duration: '3000',
                    });
					this.$router.push('/cases');
		},
		askForProjInfo: function() {
			var project = { "proj_name": this.proj_name };
			if(project.proj_name == ''){
				this.backTocases('请先查询');
				return
			} 		 
			// 发送请求
			var url = "http://10.64.111.98:8080/WillBLOCK/search";
			this.axios({
				method: "post",
				url: url,
				data: project
				})
				.then((response)=> {
					this.proj_info = response.data[0];
					this.askForMoneyMerkelTree();
				})
				.catch((error)=> {
					this.backTocases(error);
				})
		},
		askForMoneyMerkelTree: function() {
		
			var project = { "project_id": this.proj_info.project_id};
			if(project.project_id == ''){
				this.backTocases('请先填入查询项目名');
				return
			} 
			
			var url = "http://10.64.111.98:8080/WillBLOCK/tree/moneyroot";
			this.axios({
				method: "post",
				url: url,
				data: project
				})
				.then((response)=> {
					this.money_tree = response.data;
					this.askForAppealMerkelTree()
				})
				.catch((error)=>{
					this.$notify({
                    title: '警告',
                    message: error,
                    type: 'warning',
                    showClose: false,
                    duration: '1600',
                    });
					this.$router.push('/cases');
				})
		},
		askForAppealMerkelTree: function() {
			var appeal = { "project_id": this.proj_info.project_id};
			var url = "http://10.64.111.98:8080/WillBLOCK/tree/appealroot";
			this.axios({
				method: "post",
				url: url,
				data: appeal,
				})
				.then((response)=> {
					this.appeal_tree = response.data;
					if(this.appeal_tree.is_appealed == true){
						this.isAppealed = true;

					}
				})
				.catch((error)=> {
					this.$notify({
                    title: '警告',
                    message: error,
                    type: 'warning',
                    showClose: false,
                    duration: '1600',
                    });
					this.$router.push('/cases');
				})
		},
		
	},
	mounted(){
		this.askForProjInfo();
		
	}
}
</script>

<style>
#footer{
	padding-top: 40px;
    background-color: #161718;
    height: 110px;
}

#footer p{
    margin-top: 0;
    color: #fff;
    text-align: center;
    font-weight: 200;
}
</style>