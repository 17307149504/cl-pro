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
        }
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
    },
    actions: {
    },
    modules: {
    }
})