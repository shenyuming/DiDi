<template>
    <div class="headTitleWrap">
        <div class="top">
            <div class="allInfo">
                <p id="item1" class="item" :class="{'active1':isFlag1}" @click="gohome">产品</p>
                <p id="item2" class="item" :class="{'active2':isFlag2}" @click="goOrder">订单</p>
                <p id="item2" class="item" :class="{'active4':isFlag3}" @click="goSupport">支持</p>
                <p id="item3" class="item" :class="{'active3':isFlag4}" @click="goLogin">登录</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'cloudComponent',
        data() {
            return {
                showSlid: true,
                showAll: true
            }
        },
        watch: {},
        computed: {
            isFlag1() {
                if (this.$route.path == '/home') {
                    return true
                }
            },
            isFlag2() {
                if (this.$route.path == '/order') {
                    return true
                }
            },
            isFlag3() {
                if (this.$route.path == '/about') {
                    return true
                }
            },
            isFlag4() {
                if (this.$route.path == '/login') {
                    return true
                }
            }
        },
        methods: {
            gohome() {
                this.$router.push({
                    path: '/home'
                })
            },
            goSupport() {
                this.$router.push({
                    path: '/about'
                })
            },
            goOrder() {
                this.$router.push({
                    path: '/order'
                })
            },
            goLogin() {
                this.$router.push({
                    path: '/login'
                })
            }
        },
        mounted() {},
        created() {}
    }
</script>

<style lang="scss" scoped>
    .headTitleWrap {
        width: 1200px;
        margin: 40px auto;
        overflow: hidden;
        .top {
            float: left;
        }
        .other {
            float: right;
            font-size: 18px;
            line-height: 36px;
            color: #fff;
            cursor: pointer;
            margin-right: 40px;
        }
        .contact {
            float: right;
            font-size: 18px;
            line-height: 36px;
            color: #fff;
            cursor: pointer;
            margin-right: 40px;
        }
        .titie {
            height: 36px;
            box-shadow: 2px 1px 4px #aaa;
            border-radius: 36px;
            cursor: pointer;
        }
        .allInfo {
            .itemImg {
                position: absolute;
                top: -1px;
                .imgGoods {
                    height: 36px;
                    cursor: pointer;
                }
            }
            .item {
                float: left;
                padding: 0 30px;
                cursor: pointer;
                color: #dec2c2;
                font-size: 29px;
            }
            .active1 {
                color: #ff4a6d;
            }
            .active2 {
                color: #fb9d6a;
            }
            .active3 {
                color: #5bcbf0;
            }
            .active4 {
                color: #8fee90;
            }
        }
        .loginOut {
            float: right;
            img {
                height: 36px;
                cursor: pointer;
            }
        }
    }
</style>
