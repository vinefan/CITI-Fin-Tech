import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    supervisor_username: "",
    supervisor_password: "",
    donor_username: "",
    donor_password: "",
    proj_name: "",
    proj_id: "",
    pubKey: "-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----"
            ,
  },
  mutations: {
    setSuperUsername: function(state,username){
      state.supervisor_username = username;
    },
    setSuperPassword: function(state,password){
      state.supervisor_password = password;
    },
    setDonorUsername: function(state, username){
      state.donor_username = username;
    },
    setDonorPassword: function(state,password){
      state.donor_password = password;
    },
    setProjName: function(state,name){
      state.proj_name = name;
      alert(state.proj_name)
    },
    setProjId: function(state,proj_id){
      state.proj_id = proj_id;
      alert(state.proj_id)
    }
  },
  actions: {

  }
})
