import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/our-team',
        name: 'Our Team',
        component: () => import('../views/OurTeam.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/courses',
        name: 'Courses',
        component: () => import('../views/Courses.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/notfound',
        name: 'Not-Found',
        component: () => import('../components/NotFound.vue'),
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('../components/Registration.vue'),
        meta: { layout: 'dashboard' },
    },
    {
        path: '/:pathMach(.*)*',
        name: 'NotFound',
        component: () => import('../components/NotFound.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
