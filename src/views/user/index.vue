<template>
  <div class="managementWrap">
    <div class="comWidth">
      <div class="userHeadWrap clearfix">
        <div class="leftWrap">
          <img class="logo" src="https://didimarket.cn/img/logo.png" style="">| 用户区
        </div>
        <div class="rightWrap">
          <div>连接Discord</div>
          <div>登出</div>
          <div>语言</div>
        </div>
      </div>
      <div class="manage">
        <p class="manageTitle">欢迎光临，申</p>
        <div class="userSwitchWrap">
          <ul class="tab">
            <li v-for="(tab,index) in tabList" :key="tab.value" @click="toggle(index,tab.type)" :class="{active:currentActive == index}" class="topbar-item">
              {{tab.title}}
            </li>
          </ul>
        </div>
        <!--:is实现多个组件实现同一个挂载点-->
        <component :is="currentView"></component>
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
        tabList: [{
            type: 'homeComponent',
            title: '会员主页'
          },
          {
            type: 'managerOrderComponent',
            title: '管理订单'
          },
          {
            type: 'ponitComponent',
            title: '积分记录'
          }
        ],
        currentActive: 0,
        currentView: 'homeComponent',
      }
    },
    methods: {
      toggle(i, v) {
        this.currentActive = i;
        this.currentView = v;
        console.log(this.currentView)
      }
    },
    created() {}
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
