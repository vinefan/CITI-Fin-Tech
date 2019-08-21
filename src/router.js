import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/Info'
import Proposal from "./views/Proposal";
import Claim from "./views/Claim";
import Cases from "./views/Cases"
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'info',
      component: Info
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: Proposal
    },
    {
      path: '/claim',
      name: 'claim',
      component: Claim
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases
    }
  ]
})
