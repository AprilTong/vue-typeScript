// 通过动态引入路由方式，可以减少首屏打开时间
const Test = () => import('../pages/test.vue')

const login = [
    {
        path: '/test',
        component: Test,
        name: 'Test',
    },
]
export default login
