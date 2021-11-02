import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import dashboard from './modules/dashboard'
import userdashboard from './modules/dashboard-user'
import account from './modules/account'
import universityinfo from './modules/universityinfo'
import depandorg from './modules/depandorg'
import review from './modules/review'
import faq from './modules/faq'
import post from './modules/post'
import members from './modules/members'
import permission from './modules/permission'
import updates from './modules/updates'
import osa from './modules/osa'

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
  auth, dashboard, account, userdashboard, universityinfo, depandorg, review, faq, post, members, updates, 
  permission, osa
 }
})

