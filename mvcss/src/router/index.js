import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"
// 创建路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            name: 'guanyu'
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                            name: 'xiangqing'
                        }
                    ]
                }
            ]
        },
        
    ]
})
export default router