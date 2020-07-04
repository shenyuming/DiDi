<template>
    <div class="managementWrap">
        <div class="comWidth">
            <div class="userHeadWrap clearfix">
                <div class="leftWrap">
                    <img class="logo" src="https://didimarket.cn/img/logo.png" style="">| {{ $t('lang.user.welcome') }}
                </div>
                <div class="rightWrap">
                    <div>
                        <a :href="loginIn">{{ $t('lang.user.connectDiscord') }}</a>
                    </div>
                    <div>
                        <a :href="loginOut">{{ $t('lang.user.logout') }}</a>
                    </div>
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                                 {{ selectedLang }}<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh">中文</el-dropdown-item>
                            <el-dropdown-item command="en">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="manage">
                <p class="manageTitle">{{ $t('lang.user.welcome') }}，
                    <!-- <span v-if="memberInfo.Name!=null">{{memberInfo.Name}}</span> -->
                </p>
                <div class="userSwitchWrap">
                    <ul class="tab">
                        <li v-for="(tab,index) in tabList" :key="tab.value" @click="toggle(index,tab.type)" :class="{active:currentActive == index}" class="topbar-item">
                            {{tab.title}}
                        </li>
                    </ul>
                </div>
                <!--:is实现多个组件实现同一个挂载点-->
                <!-- <component :is="currentView" :memberInfo="memberInfo" :memberTrade="memberTrade"></component> -->
            </div>
        </div>
    </div>
</template>

<script>
import homeComponent from "./components/homeComponent"
import managerOrderComponent from "./components/managerOrderComponent"
import ponitComponent from "./components/ponitComponent"
export default {
    name: "index",
    components: {
        homeComponent,
        managerOrderComponent,
        ponitComponent
    },
    data() {
        return {
            loginIn: this.URLS.logIn,
            loginOut: this.URLS.logOut,
            tabList: [{
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
            ],
            currentActive: 0,
            currentView: 'homeComponent',
            memberInfo: null,
            memberTrade: null
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
                        this.selectedLang = '中文'
                        break;
                    }
                case "en":
                    {
                        this.$i18n.locale = "en";
                        this.selectedLang = 'English'
                        break;
                    }
                default:
                    break;
            }
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
        },
        toggle(i, v) {
            this.currentActive = i;
            this.currentView = v;
            console.log(this.currentView)
        },
        //查询个人信息
        queryMain() {
            var _this = this;
            this.$ajax.get(this.URLS.basicInfo)
                .then(function(response) {
                    console.log(response)
                    if (response.data.Entity.Id != null) {
                        _this.memberInfo = response.data.Entity || ''
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
                    console.log(response)
                    if (response.data.Entity.Id != null) {
                        _this.memberTrade = response.data.Entity || ''
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //查询个人交易信息
        queryTradeList() {
            var _this = this;
            this.$ajax({
               headers: {
                    'Content-Type': 'application/json'
                },
                method:'PUT',
                url:this.URLS.tradeList,
                data:{Offset:0,PageSize:10}
            }).then(function(response) {
                    console.log(response)
                    if (response.data.Entity.Id != null) {
                        _this.memberInfo = response.data.Entity || ''
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
               
        },
        
    },
    created() {
        var _this = this;
        _this.queryMain();
        _this.queryTrade();
        _this.queryTradeList();
    }
};
</script>

<style lang="scss" scoped>
.managementWrap {
    color: #fff;
    .manageTitle {
        font-size: 22px;
        padding: 20px 0;
    }
    .userHeadWrap {
        margin: 20px 0;
        color: #fff;
        .leftWrap {
            float: left;
            font-size: 24px;
            .logo {
                height: 65px;
                width: auto;
            }
        }
        .rightWrap {
            float: right;
            font-size: 18px;
            div {
                cursor: pointer;
                float: left;
                margin: 30px 15px;
            }
            .el-dropdown {
                color: #fff;
                font-size: 18px;
            }
        }
    }
    .userSwitchWrap {
        height: 39px;
        .tab {
            .topbar-item {
                float: left;
                font-size: 14px;
                padding: 10px 20px;
                color: #fff;
                font-weight: 300;
                cursor: pointer;
                &.active {
                    border-bottom: 2px solid #fff !important;
                }
                &.hover {
                    border-bottom: 2px solid #fff !important;
                }
            }
        }
    }
}
</style>
