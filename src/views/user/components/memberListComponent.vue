<template>
    <div class="managerOrderWrap">
        <div v-if="tableData.length>0">
            <el-table :data="tableData" :cell-style="{padding:'0px'}" 
            :row-style="{height:'55px'}" 
            style="width:100%" 
            class="bigTable" 
            :header-cell-style="headeRowClass" 
            :row-class-name="tableRowClassName">
                <el-table-column prop="Id" label="会员ID" width="130" />
                <el-table-column prop="Email" label="绑定邮箱" />
                <el-table-column prop="RegisterDate" label="注册时间" />
                <el-table-column prop="Score" label="积分" width="100"/>
                <el-table-column prop="PurchaseCount" label="交易次数" width="100"/>
            </el-table>
            <el-row class="page">
                <el-pagination background="" layout="prev, pager, next" :total="totalOrder" :page-size="pageSize" @current-change="handleCurrentChange" />
            </el-row>
        </div>
        <div class="no-data" v-else>
            暂时没数据
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
            pageSize: 1,
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
        //查询所有的会员信息
        querymemberList() {
            var _this = this;
            this.$ajax({
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    method: 'PUT',
                    url: this.URLS.adminList,
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
        this.querymemberList()
    }
}
</script>

<style lang='scss' scoped>
.managerOrderWrap {
    width: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;
    color: #fff;
    .bigTable {
        margin-bottom: 30px;
        .page {
            margin-top: 30px;
        }
        .no-data {
            text-align: center;
            margin: 40px 0;
        }
    }
}
</style>