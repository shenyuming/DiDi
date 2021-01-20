<template>
    <div>
        <head-component></head-component>
        <div class="managerOrderWrap">
            <div v-if="tableData.length>0">
                <el-table :data="tableData" :cell-style="{padding:'0px'}" :row-style="{height:'55px'}" style="width:100%" class="bigTable" :header-cell-style="{background:'#0A0D2B',color:'#fff'}">
                    <el-table-column prop="merchantName" label="Merchan tName" width="160" />
                    <el-table-column prop="merchantAddress" label="Merchant Address" />
                    <el-table-column prop="transactionAmount" label="Transaction Amount" />
                    <el-table-column prop="Score" label="Merchant Address" />
                    <el-table-column prop="createTime" label="CreateTime" />
                    <el-table-column prop="transactionDate" label="CreateTime" />
                    <el-table-column prop="status" label="Status" width="60" />
                </el-table>
                <el-row class="page-common">
                    <el-pagination background="" layout="prev, pager, next, sizes" :total="totalOrder" :page-size="pageSize" :page-sizes="[10,20,50,100]" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </el-row>
            </div>
            <div class="no-data" v-else>
                <img src="@/assets/image/noStatus.png" alt="">
                <p>no data ~</p>
            </div>
        </div>
    </div>
</template>

<script>
    import headComponent from '@/components/headComponent'
    export default {
        name: "order",
        components: {
            headComponent
        },
        props: {},
        data() {
            return {
                tableData: [],
            }
        },
        methods: {},
        created() {}
    }
</script>
<style lang="scss" scoped>
.managerOrderWrap{
    width: 800px;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
    img{
        width: 300px;
        height: 300px;
    }
    p{
        color: #fff;
        margin-top: 20px;
        font-size: 20px;
    }
}
</style>
