<template>
    <div class="informationWrap">
        <div class="informationInner">
            <div class="item">
                <div class="itemLeft">卖方名:</div>
                <div class=itemRight><input type="text" class="g-input430"></div>
            </div>
            <div class="item">
                <div class="itemLeftInfo">
                    <div class="itemLeft">卖家赢得积分:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
                <div class="itemRightInfo">
                    <div class="itemLeft">卖方积分扣除:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
            </div>
    
            <div class="item">
                <div class="itemLeft">卖方:</div>
                <div class=itemRight><input type="text" class="g-input430"></div>
            </div>
            <div class="item">
                <div class="itemLeftInfo">
                    <div class="itemLeft">买方应得积分:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
                <div class="itemRightInfo">
                    <div class="itemLeft">买方积分减扣:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
            </div>
            <div class="item">
                <div class="itemLeft">交易类型:</div>
                <div class=itemRight><input type="text" class="g-input430"></div>
            </div>
            <div class="item">
                <div class="itemLeftInfo">
                    <div class="itemLeft">交易金额:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
                <div class="itemRightInfo">
                    <div class="itemLeft">交易货币:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
            </div>
            <div class="item">
                <div class="itemLeftInfo">
                    <div class="itemLeft">手续费金额:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
                <div class="itemRightInfo">
                    <div class="itemLeft">手续费币种:</div>
                    <div class=itemRight><input type="text" class="g-input143"></div>
                </div>
            </div>
            <div class="item">
                <div class="itemLeft">备注:</div>
                <div class=itemRight><textarea name="" id="" cols="30" rows="10"></textarea></div>
            </div>
            <div class="submit">
                提交
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "information",
    data() {
        return {
            memberInfo: {

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
    background-color: #181C27;
    width: 880px;
    margin-top: 80px;
    .informationInner {
        padding: 80px;
        .item {
            width: 600px;
            margin: 0 auto;
            margin-bottom: 40px;
            overflow: hidden;
            .itemLeft {
                width: 100px;
                text-align: right;
                float: left;
                line-height: 37px;
            }
            .itemRight {
                margin-left: 20px;
                float: left;
                textarea {
                    width: 430px;
                    height:110px ;
                }
            }
        }
    }
    .submit {
        width: 170px;
        font-size: 16px;
        line-height: 37px;
        height: 37px;
        background-color:#85262B;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        margin: 50px auto;
    }
}
</style>
