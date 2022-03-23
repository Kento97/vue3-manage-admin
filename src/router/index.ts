import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: "/",
            name: "Home",
            component: Home,
            children: [
                {
                    path: "/dashboard",
                    name: "dashboard",
                    meta: {
                        title: '系统首页'
                    },
                    component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
                }
            ]
        }
    ]
})

export default router
