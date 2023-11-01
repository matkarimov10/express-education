import {createRouter, createWebHistory} from 'vue-router'
import {useToast} from "vue-toastification";
import {supabase} from "@/client/supabase.js"

const notify = useToast()
let localUser

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {layout: 'dashboard'},
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: {layout: 'dashboard'},
    },
    {
        path: '/our-team',
        name: 'Our Team',
        component: () => import('../views/OurTeam.vue'),
        meta: {layout: 'dashboard'},
    },
    {
        path: '/courses',
        name: 'Courses',
        component: () => import('../views/Courses.vue'),
        meta: {layout: 'dashboard'},
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../views/News.vue'),
        meta: {layout: 'dashboard'},
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
        meta: {layout: 'dashboard'},
    },
    {
        path: '/admin-dashboard',
        name: 'Admin Dashboard',
        component: () => import('../views/admin/AdminDashboard.vue'),
        meta: {
            requiresAuth: true,
            layout: "admin"
        }
    },
    {
        path: '/students',
        name: 'Students',
        component: () => import('../views/admin/Students.vue'),
        meta: {
            requiresAuth: true,
            layout: "admin"
        }
    },
    {
        path: '/my-profile',
        name: 'My Profile',
        component: () => import('../views/admin/Profile.vue'),
        meta: {
            requiresAuth: true,
            layout: "admin"
        }
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

// get-user
async function getUser(next) {
    localUser = await supabase.auth.getSession()
    console.log(localUser)
    if (localUser.data.session == null) {
        notify.warning('Itlimos, avval akkauntingizga kiring!')
        next("/")
    } else {
        next()
    }
}

//auth requirements
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        getUser(next)
    } else {
        next()
    }
})

export default router
