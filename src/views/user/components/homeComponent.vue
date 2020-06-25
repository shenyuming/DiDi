<template>
  <div class="userHomeWrap">
    <div class="mainContent">
      <div class="leftContent">
        <div class="imgTop">
          <img class="vmlogo" src="@/assets/image/logo.png">
        </div>
        <p class="nameId">ID: 122222222222</p>
        <p class="nameId">持卡人: 申思思</p>
        <p class="nameId">状态：正常</p>
        <p class="nameId">当前积分：200分</p>
      </div>
      <div class="rightContent">
        <p class="title">个人资料</p>
        <p class="right-info">持卡人：<span>申思思</span></p>
        <p class="right-info">邮箱：<span>jsssym829@163.com</span></p>
        <p class="right-info">交易次数：<span>20000</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      
    },
    data() {
      return {};
    },
    methods: {
     
    },
  };
</script>

<style lang='scss' scoped>
  .userHomeWrap {
    width: 100%;
    min-height: 400px;
    background-color: rgba(0, 0, 0, .3);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    .mainContent {
      padding: 30px;
      .leftContent {
        float: left;
        background: url("../../../assets/image/vipBg.png") no-repeat top;
        background-size: 100%;
        height: 300px;
        width: 200px;
        border-radius: 10px;
        padding: 10px;
        .imgTop {
          text-align: center;
          padding: 10px 0 10px 0;
          .vmlogo {
            width: 80px;
            height: auto;
          }
        }
        .nameId {
          line-height: 35px;
        }
      }
      .rightContent {
        margin-left: 40px;
        min-height: 320px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        float: left;
        padding: 25px;
        box-sizing: border-box;
        width: 550px;
        .title {
          border-bottom: 1px solid #fff;
          font-size: 28px;
          line-height: 46px;
          margin-bottom: 20px;
        }
        .right-info {
          font-size: 14px;
          line-height: 30px;
          span {
            text-align: right;
          }
        }
      }
    }
  }
</style>