<template>
  <div>
    <h1>这是auto页面</h1>
    <p>{{user.name}}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "auto",
      data(){
          return {
            id:this.$route.params.id
          }
      },
      computed:mapState({
        user:'user'
      })
    }
</script>

<style scoped>

</style>
