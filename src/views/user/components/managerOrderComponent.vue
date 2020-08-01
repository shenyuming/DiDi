// 普通会员的订单管理
<template>
   <div class="managerOrderWrap">
        <div class="managerInner">
        <div v-if="tableData.length>0">
            <el-table :data="tableData" 
             :cell-style="{padding:'0px'}" 
             :row-style="{height:'55px'}" 
            style="width:100%" 
            class="bigTable" 
            :header-cell-style="headeRowClass" 
            :row-class-name="tableRowClassName">
                <el-table-column prop="TradeId" label="交易ID" width="100" />
                <el-table-column prop="Role" label="交易类型" />
                <el-table-column prop="MiddleManId" label="中间人Discord" />
                <el-table-column prop="TradeStatus" label="交易状态" />
                <el-table-column prop="TradeCreateTime" label="交易完成时间" />
                <el-table-column prop="TradeCompleteTime" label="交易完成时间" />
                <el-table-column prop="Currency" label="交易币种" />
                <el-table-column prop="Amount" label="交易金额" width="100" />
                <el-table-column prop="TradeScore" label="交易积分" width="100"/>
            </el-table>
            <el-row class="page">
                <el-pagination background="" layout="prev, pager, next" :total="totalOrder" :page-size="pageSize" @current-change="handleCurrentChange" />
            </el-row>
        </div>
        <div class="no-data" v-else>
            <img src="@/assets/image/noStatus.png" alt="">
            <p>暂时没数据</p>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    name: "managerOrder",
    props: {},
    data() {
        return {
            tableData: '',
            totalOrder: '',
            pageSize: 10,
            PageIndex: 1
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
        //查询个人交易信息
        queryTradeList() {
            var _this = this;
            this.$ajax({
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    method: 'PUT',
                    url: this.URLS.tradeList,
                    data: {
                        PageIndex: _this.PageIndex,
                        PageSize: _this.pageSize
                    }
                }).then(function(response) {
                    if (response.data.Entity.Data.length > 0) {
                        _this.tableData = response.data.Entity.Data || ''
                        _this.totalOrder = response.data.Entity.TotalCount
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        //改变页面
        handleCurrentChange(val) {
            console.log(val)
            // 改变页的时候调用一次
            this.PageIndex = val;
            this.queryTradeList()
        }
    },
    created() {
        this.queryTradeList()
    }
}
</script>

<style lang='scss' scoped>
.managerOrderWrap {
    width: 1000px;
    margin: 0 auto;
     margin-top: 30px;
    margin-bottom: 60px;
    .page {
        margin-top: 30px;
    }
    .no-data {
        text-align: center;
        margin: 40px 0;
    }
}
</style>