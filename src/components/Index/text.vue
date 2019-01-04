<template>
  <div>
    <ul>
      <li v-for="item in list" style="border: 1px solid #000">
        <p>{{item.title}}</p>
        <p>{{item.context}}</p>
        <p v-if="item.str">{{item.str}}</p>
      </li>
      <button @click="clickMe">点击</button>
    </ul>

  </div>
</template>

<script>
    export default {
      data(){
          return{
            list:[
              {title:'a',context:'aaa'},
              {title:'b',context:'bbb'},
              {title:'c',context:'ccc'},
              {title:'d',context:'ddd'},
              {title:'e',context:'eee'}
            ]
          }
      },
      methods:{
          clickMe(){
            let obj =  {title:'e',context:'eee',str:'这个是新添加的'}
            this.list.splice(this.list.length-1,1,obj)
          }
      }
    }
</script>

<style scoped>

</style>
