import index from '@/components/index';
import Userinfo from '@/components/User/info';
import Userupdate from '@/components/User/update';

const router=[
  {
    path:'/',
    component:index,
    children:[{
      path:'',
      component:Userinfo
    },{
      path:'/update',
      component:Userupdate
    }]
  }
]
export default router
