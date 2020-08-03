<template>
    <div class="informationWrap">
        <div class="informationInner">
            <form action="">
                <div class="item">
                    <div class="itemLeft">卖方名:</div>
                    <div class=itemRight>
                        <el-autocomplete class="inline-input g-input430" 
                        v-model="showSellerId" 
                        :fetch-suggestions="querySearchAsync" 
                        :trigger-on-focus="false" 
                        @select="handleSelect"
                         >
                        </el-autocomplete>
                    </div>
                </div>
                <div class="item">
                    <div class="itemLeftInfo">
                        <div class="itemLeft">卖家赢得积分:</div>
                        <div class=itemRight><input type="text" class="g-input143" v-model="SellerServiceScore"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="itemLeft">买方:</div>
                    <div class=itemRight>
                         <el-autocomplete class="inline-input g-input430" 
                            v-model="showBuyrId" 
                            :fetch-suggestions="querySearchAsync" 
                            :trigger-on-focus="false" 
                            @select="handleSelect1"
                            >
                        </el-autocomplete>
                    </div>
                </div>
                <div class="item">
                    <div class="itemLeftInfo">
                        <div class="itemLeft">买方应得积分:</div>
                        <div class=itemRight><input type="text" class="g-input143" v-model="BuyerServiceScore"></div>
                    </div>
                </div>
                <div class="item">
                    <div class="itemLeft">交易状态:</div>
                    <div class=itemRight>
                        <!-- <input type="text" class="g-input430" v-model="TradeStatus"> -->
                         <el-select v-model="TradeStatus" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="itemLeftInfo">
                        <div class="itemLeft">交易金额:</div>
                        <div class=itemRight><input type="text" class="g-input143" v-model="Amount"></div>
                    </div>
                    <div class="itemRightInfo">
                        <div class="itemLeft">交易货币:</div>
                        <div class=itemRight><input type="text" class="g-input143" v-model="Currency"></div>
                    </div>
                </div>
                <!-- <div class="item">
                                                                        <div class="itemLeftInfo">
                                                                            <div class="itemLeft">手续费金额:</div>
                                                                            <div class=itemRight><input type="text" class="g-input143"></div>
                                                                        </div>
                                                                        <div class="itemRightInfo">
                                                                            <div class="itemLeft">手续费币种:</div>
                                                                            <div class=itemRight><input type="text" class="g-input143"></div>
                                                                        </div>
                                                                    </div> -->
                <div class="item">
                    <div class="itemLeft">备注:</div>
                    <div class=itemRight><textarea name="" id="" cols="30" rows="10" v-model="Comment"></textarea></div>
                </div>
            </form>
            <div class="operate">
                <div class="save" @click="save">
                    保存
                </div>
                <div class="submit" @click="submitType">
                    提交
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Util from '@/utils/util'
    export default {
        name: "information",
        data() {
            return {
                dataTrade: null,
                tradeId: '', //url上获取
                SellerId: '', //卖方名
                SellerServiceScore: '', //卖方赢得积分
                BuyerId: '', //买方名
                BuyerServiceScore: '', //买方赢得积分
                TradeStatus: '', //交易类型
                Amount: '', //交易金额
                Currency: '', //交易货币
                Comment: '', //备注
                timeout: '', //
                showBuyrId:'',//为了页面显示
                showSellerId:'',
                TradeChannelId:'',
                options:[
                    {
                        value:'0',
                        label:'未知'
                    },{
                        value:'1',
                        label:'成功'
                    },{
                        value:'2',
                        label:'进行中'
                    }
                ]
            };
        },
        methods: {
            // 查询已经填写的信息
            queryTrade() {
                var _this = this;
                _this.$ajax.get(this.URLS.tradeResult, {
                        params: {
                            tradeId: Util.getURLParam('id') || '5e45b445-58s1-4649-9de5-633132628923'
                        }
                    })
                    .then(function(response) {
                        if (response.data.Entity.Id != null) {
                            if (response.data.Entity.Seller != null) {
                                _this.SellerId = response.data.Entity.Seller.Id || ''
                            }
                            if (response.data.Entity.Buyer != null) {
                                _this.BuyerId = response.data.Entity.Buyer.Id || ''
                            }
                            _this.SellerServiceScore = response.data.Entity.SellerServiceScore || ''
                            _this.BuyerServiceScore = response.data.Entity.BuyerServiceScore || ''
                            if (response.data.Entity.TradeStatus != null) {
                                var status = response.data.Entity.TradeStatus;
                                if (status == 2) {
                                    _this.TradeStatus = '成功'
                                } else if (status == 1) {
                                    _this.TradeStatus = '进行中'
                                    
                                } else {
                                    _this.TradeStatus = '未知'
                                }
                            }
                            _this.Amount = response.data.Entity.Amount || ''
                            _this.Currency = response.data.Entity.Currency || ''
                            _this.Comment = response.data.Entity.Comment || ''
                            _this.TradeChannelId = response.data.Entity.TradeChannelId || ''
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            handleSelect(item) {
                this.SellerId = item.Id
                this.showSellerId = item.Id+'(' + item.Email + ')'
            },
            handleSelect1(item) {
                this.BuyerId = item.Id
                this.showBuyrId = item.Id+item.Email
            },
            querySearchAsync(queryString, callback) {
                var _this = this;
                if (queryString != '') {
                    this.$ajax({
                            headers: {
                                'Content-Type': 'application/json; charset=utf-8'
                            },
                            method: 'PUT',
                            url: this.URLS.candidate,
                            data: {
                                SearchTerm: queryString,
                                pagination: {
                                    PageIndex: 1,
                                    PageSize: 10
                                }
                            }
                        }).then(function(response) {
                            if (response.data.Entity != null) {
                                response.data.Entity.Data.forEach((item, index) => {
                                    item.value = item.Id + '(' + item.Email + ')'; //将想要展示的数据作为value
                                })
                                let restaurants =  response.data.Entity.Data;
                                 //先清理定时器
                                clearTimeout(_this.timeout);
                                _this.timeout = setTimeout(() => {
                                    callback(restaurants);
                                }, 50 * Math.random());
                            } else {
                                _this.$message({
                                    type: 'error',
                                    message: response.data.Error.ErrorField
                                })
                            }
                        })
                        .catch(function(error) {
                            callback([]);
                            return;
                            console.log(error);
                        })
                }
            },
            //报存
            save() {
                this.editForm(this.URLS.tradeSave)
            },
            //提交
            submitType() {
                this.editForm(this.URLS.tradeSubmit)
            },
            editForm(_url) {
                var _this = this;
                var numPattern = /^\d{1,}$/;
                console.log(!numPattern.test(_this.BuyerServiceScore))
                if (!numPattern.test(_this.BuyerServiceScore)) {
                    _this.$message({
                        message: '请输入正确的买家赢得积分'
                    })
                    return
                }
                if (!numPattern.test(_this.Amount)) {
                    _this.$message({
                        message: '请输入正确的交易金额'
                    });
                    return
                }
                if (!numPattern.test(_this.SellerServiceScore)) {
                    _this.$message({
                        message: '请输入正确的卖家赢得积分'
                    });
                    return;
                }
                let param = {
                    Id: Util.getURLParam('id') || '5e45b445-58s1-4649-9de5-633132628923',
                    TradeStatus: _this.TradeStatus || 0,
                    Seller: {
                        Id: _this.SellerId
                    },
                    Buyer: {
                        Id: _this.BuyerId
                    },
                    Currency: _this.Currency,
                    Amount: _this.Amount,
                    BuyerServiceScore: _this.BuyerServiceScore,
                    SellerServiceScore: _this.SellerServiceScore,
                    Comment: _this.Comment,
                    TradeChannelId:_this.TradeChannelId
                }
                console.log(param)
                _this.$ajax.post(_url, param)
                    .then(function(response) {
                        if (response.data.Entity != null) {
                            _this.$message({
                                message: '保存成功'
                            });
                        }
                        if (response.data.Error.ErrorCode) {
                            _this.$message({
                                message: response.data.Error.ErrorField
                            });
                        }
                        console.log(response)
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            }
        },
        created() {
            this.queryTrade();
            
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
                >>>.el-input__inner {
                    background-color: #181C27;
                    border: 1px solid rgba(255, 255, 255, 0.30);
                    color: #fff;
                    font-size: 12px;
                }
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
                        height: 110px;
                    }
                }
            }
        }
        .operate {
            margin: 0 auto;
            width: 500px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .save {
                width: 170px;
                font-size: 16px;
                line-height: 37px;
                height: 37px;
                background-color: #85262B;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                margin: 50px auto;
            }
            .submit {
                width: 170px;
                font-size: 16px;
                line-height: 37px;
                height: 37px;
                background-color: #85262B;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                margin: 50px auto;
            }
        }
    }
</style>
