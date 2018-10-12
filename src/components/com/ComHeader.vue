<!--头部组件-->
<template>
    <div id="header">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            Element+Vue 前端框架
          </div>
        </el-col>
        <el-col :span="3" :offset="15">
          <div class="grid-content bg-purple">
            个人信息1
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            个人信息2
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
        conputed: {},
        methods: {},
        created() {

        }
    }
</script>

<style scoped="scoped" type='text/css' lang="scss">
  #header{
    height: 60px;
  }
</style>
