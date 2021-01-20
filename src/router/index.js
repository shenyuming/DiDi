import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            redirect: '/home',
            component: () => import("@/views/home"),
            meta: {
                title: "kaboom",
                keepAlive: true
            },
        }, {
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
                title: "kaboom",
                keepAlive: true
            }
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/about"),
            meta: {
                title: "kaboom",
                keepAlive: true
            }
        },
        {
            path: "/order",
            name: "order",
            component: () => import("@/views/order"),
            meta: {
                title: "kaboom",
                keepAlive: true
            }
        },{
            path: "/login",
            name: "login",
            component: () => import("@/views/login"),
            meta: {
                title: "kaboom",
                keepAlive: true
            }
        }
    ]
})
