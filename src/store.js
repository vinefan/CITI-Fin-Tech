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
    },
    setProjId: function(state,proj_id){
      state.proj_id = proj_id;
    }
  },
  actions: {

  }
})
