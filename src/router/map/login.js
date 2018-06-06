const router = [
  {
    path: '/',
    component: function(resolve) {
      require(['@/components/HelloWorld.vue'], resolve);
    }
  },{
  path: '/login',
  component: function(resolve) {
    require(['@/components/login/index.vue'], resolve);
  }
},{
  path:'/auth',
  component:function(resolve){
    require(['@/components/login/auto.vue'],resolve);
  }
}]

export default router
