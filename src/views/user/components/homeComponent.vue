<template>
    <div class="homeWrap">
        <div class="userInner">
            <div class="likeui likeui1">
                <p class="status">{{$t('lang.user.status') }}</p>
                <p class="statusDetail">正常</p>
            </div>
            <div class="likeui likeui2">
                <p class="status">{{$t('lang.user.currentPoint')}}</p>
                <p class="statusDetail">{{memberTrade.Score}}<span class="icon">分</span></p>
            </div>
            <div class="likeui likeui3">
                <p class="status">{{$t('lang.user.tradeTimes')}}</p>
                <p class="statusDetail">{{memberTrade.SellCount}}<span class="icon">次</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
        memberInfo: {
            type: Object,
            default: null
        },
        memberTrade: {
            type: Object,
            default: null
        }
    },
    data() {
        return {

        };
    },
    methods: {

    },
    created() {

    }
};
</script>

<style lang='scss' scoped>
.homeWrap {
    width: 1000px;
    margin: 0 auto;
    .userInner {
        margin: 0 auto;
        overflow: hidden;
        width: 726px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .likeui {
            text-align: center;
            margin-top: 60px;
            .status {
                padding-top: 40px;
                padding-bottom: 30px;
                line-height: 30px;
            }
            .statusDetail {
                font-size: 24px;
                margin-right: 2px;
                .icon {
                    font-size: 12px;
                }
            }
        }
        .likeui1 {
            background: url('../../../assets/image/status-bg.png') no-repeat center;
            width: 202px;
            height: 215px;
            background-size: 100%;
        }
        .likeui2 {
            background: url('../../../assets/image/point-bg.png') no-repeat center;
            width: 202px;
            height: 215px;
            background-size: 100%;
        }
        .likeui3 {
            background: url('../../../assets/image/time-bg.png') no-repeat center;
            width: 202px;
            height: 215px;
            background-size: 100%;
        }
    }
}
</style>