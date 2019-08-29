import Vue from 'vue'
import AppealPage from '../AppealPage'
import router from '../router'
import store from '../store'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vueCookies from 'vue-cookies';


Vue.config.productionTip = false;
Vue.use(element);
Vue.use(VueAxios, axios);
Vue.use(vueCookies);


new Vue({
    router,
    store,
    render: h => h(AppealPage),
    methods: {
        checkLogin: function(){
            
              if(!this.$cookies.get('session')){
                  this.$router.push('/appeal');
              }else{
                  this.$router.push('/appeal/in');
              }
        }
    },
    created(){
      this.checkLogin()
    },
    watch: {
        "this.$route.path": 'checkLogin'
    }
  }).$mount('#app');