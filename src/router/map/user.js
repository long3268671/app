import index from '@/components/index';
import IndexInfo from '@/components/Index/info';
import IndexUpdate from '@/components/Index/update';
import text from '@/components/Index/text';

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
    },
      {
        path:'/text',
        component:text
      }]
  }
]
export default router
