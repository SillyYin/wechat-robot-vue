import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.config = config

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')