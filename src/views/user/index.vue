<template>
  <div class="managementWrap">
    <div class="comWidth">
      <userHeadComponent></userHeadComponent>
      <div class="manage">
        <p class="manageTitle">欢迎光临，申</p>
        <userTabComponent></userTabComponent>
        <div class="mainWrap">
          <div class="mainContent">
            <div class="leftContent">
              <div class="imgTop">
                <img class="vmlogo" src="@/assets/image/logo.png">
                <span class="vmCardname">非会员</span>
              </div>
              <p class="vmNumber">请购买会员资格以显示您的密钥</p>
              <p class="name">持卡人: 申</p>
              <p class="date">到期日: 不适用</p>
              <div class="checkInfo">请先核实您的DISCORD </div>
            </div>
            <div class="rightContent">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userHeadComponent from "@/components/userHeadComponent";
  import userTabComponent from "@/components/userTabComponent"
  export default {
    name: "",
    components: {
      userHeadComponent,
      userTabComponent
    },
    data() {
      return {}
    },
    methods: {},
    created() {},
    // 创建前设置
    beforeCreate() {
      const urlPah = require('@/assets/image/auth2.png')
      document.querySelector('body')
        .setAttribute('style', 'background-repeat:no-repeat;background-attachment:fixed;background-size: cover; background-color:#000;background-image:url("' + urlPah + '") ')
    },
    // 销毁前清除
    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
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
    .mainWrap {
      width: 100%;
      min-height: 400px;
      background-color: rgba(0, 0, 0, .3);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      .mainContent {
        padding: 30px;
      }
    }
  }
</style>
