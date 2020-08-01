<template>
    <div class="headTop">
        <div class="g-fl">
            <img class="logoImg g-fl" src="@/assets/image/logoTopAll.png" alt="">
            <p class="index g-fl" @click="hrefHome">{{$t('lang.user.index') }}</p>
            <a class="link g-fl" :href="loginIn">{{ $t('lang.user.connectDiscord') }}</a>
        </div>
        <div class="g-fr">
            <div class="person g-fl" @click="hrefUser">
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
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name: 'userHeadComponent',
    data() {
        return {
            language: localStorage.getItem('language') || 'ch',
            zh: true,
            en: false,
            loginIn: this.URLS.logIn,
            loginOut: this.URLS.logOut,
            memberInfo: {
                Email: '',
                Name: '',
                Id: '',
                IsInBlackList: '',
                Avatar: '',
                IsAdmin: ''
            },
        }
    },
    watch: {
        language: {
            handler(n, o) { //n：当前msg的值，o：msg变化之前的值
                if(n!=o){
                   localStorage.setItem('language', o)  
                    this.$i18n.locale = o;
                }
            },
            immediate: true, //设置是否一开始就对数据进行监听   也就是是否立即执行handler函数，false为不执行   
         }
    },
    computed: {

    },
    methods: {
        //跳转到首页
        hrefHome() {
            this.$router.push({ path: '/home' })
        },
        hrefUser(){
             this.$router.push({ path: '/user/index' })
        },
        // 切换语言
        handleCommand(command) {
            switch (command) {
                case "zh":
                    {
                        this.$i18n.locale = "zh";
                        this.zh = false;
                        this.en = true;
                         this.language = 'zh';
                        break;
                    }
                case "en":
                    {
                        this.$i18n.locale = "en";
                        this.zh = true;
                        this.en = false;
                        this.language = 'en';
                        break;
                    }
                default:
                    break;
            }
            localStorage.setItem('language', command);
            this.$emit('childByValue', command)
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

                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.queryMain();
    }
}
</script>

<style lang="scss" scoped>
.headTop {
    width: 1100px;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    margin: 0 auto;
    color: #fff;
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
</style>
