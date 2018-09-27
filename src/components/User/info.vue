<template>
    <div id="info">
      加载个人信息
    </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      name: "info",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
              loadType:false
            }
        },
        conputed: {},
        methods: {

        },
        created() {
          this.startLoading();
          setTimeout(()=>{
            this.endLoading()
          },3000)
        }
    }
</script>

<style scoped="scoped" type='text/css' lang="scss">

</style>
