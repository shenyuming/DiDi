<template>
    <div class="managerOrderWrap">
        <div v-if="tableData.length>0">
            <el-table :data="tableData" :header-cell-style="{background:'#1e080b',color:'#fff'}" :cell-style="{padding:'0px'}" style="width:100%" class="bigTable">
                <el-table-column prop="Id" label="Id" width="100" />
                <el-table-column prop="Email" label="用户邮箱" />
                <el-table-column prop="RegisterDate" label="注册时间" />
                <el-table-column prop="Score" label="积分" />
                <el-table-column prop="PurchaseCount" label="购买次数" />
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
            pageSize: 10,
            PageIndex: 1
        }
    },
    methods: {
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
    .page {
        margin-top: 30px;
    }
    .no-data {
        text-align: center;
        margin: 40px 0;
    }
}
</style>