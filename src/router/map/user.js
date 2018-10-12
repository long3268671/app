import index from '@/components/index';
import IndexInfo from '@/components/Index/info';
import IndexUpdate from '@/components/Index/update';

const router=[
  {
    path:'/',
    component:index,
    children:[{
      path:'',
      component:IndexInfo
    },{
      path:'/update',
      component:IndexUpdate
    }]
  }
]
export default router
