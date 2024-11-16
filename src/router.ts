import {createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/index.vue'),
        },
        {
            path:'/info',
            name:'info',
            component: () => import('./pages/info.vue'),
        },
        {
            path:'/map',
            name:'map',
            component: () => import('./pages/map.vue'),
        },
        {
            path:'/card',
            name:'card',
            component: () => import ('./pages/card.vue'),
        },
        {
            path:'/program',
            name:'program',
            component: () => import('./pages/program.vue')
        },
        {
            path:'/promotion',
            name:'promotion',
            component: () => import('./pages/promotion.vue')
        },
        {
            path:'/contact',
            name:'contact',
            component: () => import('./pages/contact.vue')
        }
    ]});
export default router;
