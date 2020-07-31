<template>
    <div class="pointWrap">
        <div class="top clearfix">
            <div class="g-fl">
                <div class="g-fl">交易日期：</div>
                <el-date-picker type="datetime"  v-model="searchParam.TradeCreateTime" placeholder="选择交易时间" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </div>
            <div class="g-fl smallInput">
                <div class="g-fl">中间人ID：</div>
                <el-input type="text" v-model="searchParam.middleId" placeholder="请输入中间人ID">
                </el-input>
            </div>
            <div class="g-fl smallInput">
                <div class="g-fl">用户ID：</div>
                <el-input type="text" v-model="searchParam.UserName" placeholder="请输入用户ID">
                </el-input>
            </div>
            <div class="g-fl smallOptionInput">
                <div class="g-fl">交易状态：</div>
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
                <el-button size="small" type="primary" @click="queryAdminTrade">查询</el-button>
            </div>
        </div>
        <div v-if="adminTradeList.length>0">
            <el-table :data="tableData" :cell-style="{padding:'0px'}" 
                :row-style="{height:'55px'}" 
                style="width:100%" 
                class="bigTable" 
                :header-cell-style="headeRowClass" 
                :row-class-name="tableRowClassName"> 
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
            <img src="@/assets/image/noStatus.png" alt="">
            <p>暂时没数据</p>
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
            //隔行变色
        tableRowClassName({ row, rowIndex }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'even-row';
            } else {
                return 'odd-row';
            }
            return 'even-row'
        },
        headeRowClass({ row, column, rowIndex, columnIndex }) {
            //表头的背景颜色
            if (rowIndex == 0) {
                return 'background:#1E2331'
            }
        },
            //管理员查询交易
            queryAdminTrade() {
                var _this = this;
                _this.adminTradeList=[];
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
            }
        },
        created() {
            this.queryAdminTrade()
        }
    };
</script>

<style lang='scss' scoped>
    .pointWrap {
        width: 1100px;
        margin: 0 auto;
        margin-bottom: 60px;
        .top {
            margin: 20px 0;
            overflow: hidden;
            div {
                line-height:37px;
            }
            input {
                line-height: 37px;
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
            margin-right: 30px;
            >>>.el-input__inner {
                height: 37px;
                line-height: 37px;
                font-size: 12px;
                padding-right: 10px;
                color: #fff;
                background-color: #252933;
                border: 1px solid #464952;
            }
            >>>.el-input__icon {
                line-height: 37px;
            }
        }
        .smallInput{
            margin-right: 30px;
            >>> .el-input{
                width: auto;
                float: left;
            }
            >>> .el-input__inner{
                width: 154px;
                height: 37px;
                line-height: 37px;
                background-color: #252933;
                border: 1px solid #464952;
                color: #fff;
            }
            >>> .el-input__inner{
                    height: 37px;
                    line-height: 37px;
                    font-size: 12px;
                    width: 120px;
                    padding: 0 5px;
                }
        }
        .smallOptionInput{
             >>> .el-input{
                width: auto;
                float: left;
            }
            >>> .el-input__inner{
                width: 120px;
                height: 37px;
                line-height: 37px;
                background-color: #252933;
                border: 1px solid #464952;
                color: #fff;
            }
        }
        .el-button--primary{
            background-color: #85262B;
            width: 87px;
            height: 37px;
            border: 1px solid #85262B;
            margin-left: 30px;
        }
        .no-data{
            text-align: center;
        }
    }
</style>