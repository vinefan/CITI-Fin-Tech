import Vue from 'vue'
import Router from 'vue-router';
import Info from './views/Info';
import Proposal from "./views/Proposal";
import Claim from "./views/Claim";
import Cases from "./views/Cases";
import CheckLogin from './views/CheckLogin';
import Check from './views/Check';
import AppealLogin from './views/AppealLogin';
import Appeal from './views/Appeal';
import Charity from './components/charity/Charity'
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
    },
    {
      path: '/check',
      component: CheckLogin
    },
    {
      path: '/check/in',
      component: Check,
    },
    {
      path: '/appeal',
      component: AppealLogin
    },
    {
      path: '/appeal/in',
      component: Appeal
    },
    {
      name: 'linktocharity',
      path: '/charity/:proj_name',
      component: Charity,
      props: true,
    }
  ]
})
