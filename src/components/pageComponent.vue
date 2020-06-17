<template>
    <div class="pagination-main" :style="{textAlign:align}">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="page.start"
            :page-size="page.limit"
            layout="prev, pager, next"
            :total="page.total"
            background=""
            hide-on-single-page
        ></el-pagination>
    </div>
</template>

<script>
export default {
  name: "Pagination-main",
  props: {
    page: Object,
    align: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCurrentChange(v) {
      this.page.start = v;
      this.$emit("page-change", v);
    }
  },
};
</script>

<style lang='scss' scoped>
.pagination-main {
  margin-top: 30px;
  right: 20px;
  height: 28px;
  .el-pagination {
    height: 28px;
    padding: 0;
    >>> .el-pager {
      .number {
        font-size: 12px;
        font-weight: normal;
        color: #666666;
        &.active {
          background-color: #6950d9;
          color: #fff;
        }
      }
    }
    .btn-next {
      margin-right: 0px;
    }
  }
}
</style>