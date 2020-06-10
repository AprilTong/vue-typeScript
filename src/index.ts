import Vue from 'vue'
import App from '../src/app.vue'
import router from '../src/router/index'
import store from '../src/store/index'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自己写的样式
import './assets/css/reset.css'
import './assets/css/page.less'
import './assets/font/iconfont.css'
// 自定义方法
import './utils/prototype'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
})
