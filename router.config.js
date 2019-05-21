// 引入首页
import Home from '@/views/App/'
import Detail from '@/views/Detail/Index'

export default {
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '*',
        redirect: '/home'
    }]
}