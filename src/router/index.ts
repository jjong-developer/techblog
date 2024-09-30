import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue'; // 메인 페이지
import Signin from '@/views/user/Signin.vue'; // 로그인 페이지
import List from '@/views/post/List.vue'; // 리스트 페이지
import View from '@/views/post/View.vue'; // 상세 페이지

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/views/user/Signin.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('@/views/post/List.vue')
        },
        {
            path: '/view',
            name: 'view',
            component: () => import('@/views/post/View.vue')
        },
    ]
})

export default router
