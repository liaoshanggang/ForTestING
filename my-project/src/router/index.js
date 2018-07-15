import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import VueDet from '@/components/VueDet'
import View1 from '@/components/View1'
import View2 from '@/components/View2'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
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
            component: Index
        }
    ]
})