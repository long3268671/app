<template>
  <div>
    <h1>这是auto页面</h1>
    <p>{{user.name}}</p>
    <router-link  :to="{path:'/auth/'+id}" replace>进入context</router-link>
    <router-link :to="{path:'images'}" replace>进入img</router-link>
    <router-link :to="{path:'/'}" exact>會首頁</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "auto",
      data(){
          return {
            id:this.$route.params.id?this.$route.params.id:0,
            name:this.$route.query.name
          }
      },
      computed:mapState({
        user:'user'
      })
    }
</script>

<style scoped lang="sass" type="text/css">

</style>
