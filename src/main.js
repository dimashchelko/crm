import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyD4-7hXdMCxVcg8quf765lIsgjwpJA5_20",
  authDomain: "vue-crm-63e25.firebaseapp.com",
  databaseURL: "https://vue-crm-63e25.firebaseio.com",
  projectId: "vue-crm-63e25",
  storageBucket: "vue-crm-63e25.appspot.com",
  messagingSenderId: "1082466268622",
  appId: "1:1082466268622:web:ff810165325da389fd279f"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
