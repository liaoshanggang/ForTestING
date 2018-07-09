import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueDet from '@/components/VueDet'
import View1 from '@/views/view1'
import View2 from '@/views/view2'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-det',
      name: 'VueDet',
      component: VueDet
    },
    {
        path: '/view1',
        component: View1
    }, {
        path: '/view2',
        component: View2
    }, {
        path: '/*',
        component: HelloWorld
    }
  ]
})
