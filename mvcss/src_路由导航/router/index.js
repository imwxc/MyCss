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
                            path: 'detail/:id/:title',
                            // path: 'detail',
                            component: Detail,
                            name: 'xiangqing',
                            // props 第一种写法, 会以props传给details组件
                            // props: {
                            //     a:1,
                            //     b:2
                            // }
                            //props 第二种写法, boolean 为true时，路由组件收到的所有params参数都传给组件
                            // props: true

                            // props 第三种写法 function
                            props($route){
                                const { id , title } = $route.query
                                return {
                                    id,
                                    title
                                }
                            }
                        }
                    ]
                }
            ]
        },
        
    ]
})
export default router