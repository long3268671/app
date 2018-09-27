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
    import ElContainer from "element-ui/packages/container/src/main";
    import ElHeader from "element-ui/packages/header/src/main";
    import ElAside from "element-ui/packages/aside/src/main";
    import ElMain from "element-ui/packages/main/src/main";
    import ElFooter from "element-ui/packages/footer/src/main";
    import ComHeader from './com/ComHeader';
    import ComFoot from './com/ComFoot';
    import ComMenu from './com/ComMenu'
    export default {
      components: {
        ElFooter,
        ElMain,
        ElAside,
        ElHeader,
        ElContainer,
        ComHeader,
        ComFoot,
        ComMenu
      },
      name: "index",
        data() {
            return {
                list:[]
            }
        },

        conputed: {

        },
        methods: {

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

<style scoped="scoped" type='text/css' lang="scss">
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
    line-height: 400px;
    height: calc(100vh - 120px);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
