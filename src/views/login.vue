<template>
   <div class="loginWrap">
    <div class="loginInner">
        <div class="login">
            <div class="content-holder">
                <div class="user-head">
                    <div class="text-box">
                        <div class="subtitle">
                            <img src="@/assets/image/whyIndex.png" alt="">
                        </div>
                        <p class="subInfo">Login with Discord to continue.</p>
                    </div>
                </div>
                <a :href="loginIn" class="detail-holder">Login</a>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            loginIn: this.URLS.logIn
        };
    },
    methods: {

    },
    created() {

    },
    beforeCreate() {
        document.getElementsByTagName("body")[0].className = "loginBg";
    },
    beforeDestroy: function() {
        document.body.removeAttribute("class", "loginBg");
    }
};
</script>

<style lang="scss" scoped>
.loginWrap{
    padding-top: 200px;
    .loginInner {
    margin: 0 auto;
    .login {
        text-align: center;
        .vmlogo {
            width: 150px;
            margin-top: 60px;
            margin-bottom: 40px;
        }
        .content-holder {
            border: 2px solid #282f42;
            border-radius: 10px;
            background-color: rgba(0, 0, 0, .3);
            width: 500px;
            margin: 0 auto;
            .user-head {
                font-size: 13px;
                line-height: 16px;
                font-weight: 300;
                text-align: center;
                padding: 20px 20px 10px 20px;
                border-radius: 10px;
                color: #6b7182;
                background-color: rgba(0, 0, 0, .3);
                .subtitle {
                    img{
                        width:236px ;
                        height: 96px;
                    }
                }
                .subInfo {
                    line-height: 35px;
                    padding: 10px 0;
                    color: #aaa;
                }
            }
            .detail-holder {
                display: block;
                padding: 15px 30px;
                font-size: 26px;
                width: 400px;
                margin: 20px auto;
                background: #b81d24;
                cursor: pointer;
                border-radius: 10px;
                color: #fff;
            }
        }
    }
}
}

</style>
