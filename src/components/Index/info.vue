<template>
  <div id="info">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <hr />


  </div>
</template>

<script>
  export default {
    name: "info",
    data() {
      return {
        loadType:false,
        address:[
          {
          id:1,
          name:'北京'
        },{
          id:2,
          name:'天津'
        },{
          id:3,
          name:'上海'
        },{
          id:4,
          name:'郑州'
        },{
          id:5,
          name:'许昌'
        }
        ],
        form:{
          name:'李梦龙',
          selected:4,
          time:{
            date:'',
            time:''
          },
          delivery:true,

        }
      }
    },
    conputed: {},
    methods: {

    },
    created() {
      // this.startLoading();
      // setTimeout(()=>{
      //   this.endLoading()
      // },3000)
    }
  }
</script>

<style scoped="scoped" type='text/css' lang="scss">
  .w-100{
    width: 100%;
  }
  #info{
    .box{
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      padding: 20px 0;
      text-align: left;

    }
  }
</style>
