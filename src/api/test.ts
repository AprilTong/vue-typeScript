import http from './http'

/*
 接口定义
*/

interface createApi {
    loginApi: any
    logoutApi: any
}

const apis: createApi = Object.create(null)
// 登录
apis.loginApi = function (params: any) {
    return http.post('XXXX/login', params)
}

// 退出登录
apis.logoutApi = function (params: any) {
    return http.get('XXXX/logout', params)
}

export default apis
