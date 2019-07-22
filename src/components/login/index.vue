<template>
  <div>
    <!--<input type="text" id="uid" placeholder="Uid"/>-->
    <!--&lt;!&ndash;<input type="text" id="name" placeholder="name"/>&ndash;&gt;-->
    <!--<button id="update" @click="update">查询</button>-->
    <!--&lt;!&ndash;<button id="add" @click="add">添加</button>&ndash;&gt;-->
    <!--<table>-->
      <!--<tr>-->
        <!--<td>编号</td>-->
        <!--<td>姓名</td>-->
      <!--</tr>-->
      <!--<tr v-for="item in list">-->
        <!--<td>{{item.uid}}</td>-->
        <!--<td>{{item.name}}</td>-->
      <!--</tr>-->
    <!--</table>-->
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
    data() {
      return {
        list: [],
        id:110
      }
    },
    methods: {
      UpdateUser() {
        this.$store.dispatch('getInfo').then((data) => {
          console.log(data)
        })
      },
      goAuth() {
        this.$router.push('/TextAuto/'+this.id+'?name='+123)
      },
      // update() {
      //   let uid = document.getElementById('uid').value
      //   this.$http.post('/api/users/getUser', {'uid': uid}).then(res => {
      //     console.log(res);
      //     this.list = res.data.list
      //   })
      // },
      // add() {
      //   let uid = document.getElementById('uid').value
      //   let name = document.getElementById('name').value
      //   this.$http.post('/api/users/addUser', {'uid': uid,"name":name}).then(res => {
      //     console.log(res);
      //     this.list = this.list.concat(res.data.list);
      //   })
      // }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    created() {
      let data = {
        name: '李梦龙',
        age: 27,
        id: 3514
      }
      this.$store.commit('setUser', data);
      // this.$http.get('/api/users/getAllUser').then(res => {
      //   console.log(res)
      //   if (res.data.code == '200') {
      //     this.list = this.list.concat(res.data.list)
      //   } else {
      //     layer.alert('请求出错')
      //   }
      // })
    }
  }
</script>

<style scoped="scoped" type="text/css" lang="scss">
  table {
    margin: auto;
  }
</style>
