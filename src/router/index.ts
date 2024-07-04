import {createRouter, createWebHistory} from 'vue-router';
import Main from '@/views/Main.vue'; // 메인 페이지

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('@/views/AboutView.vue')
        // }
    ]
})

export default router
