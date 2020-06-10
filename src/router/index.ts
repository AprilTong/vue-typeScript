import Vue from 'vue'
import VueRouter from 'vue-router'
import test from './test'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [...test],
})
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/login')
    }
    //设置标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router
