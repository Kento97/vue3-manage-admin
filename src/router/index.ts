import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/views/Home.vue";

// @ts-ignore
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
                },
                {
                    path: "/table",
                    name: "basetable",
                    meta: {
                        title: '表格'
                    },
                    component: () => import ( /* webpackChunkName: "table" */ "@/views/BaseTable.vue")
                },
                {
                    path: "/tabs",
                    name: "tabs",
                    meta: {
                        title: 'tab标签'
                    },
                    component: () => import ( /* webpackChunkName: "tabs" */ "@/views/Tabs.vue")
                },
                {
                    path: "/form",
                    name: "baseform",
                    meta: {
                        title: '表单'
                    },
                    component: () => import ( /* webpackChunkName: "form" */ "@/views/BaseForm.vue")
                },
                {
                    path: "/donate",
                    name: "donate",
                    meta: {
                        title: '鼓励作者'
                    },
                    component: () => import ( /* webpackChunkName: "donate" */ "../views/Donate.vue")
                },
            ]
        }
    ]
})

export default router
