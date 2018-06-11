<template>
  <div>
    <h1>这是auto页面</h1>
    <p>{{user.name}}</p>
    <router-link :to="{path:'/auth/'+id}" replace>进入context</router-link>
    <router-link :to="{path:'/auth/'+id+'/images'}" replace>进入img</router-link>
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
