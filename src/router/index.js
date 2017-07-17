import Vue from 'vue'
import Router from 'vue-router'
//大页面模块
import Login from '@/views/login'
import CountAnalyse from '@/views/count-analyse'
import OnlineSrevice from '@/views/online-srevice'
import PartManage from '@/views/part-manage'
import ResourceLook from '@/views/resource-look'
import Statistical from '@/views/statistical'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Statistical',
            name: 'Statistical',
            component: Statistical
        },
        {
            path: '/CountAnalyse',
            name: 'CountAnalyse',
            component: CountAnalyse
        },
        {
            path: '/OnlineSrevice',
            name: 'OnlineSrevice',
            component: OnlineSrevice
        },
        {
            path: '/PartManage',
            name: 'PartManage',
            component: PartManage
        },
        {
            path: '/ResourceLook',
            name: 'ResourceLook',
            component: ResourceLook
        }
    ]
})
