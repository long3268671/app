<!--头部组件-->
<template>
    <div id="header">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            Element+Vue 前端框架
          </div>
        </el-col>
        <el-col :span="1">
            <el-button type="primary" v-if="menuType" @click="changeMenuType">展开</el-button>
            <el-button type="primary" v-else="menuType" @click="changeMenuType">折叠</el-button>
        </el-col>
        <el-col :span="3" :offset="14">
          <div class="grid-content bg-purple">
            个人信息1
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple" @click="text">
            <a href="javascript:;">
              <span>个人信息2</span>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "com-header",
        data() {
            return {
            }
        },
      computed: {
        menuType:function () {
          return this.$store.state.menuType
        }
        },
        methods: {
          changeMenuType(){
            this.$store.commit('setMenuType',!this.menuType)
          },
          text(){
            console.log('1111111111')
          }
        },
        created() {

        }
    }
</script>

<style scoped="scoped" type='text/css' lang="scss">
  #header{
    height: 60px;
  }
</style>
