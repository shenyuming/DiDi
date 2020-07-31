<template>
    <div class="managementWrap">
        <div class="headTop">
            <div class="g-fl">
                <img class="logoImg g-fl" src="@/assets/image/logoTopAll.png" alt="">
                <p class="index g-fl">{{$t('lang.user.index') }}</p>
                <a class="link g-fl" :href="loginIn">{{ $t('lang.user.connectDiscord') }}</a>
            </div>
            <div class="g-fr">
                <div class="person g-fl">
                    <img src="@/assets/image/pic.png" alt="">
                    <span v-if="memberInfo.Name">{{memberInfo.Name}}</span>
                </div>
                <div class="language g-fl">
                    <img v-if="zh" @click="handleCommand('zh')" src="@/assets/image/ch.png" alt="">
                    <img v-if="en" @click="handleCommand('en')" src="@/assets/image/en.png" alt="">
                </div>
                <a class="login g-fl" :href="loginOut">{{ $t('lang.user.logout') }}</a>
            </div>
        </div>
        <div class="setUserInfo">
            <div class="headpic">
                <img v-if="memberInfo.Avatar&&memberInfo.Avatar!=null" :src="memberInfo.Avatar" alt="">
                <img v-else src="@/assets/image/logo-top.png" alt="">
            </div>
            <div class="name">
                {{memberInfo.Name}}
            </div>
            <div class="detail">
                <span class="id">{{memberInfo.Id}}</span>
                <span class="email">{{memberInfo.Email}}</span>
            </div>
            <div class="userSwitchWrap">
                <ul class="tab">
                    <li v-for="(tab,index) in tabList" :key="tab.value" @click="toggle(index,tab.type)" class="topbar-item">
                        <div class="inner-item" :class="{active:currentActive == index}">{{tab.title}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="">
            <div class="manage">
                <!--:is实现多个组件实现同一个挂载点-->
                <component :is="currentView" :memberInfo="memberInfo" :memberTrade="memberTrade"></component>
            </div>
        </div>
    </div>
</template>

<script>
import homeComponent from "./components/homeComponent"
import managerOrderComponent from "./components/managerOrderComponent"
import ponitComponent from "./components/ponitComponent"
import qureyOrderComponent from "./components/qureyOrderComponent"
import memberListComponent from "./components/memberListComponent"
import Cookies from 'js-cookie'
export default {
    name: "index",
    components: {
        homeComponent,
        managerOrderComponent,
        ponitComponent,
        qureyOrderComponent,
        memberListComponent
    },
    data() {
        return {
            zh: true,
            en: false,
            loginIn: this.URLS.logIn,
            loginOut: this.URLS.logOut,
            tabList: [],
            currentActive: 0,
            currentView: 'homeComponent',
            memberInfo: {
                Email: '',
                Name: '',
                Id: '',
                IsInBlackList: '',
                Avatar: '',
                IsAdmin: ''
            },
            memberTrade: {
                Score: 0,
                SellCount: 0
            },
            isAdmin: '' //是否是管理员
        }
    },
    computed: {
        selectedLang() {
            let lang = '';
            switch (this.$i18n.locale) {
                case 'zh':
                    {
                        lang = '中文'
                        break;
                    }
                case "en":
                    {
                        lang = 'English'
                        break;
                    }
                default:
                    lang = '中文'
                    break;
            }
            return lang;
        }
    },
    methods: {
        // 根据下拉框的中被选中的值切换语言
        handleCommand(command) {
            switch (command) {
                case "zh":
                    {
                        this.$i18n.locale = "zh";
                        this.zh = true;
                        this.en = false;
                        break;
                    }
                case "en":
                    {
                        this.$i18n.locale = "en";
                        this.zh = false;
                        this.en = true;
                        break;
                    }
                default:
                    break;
            }
            if (this.isAdmin) {
                this.tabList = [{
                        type: 'homeComponent',
                        title: this.$i18n.t('lang.user.memberHomePage')
                    },
                    {
                        type: 'qureyOrderComponent',
                        title: this.$i18n.t('lang.user.tradeList')
                    }, {
                        type: 'memberListComponent',
                        title: this.$i18n.t('lang.user.memberList')
                    }
                ]
            } else {
                this.tabList = [{
                        type: 'homeComponent',
                        title: this.$i18n.t('lang.user.memberHomePage')
                    },
                    {
                        type: 'managerOrderComponent',
                        title: this.$i18n.t('lang.user.orderManagement')
                    },
                    {
                        type: 'ponitComponent',
                        title: this.$i18n.t('lang.user.pointsRecord')
                    }
                ]
            }
        },
        toggle(i, v) {
            this.currentActive = i;
            this.currentView = v;
            // console.log(this.currentActive)
        },
        //查询个人信息
        queryMain() {
            var _this = this;
            this.$ajax.get(this.URLS.basicInfo)
                .then(function(response) {
                    if (response.data.Entity.Id != null) {
                        _this.memberInfo = response.data.Entity;
                        _this.isAdmin = response.data.Entity.IsAdmin;
                        Cookies.set('isAdmin', _this.isAdmin)
                        if (_this.isAdmin) {
                            _this.tabList = [{
                                    type: 'homeComponent',
                                    title: _this.$i18n.t('lang.user.memberHomePage')
                                },
                                {
                                    type: 'qureyOrderComponent',
                                    title: _this.$i18n.t('lang.user.tradeList')
                                }, {
                                    type: 'memberListComponent',
                                    title: _this.$i18n.t('lang.user.memberList')
                                }
                            ]
                        } else {
                            _this.tabList = [{
                                    type: 'homeComponent',
                                    title: _this.$i18n.t('lang.user.memberHomePage')
                                },
                                {
                                    type: 'managerOrderComponent',
                                    title: _this.$i18n.t('lang.user.orderManagement')
                                },
                                {
                                    type: 'ponitComponent',
                                    title: _this.$i18n.t('lang.user.pointsRecord')
                                }
                            ]
                        }
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //查询积分
        queryTrade() {
            var _this = this;
            this.$ajax.get(this.URLS.memberInfo)
                .then(function(response) {
                    // console.log(response)
                    if (response.data.Entity.Id != null) {
                        _this.memberTrade = response.data.Entity || ''
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        // //管理员用户信息
        // queryAdminInfo() {
        //     this.$ajax.get(this.URLS.adminInfo, {
        //             params: {
        //                 discordIdStr: 111
        //             }
        //         })
        //         .then(function(response) {
        //             console.log(response)
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         })
        // }
    },
    created() {
        var _this = this;
        _this.queryMain();
        _this.queryTrade();
        // _this.queryAdminInfo();
    }
};
</script>

<style lang="scss" scoped>
.managementWrap {
    color: #fff;
    font-size: 14px;
    .headTop {
        width: 1100px;
        height: 60px;
        line-height: 60px;
        overflow: hidden;
        margin: 0 auto;
        .logoImg {
            display: block;
            width: 276px;
            height: 44px;
            margin-top: 8px;
        }
        .index {
            width: 100px;
            text-align: center;
            cursor: pointer;
        }
        .link {
            cursor: pointer;
        }
        .person {
            img {
                width: 20px;
                height: 21px;
                margin-right: 13px;
            }
        }
        .language {
            margin: 20px 40px;
            cursor: pointer;
            img {
                display: block;
                width: 20px;
                height: 20px;
            }
        }
    }
    .setUserInfo {
        background: url('../../assets/image/other-top.png') no-repeat center;
        background-size: 100%;
        height: 313px;
        text-align: center;
        .headpic {
            margin-top: 60px;
            border-radius: 50%;
            width: 112px;
            height: 112px;
            border: 1px solid #FFE109;
            display: inline-block;
        }
        .name {
            margin-top: 20px;
            line-height: 20px;
        }
        .detail {
            margin-top: 20px;
            .id {
                padding-right: 20px;
                border-right: 1px solid #A5A7AD;
            }
            .email {
                padding-left: 20px;
            }
        }
    }
    .userSwitchWrap {
        width: 726px;
        margin: 0 auto;
        height: 39px;
        margin-top: 30px;
        .tab {
            .topbar-item {
                float: left;
                font-size: 14px;
                width: 33%;
                color: #fff;
                font-weight: 300;
                cursor: pointer;
                position: relative;
                .inner-item {
                    margin: 0 auto;
                    width: 120px;
                    padding: 10px 0;
                    &.active {
                        border-bottom: 2px solid #FFE109 !important;
                    }
                    &.hover {
                        border-bottom: 2px solid #FFE109 !important;
                    }
                }
            }
        }
    }
}
</style>
