import Vue from 'vue';
import App from './App.vue';
import store from "../store"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  vuetify, // Add Vuetify instance
  store,   // Add Vuex store
  render: (h) => h(App),
}).$mount('#app');
