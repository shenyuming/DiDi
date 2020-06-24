<template>
  <div class="loginWrap">
    <div class="login">
      <img class="vmlogo" src="@/assets/image/logo.png">
      <div class="content-holder">
        <div class="user-head">
          <div class="text-box">
            <strong class="subtitle">DiDiMarket</strong>
            <p class="subInfo">Login with Discord to continue.</p>
          </div>
        </div>
        <div class="detail-holder">
          <a href="" class="btn">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {};
    },
    methods: {},
    created() {}
  };
</script>

<style lang="scss" scoped>
  .loginWrap {
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
        background-color: rgba(0,0,0,.3);
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
          background-color: rgba(0,0,0,.3);
           .subtitle {
            font-size: 21px;
            line-height: 25px;
            color: #fff;
            margin: 0 0 10px;
          }
          .subInfo{
            line-height: 35px;
            padding: 10px 0;
            color:#aaa;
          }
        }
        .detail-holder{
           padding: 15px 30px;
           font-size: 26px;
           width: 400px;
           margin: 20px auto;
           background: #b81d24;
           cursor: pointer;
           border-radius: 10px;
           .btn{
             color: #fff;
           }
        }
      }
    }
  }
</style>
