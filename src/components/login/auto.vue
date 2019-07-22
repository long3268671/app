<template>
  <div>
    <h1>这是auto页面</h1>
    <p>{{user.name}}</p>
    <p>这是路由{{id}}</p>
    <p>这是名字{{name}}</p>
    <router-link  :to="{path:'/TextAuto/'+id+'/context'}">进入context</router-link>
    <router-link :to="{path:'/TextAuto/'+id+'/images'}">进入img</router-link>
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
            id:this.$route.params.id,
            name:this.$route.query.name
          }
      },
      computed:mapState({
        user:'user'
      }),
      methods:{

      }
    }
</script>

<style scoped lang="sass" type="text/css">

</style>
