<!--侧边导航栏-->
<template>
  <div>
    <el-menu :collapse="isCollapse" class="menu_list" default-active="1-1" :collapse-transition="true" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
      <!--单独一个   没有下拉-->
      <el-menu-item index="1-1" route="/">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">基本操作</span>
        </template>
        <el-menu-item index="2-1" route="update">form表单</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </template>
        <el-menu-item-group>
          <span slot="title">第一个分组</span>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="第二个分组">
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>

  </div>

</template>

<script>

    export default {
      name: "com-menu",
        data() {
            return {
            }
        },
        computed: {
          isCollapse:function () {
            return this.$store.state.menuType
          }
        },
        methods: {
          handleOpen(key,keypath){
            console.log('开启 key:'+key+'keypath:'+keypath);
          },
          handleClose(key,keypath){
            console.log('关闭 key:'+key+'keypath:'+keypath);
          }
        },
        created() {

        }
    }
</script>

<style scoped="scoped" type='text/css' lang="scss">
  .menu_list:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu{
    text-align: left;
  }
</style>
