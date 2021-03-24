<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  background: #ffffff;
}
</style>

<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #860909;
  color: #fff;
}
.el-pagination.is-background .el-pager li.active {
  color: #fff;
  cursor: default;
}
.el-pagination.is-background .el-pager li:hover {
  color: #860909;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #860909;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #860909;
  color: #fff;
}
.el-pager li.active {
  color: #860909;
  cursor: default;
}
.el-pagination .el-pager li:hover {
  color:#860909;
}
.el-pagination .el-pager li:not(.disabled):hover {
  color: #860909;
}
</style>
