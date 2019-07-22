import index from '@/components/index';
import IndexInfo from '@/components/Index/info';
import IndexUpdate from '@/components/Index/update';
import IndexCreate from '@/components/Index/create';
import text from '@/components/Index/text';

import TextIndex from '@/components/login/index';
import TextAuto from '@/components/login/auto';
import context from '@/components/login/child/context';
import images from '@/components/login/child/images';

const router=[
  {
    path:'/',
    component:index,
    children:[{
      path:'',
      component:IndexInfo
    }, {
        path:'/create',
        component:IndexCreate
      },{
      path:'/update',
      component:IndexUpdate
    },
      {
        path:'/text',
        component:text
      }]
  },{
    path:'/TextIndex',
    component:TextIndex,
  },{
    path:'/TextAuto/:id',
    component:TextAuto,
    children:[{
      path:'context',
      component:context,
    },{
      path:'images',
      component:images,
    }]
  }
]
export default router
