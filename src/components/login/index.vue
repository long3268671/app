<template>
  <div>
    <h1>这是index页面</h1>
    <p>{{user.name}}</p>
    <p>{{user.age}}</p>
    <p>{{user.id}}</p>
    <button @click="UpdateUser">更新user</button>
    <button @click="goAuth">跳转auth页面</button>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            id:5
          }
      },
      methods:{
        UpdateUser(){
          this.$store.dispatch('getInfo')
        },
        goAuth(){
          this.$router.push('/auth/'+this.id)
        }
      },
      computed:{
          user(){
            return this.$store.state.user
          }
      },
      created(){
          let data = {
            name:'李梦龙',
            age:27,
            id:3514
          }
          this.$store.commit('setUser',data)
      }
    }
</script>

<style scoped>

</style>
