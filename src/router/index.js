import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const getRole = () => {
//     const authenticatedUser = localStorage.getItem("authenticatedUser");
//     // let authenticatedUser = this.$store.state.userIdentify;
//     if (authenticatedUser) {
//         return authenticatedUser;
//     }
//     return '';
// }
const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index.vue'),
        redirect: '/startDiagnosis',
        children: [
            {
                path: '/startDiagnosis',
                name: 'startDiagnosis',
                component: () => import('../views/startDiagnosis.vue'),
                // beforeEnter: (to, from, next) => {
                //     let role = getRole();
                //     next(role == 'DOCTOR' || role == 'ADMIN');
                // }
            },
            {
                path: '/knowledgePopularization',
                name: 'knowledgePopularization',
                component: () => import('../views/knowledgePopularization.vue'),
                redirect: '/knowledgePopularization/stomach',
                children: [
                    {
                        path: '/knowledgePopularization/stomach',
                        name: 'stomach',
                        component: () => import('../components/knowledge/stomach')
                    },
                    {
                        path: '/knowledgePopularization/varicocele',
                        name: 'varicocele',
                        component: () => import('../components/knowledge/varicocele')
                    }, {
                        path: '/knowledgePopularization/lowerExtremities',
                        name: 'lowerExtremities',
                        component: () => import('../components/knowledge/lowerExtremities')
                    }
                ]
            },
            {
                path: '/admissions', 
                name: 'admissions',
                component: () => import('../views/admissions.vue')
            },
            {
                path: '/entityQuery',
                name: 'entityQuery',
                component: () => import('../views/entityQuery.vue')
            }, {
                path: '/login',
                name: 'login',
                component: () => import('../views/login')
            }, {
                path: '/register',
                name: 'register',
                component: () => import('../views/register')
            }, {
                path: '/about',
                name: 'about',
                component: () => import('../views/about'),
                children:[
                    {
                        path: '/about/medicalRecord',
                        name: 'medicalRecord',
                        component: () => import('../components/about/medicalRecord'),
                    },
                    {
                        path: '/about/kgGraph',
                        name: 'kgGraph',
                        component: () => import('../components/about/kgGraph'),
                    },
                    {
                        path: '/about/patient',
                        name: 'patient',
                        component: () => import('../components/about/patient'),
                    },
                    {
                        path: '/about/doctor',
                        name: 'doctor',
                        component: () => import('../components/about/doctor'),
                    },
                    {
                        path: '/about/users',
                        name: 'users',
                        component: () => import('../components/about/users'),
                    }
                ]
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router