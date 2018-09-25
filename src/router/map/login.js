const router = [
  {
    path: '/',
    component: function (resolve) {
      require(['@/components/HelloWorld.vue'], resolve);
    }
  },
  {
    path: '/login',
    component: function (resolve) {
      require(['@/components/login/index.vue'], resolve);
    }
  },
  {
    path: '/auth/:id',
    component: function (resolve) {
      require(['@/components/login/auto.vue'], resolve);
    },
    children: [
      {
        path: '',
        component: function (resolve) {
          require(['@/components/login/child/context.vue'], resolve);
        }
      },
      {
        path: 'images',
        component: function (resolve) {
          require(['@/components/login/child/images.vue'], resolve);
        }
      }
    ]
  }]

export default router
