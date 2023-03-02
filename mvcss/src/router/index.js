import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
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