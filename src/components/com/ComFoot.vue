<!--底部组件-->
<template>
  <div id="foot" >
    @element+vue 练习随笔
  </div>
</template>

<script>
    export default {
        name: "com-foot",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        conputed: {},
        methods: {},
        created() {

        }
    }
</script>

<style scoped="scoped" type='text/css' lang="scss">
#foot{
  height: 60px;
  text-align: right;
  line-height: 60px;
}
</style>
