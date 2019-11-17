<template>
    <div class="login-wrapper">
        <div class="login-header">
            <a href="index.html">
                <i class="el-icon-back"></i>
                返回
            </a> 
            |
            <h3> 第三方登陆</h3>
        </div>
        <div class="login-bg">
            <div class="login">
                <div class="username">
                    <p>用户名</p>
                    <el-input 
                        placeholder="" 
                        v-model="user.username" 
                        :class="{ inputError: nameIsEmpty}"
                        @focus="nameIsEmpty = false"
                        clearable>
                    </el-input>
                </div>
                <div class="password">
                    <p>密码</p>
                    <el-input 
                        placeholder="" 
                        v-model="user.password" 
                        :class="{ inputError: pwdIsEmpty}"
                        @focus="pwdIsEmpty = false"
                        show-password
                        clearable>
                    </el-input> 
                </div>
                <div class="sign-up">
                    <el-button type="primary" @click="sendLoginInfo">
                        登录
                        <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                </div>

                <!-- loading  -->
                <div class="load" v-if="isloading">
                    <i class="el-icon-loading"/>
                    <p>加载中...</p>
                </div>

            </div>
        </div>
        <div id="footer">
            <div>
                <p>版权所有© 快乐星球团队</p>
                <p>CopyRight© Will Block Team. All rights reserved.</p>
                <p>蜀ICPxxxxxxxx号</p>
            </div>
        </div>
    </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';

export default {
    name: "Login",
    components: {
        
    },
    data: function(){
        return{
            user:{
                username: "",
                password: "",
            },
            
            pubKey: "-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3 \
             DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb \
             9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeu \
            cF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7ei \
            bMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----"
            ,
            isloading: false,
            nameIsEmpty: false,
            pwdIsEmpty: false,
        }
    },
    methods: {

        rsaEncrypt: function(data){
            let encrypor = new JSEncrypt();
            encrypor.setPublicKey(this.pubKey);            
            return encrypor.encrypt(data);
        },
        sendLoginInfo: function(){

            var user = {
                username: "",
                password: ""
            };
            user.username = this.user.username;
            user.password = this.user.password;

            // 判断用户名或密码是否为空
            if(user.username=="" || user.password==""){
                if(user.username==""){
                    this.nameIsEmpty = true
                }
                if(user.password==""){
                    this.pwdIsEmpty = true
                }
                return
            }

            // 加密密码
            user.password = this.rsaEncrypt(user.password);
            // 加载提示
            this.isloading = true;
            // 发送请求
            this.axios({
                method: "post",
                url:"http://114.67.105.154:9090/WillBLOCK/thirdLoginIn",
                data: user
                })
                .then((response)=> {

                    // 设置session, 还有设置session_time
                    this.$cookies.set('superSession', response.data.session);
                    // 将账户密码缓存起来
                    this.$store.commit('setSuperPassword',user.password);
                    this.$store.commit('setSuperUsername',user.username);
                    // 进入审核页面
                    this.$router.push('/check/in')

                })
                .catch((error)=> {
                    this.isloading = false;
                    this.$notify({
                        title: '警告',
                        message: '网络异常',
                        type: 'warning',
                        showClose: false,
                        duration: '2200',
                    });
                })
        }
    },
    
}
</script>

<style scoped>

.inputError {
    padding: 0.5px;
    border: 1px solid rgb(228, 35, 35) !important;
    border-radius: 5px;
}


.load p{
    display: inline-block;
    text-align: center;
    padding-left: 10px;
}
.load{
    width: 30%;
    margin:20px  auto;
}

.username,
.password,
.sign-up{
    padding-top: 20px;
    width: 86%;
    margin: auto;

}
.username{
    padding-top: 80px;
}

.el-button{
    width: 100%;
    height: 50px;
    font-size: 18px;
}

.sign-up{
    
    width: 50%;
    margin: auto;
    margin-top: 30px;
}
.login p{
    font-weight: 800;
}


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

.login-bg{
    margin-top: -80px;
    width: 100%;
    height: 600px;
    background: url("../assets/login_bg.jpg");
    background-size:75%;
    background-position-y: 100px;
    padding-top: 130px;
}

.login{

    width: 430px;
    height: 500px;
    border: solid #eee 1px;
    border-radius: 5px;
    background-color: #ffffff;
    background: rgba(255, 255, 255, 0.9);
    margin-left: 35%;
    
}
.login-header{
    background-color: #333638;
    opacity: 0.9;
    height: 60px;
    padding-top: 20px;
    font-size: 30px;
    font-weight: 100;
    color: #bbb;
}
.login-header a{
    display: inline-block;
    width: 8%;
    height: 100%;
    min-width: 50px;
    font-size: 22px;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    margin-left: 40px;
}
.login-header h3{
    display: inline-block;
    width: 20%;
    color:  #eeeeee;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    padding-left: 20px;
}

</style>