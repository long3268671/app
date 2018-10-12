<template>
  <div id="info">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <hr />
    <el-row :gutter="10" class="box">
      <el-form ref="form" :model="form" label-width="90px" >
        <el-col :span="24" >
          <el-col :span="12">
            <el-form-item label="活动名称：" >
              <el-input v-model="form.name" placeholder="请输入活动名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活动区域：" >
              <el-select v-model="form.selected" class="w-100">
                <el-option v-for="item in address" :key="item.id" :value="item.id" :label="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="24" >
          <el-col :span="12">
            <el-form-item label="活动时间：" >
              <el-date-picker
                v-model="form.time.date"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" class="w-100">
              </el-date-picker>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="即时配送：" >
              <el-switch v-model="form.delivery" ></el-switch>
            </el-form-item>
          </el-col>
        </el-col>
      </el-form>
    </el-row>

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
