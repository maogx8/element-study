import Router from 'vue-router'
import Vue from 'vue'

import login_index from '@/views/login/index.vue'
import dashboard from '@/views/dashboard/index.vue'
import not_found from '@/views/404.vue'


Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: login_index, hidden: true },
    {
        path: '/',
        component: dashboard,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{ path: 'dashboard', component: dashboard }]
    },
    { path: '/404', component: not_found, hidden: true },
    { path: '*', redirect: '/404' }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})