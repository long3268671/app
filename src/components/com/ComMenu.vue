<!--侧边导航栏-->
<template>
  <div>
    <el-menu :collapse="isCollapse" class="menu_list" default-active="1-1" :collapse-transition="true" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
      <!--单独一个   没有下拉-->
      <!--动态获取导航条   循环数据  判断是否有child（子选项）分别处理-->
      <template v-for="item in nav">
        <template v-if="!item.child">
          <el-menu-item :index="item.index" :route="item.route">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item v-for="childItem in item.child" :key="childItem.index" :index="childItem.index" :route="childItem.route">{{childItem.title}}</el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>

    export default {
      name: "com-menu",
        data() {
            return {
              nav:[
                {
                  title:'首页',
                  icon:'el-icon-location',
                  route:'/',
                  index:'1'
                },
                {
                  title:'任务管理',
                  icon:'el-icon-menu',
                  route:'',
                  index:'2',
                  child:[
                    {
                      title:'创建任务',
                      route:'create',
                      index:'2-1'
                    },
                    {
                      title:'任务列表',
                      route:'update',
                      index:'2-2'
                    },
                    {
                      title:'外呼查询',
                      route:'create',
                      index:'2-3'
                    }
                    ],
                },
              ]
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
