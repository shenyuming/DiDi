<template>
    <div class="informationWrap">
        <div class="item">
            <div class="itemLeft">交易频道ID:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">交易状态:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">交易币种:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">金额:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">交易备注:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">买家ID:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">卖家ID:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">所获积分:</div>
            <div class=itemRight><input type="text"></div>
        </div>
        <div class="item">
            <div class="itemLeft">交易评分:</div>
            <div class=itemRight><textarea name="" id="" cols="30" rows="10"></textarea></div>
        </div>
        <div class="submit">
          提交
        </div>
    </div>
</template>

<script>
export default {
    name: "information",
    data() {
        return {
            memberInfo:{

            }
        };
    },
    methods: {
        // 查询信息
        // queryAdminInfo() {
        //     this.$ajax.get(this.URLS.adminInfo, {
        //             params: {
        //                 discordIdStr: 111
        //             }
        //         })
        //         .then(function(response) {
        //             console.log(response)
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         })
        // }
    },
    created() {

    }
};
</script>

<style lang="scss" scoped>
.informationWrap {
    margin: 0 auto;
    color: #fff;
    width: 800px;
    margin-top: 20px;
    .item {
        width: 600px;
        margin: 10px auto;
        overflow: hidden;
        height: 40px;
        line-height: 40px;
        .itemLeft {
            width: 100px;
            text-align: right;
            float: left;
        }
        .itemRight {
            margin-left: 20px;
            float: left;
            input {
                padding: 0 10px;
                height: 25px;
                width: 400px;
            }
            textarea {
                padding: 0 10px;
            }
        }
    }
    .submit{
      width: 350px;
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      background-color: red;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      margin: 50px auto;
    }
}
</style>
