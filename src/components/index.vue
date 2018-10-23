<template>
  <el-container>

    <el-header>
      <com-header></com-header>
    </el-header>
    <el-container>
      <!--左侧菜单栏-->
      <el-aside width="auto">
        <com-menu></com-menu>
      </el-aside>
      <!--右侧正文-->
      <el-container >
        <!--正文-->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--底部-->

        <el-footer>
          <com-foot></com-foot>
        </el-footer>
      </el-container>

    </el-container>
  </el-container>
</template>

<script>
    import ComHeader from './com/ComHeader';
    import ComFoot from './com/ComFoot';
    import ComMenu from './com/ComMenu'
    export default {
      components: {
        ComHeader,
        ComFoot,
        ComMenu
      },
      name: "index",
        data() {
            return {
                list:[],
            }
        },

        conputed: {

        },
        methods: {
          changeMenuType(val){
          }
        },
        created() {
          // this.$http.get('/api/users/getAllUser').then(res => {
          //   console.log(res)
          //   if (res.data.code == '200') {
          //     this.list = this.list.concat(res.data.list)
          //   } else {
          //     layer.alert('请求出错')
          //   }
          // })
        }
    }
</script>

<style type='text/css' lang="scss">
  @import "../assets/scss/base";
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 450px;
    height: calc(100vh - 60px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: calc(100vh - 120px);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
