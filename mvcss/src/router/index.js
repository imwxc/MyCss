import VueRouter from "vue-router"
import About from "../components/About"
import Home from "../components/Home"
// 创建路由器
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})
export default router