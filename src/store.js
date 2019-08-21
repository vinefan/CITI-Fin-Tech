import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0 ,
    name: 'name'
  },
  mutations: {
    // state参数是必须的
    increase: function (state,name) {
      state.count++;
      state.name = name
    }
  },
  actions: {

  }
})
