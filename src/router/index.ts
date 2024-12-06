import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/views/Main.vue')
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
