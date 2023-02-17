<template>
  <el-header class="header">
    <el-row class="header-row">
      <el-col :span="8">
        <el-image src="./logo.png" fit="contain"></el-image>
      </el-col>
      <el-col :span="16">
        <el-menu class="menu" mode="horizontal" background-color="#FFFFFF">
          <el-menu-item index="board" @click="route('/board')"
            >게시판</el-menu-item
          >
          <el-submenu index="community">
            <template #title> 커뮤니티 </template>
            <el-menu-item index="notice" @click="route('/community/notice')"
              >공지사항</el-menu-item
            >
            <el-menu-item index="event" @click="route('/community/event')"
              >이벤트</el-menu-item
            >
            <el-menu-item index="jobs" @click="route('/community/jobs')"
              >구인/구직</el-menu-item
            >
            <el-menu-item index="qna" @click="route('/community/qna')"
              >질문과 답변</el-menu-item
            >
          </el-submenu>
          <el-menu-item index="recruit">1</el-menu-item>
          <el-menu-item index="market">2</el-menu-item>
          <el-col :span="8" class="search-col">
            <el-input
              class="search-input"
              placeholder="Search..."
              prefix-icon="el-icon-search"
            />
          </el-col>
        </el-menu>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  methods: {
    route(path) {
      this.$router.push(path);
    },
  },
};
</script>


<style>
@import "element-ui/lib/theme-chalk/index.css";

.header {
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.header-row {
  height: 60px;
}

.menu {
  line-height: 60px;
}

.menu .el-menu-item {
  padding: 0 15px;
}

.menu .el-submenu__title {
  padding: 0 15px;
}

.search-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search-input {
  width: 300px;
  margin-right: 15px;
}
</style>
