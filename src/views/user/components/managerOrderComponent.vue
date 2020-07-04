<template>
    <div class="managerOrderWrap">
       <el-table :data="tableData" 
          :header-cell-style="{background:'#1e080b',color:'#fff'}"
          :cell-style="{padding:'0px'}" 
          style="width:100%"
          class="bigTable">
          <el-table-column prop="TradeId" label="交易ID" width="100" />
          <el-table-column prop="Role" label="交易类型"  />
          <el-table-column prop="MiddleManId" label="中间人Discord"  />
          <el-table-column prop="TradeStatus" label="交易状态"  />
          <el-table-column prop="TradeCreateTime" label="交易完成时间"  />
          <el-table-column prop="TradeCompleteTime" label="交易完成时间"  />
          <el-table-column prop="Currency" label="交易币种"  />
          <el-table-column prop="Amount" label="交易金额"  />
          <el-table-column prop="TradeScore" label="交易积分"  />
       </el-table>
        <el-row class="page">
            <el-pagination
            background=""
            layout="prev, pager, next"
            :total="1000"
            />
      </el-row>
    </div>
</template>

<script>
export default {
    name: "managerOrder",
    props: {

    },
    data() {
        return {
            tableData: [{
                TradeId: '2016-05-02',
                Role: '王小虎',
                MiddleManId: '上海市普陀区金沙江路 1518 弄',
                TradeStatus: '2016-05-02',
                TradeCreateTime: '王小虎',
                MiddleManId: '上海市普陀区金沙江路 1518 弄',
                TradeCompleteTime: '2016-05-02',
                Amount: '王小虎',
                TradeScore: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    methods: {
       //查询个人交易信息
        queryTradeList() {
            var _this = this;
            this.$ajax.put(this.URLS.tradeList)
                .then(function(response) {
                    console.log(response)
                    if (response.data.Entity.Id != null) {
                        _this.memberInfo = response.data.Entity || ''
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
    },
    created(){
        this.queryTradeList()
    }
}
</script>

<style lang='scss' scoped>
.managerOrderWrap{
  width: 1000px;
  .page{
      margin-top: 30px;
  }
    
}
</style>