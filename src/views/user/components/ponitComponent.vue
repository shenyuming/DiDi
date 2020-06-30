<template>
  <div class="pointWrap">
       <el-table :data="tableData" 
          :header-cell-style="{background:'#1e080b',color:'#fff'}"
          :cell-style="{padding:'0px'}" 
          style="width:100%"
          class="bigTable">
          <el-table-column prop="AssociatedOrderId" label="交易号" width="100" />
          <el-table-column prop="OperatorId" label="增减操作ID"  />
          <el-table-column prop="ScoreChange" label="扣除积分"  />
          <el-table-column prop="OperationAt" label="记录时间"  />
          <el-table-column prop="Comment" label="备注"  />>
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
    name: "ponit",
    props: {
      
    },
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
     
    },
  };
</script>

<style lang='scss' scoped>
.pointWrap{
   width: 1000px;
  .page{
      margin-top: 30px;
  }
}
 
</style>