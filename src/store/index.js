import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userIdentify: 'DOCTOR',
        basicInfo: {
            sex: '',
            age: '',
            occupation: ''
        },
        afterCheck: false,
        // 需要记住点击的患者的id，之后再次进行数据库的搜索得到患者的基本信息，症状信息，并且放到页面中。
        patientId: '',
    },
    getters: {
        isAuthenticated: (state) => {
            return state.userIdentify != ''
        },
        isAdmin: (state) => {
            return state.userIdentify == 'ADMIN';
        },
        isDoctor: (state) => {
            return state.userIdentify == 'DOCTOR';
        }
    },
    mutations: {
        setRole(state, value) {
            state.userIdentify = value;
        },
        setBasicInfo(state, value) {
            Object.assign(state.basicInfo, value);
        },
        changeUserIdentify(state, option) {
            state.userIdentify = option;
        },
        changeAfterCheck(state, value) {
            state.afterCheck = value;
        }
    },
    actions: {
    },
    modules: {
    }
})