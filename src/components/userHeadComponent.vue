<template>
 <div class="userHeadWrap clearfix">
    <div class="leftWrap">
        <img class="logo" src="https://didimarket.cn/img/logo.png" style="">| 用户区
    </div>
    <div class="rightWrap">
       <div >连接Discord</div>
       <div>登出</div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'userHeadComponent',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
.userHeadWrap{
  margin: 20px 0;
  color: #fff;
  .leftWrap{
    float: left;
    font-size: 26px;
    .logo{
      height: 65px; 
      width: auto;
    }
  }
  .rightWrap{
    float: right;
    font-size: 18px;
    div{
      float: left;
      margin: 30px 15px;
    }
  }
}
</style>
