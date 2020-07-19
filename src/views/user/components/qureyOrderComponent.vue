<template>
    <div class="pointWrap">
        <div class="top clearfix">
            <div class="g-fl">交易日期:
                <el-date-picker type="datetime"  v-model="searchParam.TradeCreateTime" placeholder="选择交易时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </div>
            <div class="g-fl smallInput">
                <span>中间人ID:</span>
                <el-input type="text" v-model="searchParam.middleId" placeholder="请输入中间人ID">
                </el-input>
            </div>
            <div class="g-fl smallInput">用户ID:
                <el-input type="text" v-model="searchParam.UserName" placeholder="请输入用户ID">
                </el-input>
            </div>
            <div class="g-fl smallOptionInput">交易状态：
                <el-select placeholder="请选择" size="small" v-model="searchParam.TradeStatus">
                    <el-option 
                    v-for="item in listStatus" 
                    :key="item.id" 
                    :value="item.id" 
                    :label="item.name">
                    </el-option>
                </el-select>
            </div>
            <div class="g-fl">
                <el-button size="small" type="primary" @click="queryAdminTrade">搜索</el-button>
            </div>
        </div>
        <div v-if="adminTradeList.length>0">
            <el-table :data="adminTradeList" :header-cell-style="{background:'#1e080b',color:'#fff'}" :cell-style="{padding:'0px'}" style="width:100%" class="bigTable">
                <el-table-column prop="TradeId" label="交易ID" />
                <el-table-column prop="TradeStatus" label="交易状态" />
                <el-table-column prop="TradeFileId" label="交易记录文件ID" />
                <el-table-column prop="TradeChannelId" label="交易频道ID" />>
                <el-table-column prop="Seller.Email" label="卖方" />
                <el-table-column prop="Buyer.Email" label="买方" />
                <el-table-column prop="MiddleMan" label="中间人" />>
                <el-table-column prop="Currency" label="交易币种" />
                <el-table-column prop="Amount" label="交易金额" />
                <el-table-column prop="TradeCreateTime" label="交易创建时间" />
                <el-table-column prop="TradeOperateTime" label="交易修改时间" />
                <el-table-column prop="Comment" label="备注" />
            </el-table>
            <el-row class="page">
                <el-pagination background="" layout="prev, pager, next" :total="admintotalOrder" />
            </el-row>
        </div>
        <div class="no-data" v-else>
            暂时没数据
        </div>
    </div>
</template>

<script>
    export default {
        name: "ponit",
        props: {},
        data() {
            return {
                adminTradeList: [],
                admintotalOrder: '',
                pageSize: 10,
                PageIndex: 1,
                listStatus: [{
                        name: '未知',
                        id: '0'
                    },
                    {
                        name: '交易中',
                        id: '1'
                    },
                    {
                        name: '交易成功',
                        id: '2'
                    },{
                        name: '交易完成',
                        id: '3'
                    }
                ],
                searchParam: {
                    TradeCreateTime: '',
                    TradeStatus: '',
                    UserName: '',
                    name: ''
                }
            }
        },
        methods: {
            //管理员查询交易
            queryAdminTrade() {
                var _this = this;
                _this.adminTradeList=[];
                console.log(_this.searchParam.TradeStatus)
                _this.$ajax({
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        method: 'PUT',
                        url: this.URLS.admintrade,
                        data: {
                            "TradeCreateTime": _this.searchParam.TradeCreateTime,
                            "TradeStatus": _this.searchParam.TradeStatus,
                            "UserName": _this.searchParam.UserName,
                            "pagination": {
                                "PageIndex": _this.PageIndex,
                                "PageSize": _this.pageSize
                            }
                        }
                    }).then(function(response) {
                        if (response.data.Entity.Data.length > 0) {
                            _this.adminTradeList = response.data.Entity.Data || ''
                            _this.admintotalOrder = response.data.Entity.TotalCount
                        }
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
            },
            // changeStatus(id){
            //     console.log(id)
            // }
        },
        created() {
            this.queryAdminTrade()
        }
    };
</script>

<style lang='scss' scoped>
    .pointWrap {
        width: 1000px;
        .top {
            margin: 10px 0;
            overflow: hidden;
            div {
                line-height: 25px;
            }
            input {
                line-height: 25px;
                margin: 0 5px;
            }
        }
        .page {
            margin-top: 30px;
        }
         ::v-deep .el-input--small .el-input__inner {
            width: 100px;
            font-size: 12px;
        }
        .el-date-editor {
            >>>.el-input__inner {
                height: 30px;
                line-height: 30px;
                font-size: 12px;
                padding-right: 10px;
            }
            >>>.el-input__icon {
                line-height: 30px;
            }
        }
        .smallInput{
            >>> .el-input{
                width: auto;
            }
            >>> .el-input__inner{
                    height: 30px;
                    line-height: 30px;
                    font-size: 12px;
                    width: 120px;
                    padding: 0 5px;
                }
        }
        .smallOptionInput{
            >>> .el-input__inner{
                width: 120px;
            }
        }
    }
</style>