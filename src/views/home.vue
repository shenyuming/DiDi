<template>
    <div class="homeWrap">
        <user-head-component></user-head-component>
        <div class="homeInner">
            <div class="top">
                <div class="topInner">
                    <img class="logo" src="@/assets/image/whyIndex.png" alt="">
                    <div class="line"></div>
                    <div class="titile">
                       {{$t('lang.user.homeWelcome')}}
                    </div>
                    <div class="more"><img src="@/assets/image/icon-bottom.png" alt="">{{$t('lang.user.lookMore')}}</div>
                </div>
            </div>
            <div class="main">
                <ul>
                    <li>
                        <img src="@/assets/image/item1.png" alt="">
                    </li>
                    <li>
                        <img src="@/assets/image/item2.png" alt="">
                    </li>
                    <li>
                        <img src="@/assets/image/item3.png" alt="">
                    </li>
                    <li>
                        <img src="@/assets/image/item4.png" alt="">
                    </li>
                    <li>
                        <img src="@/assets/image/item5.png" alt="">
                    </li>
                    <li>
                        <img src="@/assets/image/item6.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="reason">
                <img class="title" src="@/assets/image/why.png" alt="">
                <p class="line"></p>
                <div class="chooseInner">
                    <img class="chooseImg" src="@/assets/image/choose.png" alt="">
                    <p class="wordesDetail1">{{$t('lang.user.heart')}}</p>
                    <p class="wordesDetail2">{{$t('lang.user.groupServer')}}</p>
                    <p class="wordesDetail3">{{$t('lang.user.evevironment')}}</p>
                    <p class="wordesDetail4">7*{{$t('lang.user.support')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userHeadComponent from "@/components/userHeadComponent"
export default {
    name: "home",
    components: {
        userHeadComponent
    },
    data() {
        return {
            language: localStorage.getItem('language') || 'zh',
        };
    },
    methods: {

    },
    created() {
        var _this = this;
        _this.$i18n.locale = _this.language;
    }
};
</script>

<style lang="scss" scoped>
.homeWrap {
    color: #fff;
    .top {
        background: url("../assets/image/homeBg.png") no-repeat center;
        width: 100%;
        .topInner {
            width: 800px;
            margin: 0 auto;
            text-align: center;
            .logo {
                width: 236px;
                height: 96px;
                margin-top: 130px;
            }
            .line {
                background-color: #85262B;
                margin: 0 auto;
                margin-top: 18px;
                margin-bottom: 77px;
                width: 132px;
                height: 4px;
            }
            .titile {
                line-height: 36px;
                width: 750px;
                margin: 0 auto;
                margin-bottom: 60px;
            }
            .more {
                background: #85262B;
                margin: 0 auto;
                border-radius: 8px;
                width: 214px;
                line-height: 65px;
                height: 65px;
                font-size: 14px;
                img {
                    width: 26px;
                    height: 27px;
                    padding-right: 8px;
                    vertical-align: -10px;
                }
            }
        }
    }
    .main {
        width: 900px;
        margin: 0 auto;
        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            li {
                float: left;
                width: 268px;
                height: 236px;
                img {
                    width: 268px;
                    height: 236px;
                }
            }
        }
    }
    .reason {
        width: 800px;
        margin: 0 auto;
        text-align: center;
        .title {
            width: 409px;
            height: 96px;
        }
        .line {
            background-color: #85262B;
            margin: 0 auto;
            margin-top: 8px;
            margin-bottom: 27px;
            width: 420px;
            height: 4px;
        }
        .chooseInner {
            position: relative;
            .chooseImg {
                width: 596px;
                height: 314px;
            }
            .wordesDetail1 {
                position: absolute;
                top: 110px;
                left: 157px;
            }
            .wordesDetail2 {
                position: absolute;
                top: 255px;
                left: 285px;
            }
            .wordesDetail3 {
                position: absolute;
                top: 110px;
                left: 437px;
            }
            .wordesDetail4 {
                position: absolute;
                top: 255px;
                left: 570px;
            }
        }
    }
}
</style>
