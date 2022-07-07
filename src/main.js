import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VAnimateCss from 'v-animate-css'
import VueAnimateOnScroll from 'vue-animate-onscroll'


Vue.use(VueAnimateOnScroll)
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)
Vue.use(IconsPlugin)
Vue.use(VAnimateCss);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
