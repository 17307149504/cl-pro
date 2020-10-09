import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
                component: () => import('../views/startDiagnosis.vue')
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
                path: '/instructionsForUse',
                name: 'instructionsForUse',
                component: () => import('../views/instructionsForUse.vue')
            },
            {
                path: '/entityQuery',
                name: 'entityQuery',
                component: () => import('../views/entityQuery.vue')
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