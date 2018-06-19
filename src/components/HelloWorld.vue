<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/logo.png">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    click(){
      layer.alert('点击')
    }
  },
  created(){
    console.log(AAA)
    this.$http.post('/api/users/getUser',{'uid':4},res=>{
      console.log(res)
    })
  }
}
</script>

<style scoped="scoped" type='text/css' lang="scss">
  @import "../assets/scss/base";
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
