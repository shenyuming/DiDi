<template>
    <div class="pointWrap">
        <div class="ponitInner">
            <div v-if="tableData.length>0">
                <el-table :data="tableData" :cell-style="{padding:'0px'}" :row-style="{height:'55px'}" style="width:100%" class="bigTable" :header-cell-style="headeRowClass" :row-class-name="tableRowClassName">
                    <el-table-column prop="AssociatedOrderId" label="交易号" width="100" />
                    <el-table-column prop="OperatorId" label="增减操作ID" />
                    <el-table-column prop="ScoreChange" label="扣除积分" />
                    <el-table-column prop="OperationAt" label="记录时间" width="120"/>
                    <el-table-column prop="Comment" label="备注" />>
                </el-table>
                <el-row class="page">
                    <el-pagination background="" layout="prev, pager, next" :total="1000" />
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
    name: "ponit",
    props: {},
    data() {
        return {
            tableData: [{
                AssociatedOrderId: '2016-05-02',
                OperatorId: '王小虎',
                ScoreChange: '上海市普陀区金沙江路 1518 弄',
                OperationAt: '2016-05-02',
                Comment: '王小虎'
            }]
        }
    },
    methods: {
        //隔行变色
        tableRowClassName({
            row,
            rowIndex
        }) {
            if ((rowIndex + 1) % 2 === 0) {
                return 'even-row';
            } else {
                return 'odd-row';
            }
            return 'even-row'
        },
        headeRowClass({
            row,
            column,
            rowIndex,
            columnIndex
        }) {
            //表头的背景颜色
            if (rowIndex == 0) {
                return 'background:#1E2331'
            }
        },
    },
};
</script>

<style lang='scss' scoped>
.pointWrap {
    width: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;
    .page {
        margin-top: 30px;
    }
}
</style>