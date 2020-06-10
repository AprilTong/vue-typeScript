/* 
vue的入口文件
 */
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'

Vue.use(Vuex)
const store: StoreOptions<RootState> = {
    state: {
        type: '',
        isShowMenu: false,
        baleTempData: {},
        menuData: [],
    },
    mutations: {
        setType(state: any, params: any): void {
            state.type = params
        },
        changeIsShowMenu(state, params) {
            state.isShowMenu = params
        },
        setBaleTempData(state, params): void {
            Object.keys(params).map((key) => {
                state.baleTempData[key] = params[key]
            })
        },
        setMenuData(state, params) {
            state.menuData = params
        },
    },
    actions: {
        typeFun(context, params) {
            context.commit('setType', params)
        },
    },
}

export default new Vuex.Store<RootState>(store)
