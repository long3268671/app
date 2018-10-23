<template>
  <div id="info">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <hr />
    <el-row class="Carousel">
        <el-carousel indicator-position="outside" height="500px">
          <el-carousel-item v-for="item in CarouselList" :key="item.id">
            <img :src="item.img"/>
          </el-carousel-item>
        </el-carousel>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "info",
    data() {
      return {
        loadType:false,
        CarouselList:[
          {
            img:'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
            id:1
          },
          {
            img:'http://img.zcool.cn/community/01f09e577b85450000012e7e182cf0.jpg@1280w_1l_2o_100sh.jpg',
            id:2
          },
          {
            img:'http://img.zcool.cn/community/0125fd5770dfa50000018c1b486f15.jpg@1280w_1l_2o_100sh.jpg',
            id:3
          },
          {
            img:'http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg',
            id:4
          }
        ]
      }
    },
    computed: {},
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
  img{
    display: block;
    height: 100%;
    margin: auto;
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
