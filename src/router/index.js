import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "MainIndex",
            redirect: "/login",
            component: () => import("@/views/login"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/login"),
            meta: {
                title: "DiDiMarket",
                keepAlive: true
            }
        },
        {
            path: "/manager",
            name: "管理员",
            component: () => import("@/views/manager"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
            children: [
                {
                    path: "/manager/index",
                    name: "index",
                    component: () => import("@/views/manager/index"),
                    meta: {
                        title: "主页",
                        keepAlive: false
                    }
                },
                {
                    path: "/manager/userList",
                    name: "userList",
                    component: () => import("@/views/manager/userList"),
                    meta: {
                        title: "用户列表",
                        keepAlive: false
                    }
                },

                {
                    path: "/manager/tradeCenter",
                    name: "tradeCenter",
                    component: () => import("@/views/manager/tradeCenter"),
                    meta: {
                        title: "交易",
                        keepAlive: false
                    }
                },

                {
                    path: "/manager/rewards",
                    name: "rewards",
                    component: () => import("@/views/manager/rewards"),
                    meta: {
                        title: "管理奖赏",
                        keepAlive: false
                    }
                },

                {
                    path: "/manager/membership",
                    name: "membership",
                    component: () => import("@/views/manager/membership"),
                    meta: {
                        title: "管理会籍",
                        keepAlive: false
                    }
                },
                {
                    path: "/manager/voucher",
                    name: "voucher",
                    component: () => import("@/views/manager/voucher"),
                    meta: {
                        title: "淘宝激活码",
                        keepAlive: false
                    }
                }
            ]
        },
        {
            path: "/user",
            name: "用户",
            component: () => import("@/views/user"),
            meta: {
                title: "DiDiMarket",
                keepAlive: false
            },
            children: [
                {
                    path: "/user/index",
                    name: "index",
                    component: () => import("@/views/user/index"),
                    meta: {
                        title: "管理会籍",
                        keepAlive: false
                    }
                },
                {
                    path: "/user/buyProxy",
                    name: "index",
                    component: () => import("@/views/user/buyProxy"),
                    meta: {
                        title: "购买代理",
                        keepAlive: false
                    }
                },
                {
                    path: "/user/manmageOrder",
                    name: "manmageOrder",
                    component: () => import("@/views/user/manmageOrder"),
                    meta: {
                        title: "管理订单",
                        keepAlive: false
                    }
                },
                {
                    path: "/user/createProxy",
                    name: "createProxy.",
                    component: () => import("@/views/user/createProxy"),
                    meta: {
                        title: "生成代理",
                        keepAlive: false
                    }
                },
                {
                    path: "/user/rewards",
                    name: "rewards",
                    component: () => import("@/views/user/rewards"),
                    meta: {
                        title: "奖赏",
                        keepAlive: false
                    }
                }
            ]
        }
    ]

})
