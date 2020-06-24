<template>
  <div class="userSwitchWrap">
    <ul class="tab">
      <router-link v-for="(item,index) in list" :key="item.value" :to="{path:item.path,query:{userindex:index}}" :class="{active:currentIndex == index}" @click.native="changeBgc(index)" class="topbar-item">
        {{item.title}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'userHeadComponent',
    data() {
      return {
        list: [{
            path: '/user/index',
            title: '会员主页'
          },
          {
            path: '/user/manmageOrder',
            title: '管理订单'
          },
          {
            path: '/user/point',
            title: '积分记录'
          }
        ],
        currentIndex: 0
      }
    },
    methods: {
      changeBgc(index) {
        this.currentIndex = index
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
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
</style>
