# Todo-List Demo

## 总结

### 1.vue-router：
    1.vue的插件库，用于实现SPA应用

### 2.SPA：
    1.单页面web
    2.点击导航不刷新页面，局部变更
    3.数据通过ajax请求获取

### 3.路由：
    1.一组key-value的映射关系
    2. key为路径，value为function 或者 组件

### 4.路由分类
    1.前端路由： 
        value为组件，改变展示内容
    2.后端路由：
        value为function，返回响应数据

### 5.router写法
    1.前端写法
        new VueRouter({
            path: '***',
            component: ***
        })
        切换路由
        <router-link class="nav-item" active-class="active" to="/home">Home</router-link>
        展示组件
        <router-view > </router-view>
        组件切换后会被销毁
        路由组件放在pages文件夹下
        每个组件有自己的$route（存储自己的路由信息），一个应用只有一个$router

        父子都是scpoed时，子组件最外层会使用到父组件的scoped Id

### 6.命名路由
    需要使用query对象写法，name关键字

    params传参需要在router中配置参数占位
    特别注意: 路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置!

### 7.编程式路由导航
    不借助router-link进行跳转
    使用API push 、 replace进行跳转

    前进 forward
    后退 back
    go 传入正数前进， 负数后退

### 8.缓存路由组件
    让不展示的组件不被销毁
    <keep-alive include="News ">
        <router-view> </router-view>
    </keep-alive>

### 9.路由生命周期
    activated 路由组件激活时调用

    deactivated 路由组件失活时调用

### 10.路由守卫
    对路由进行权限控制
    前置守卫（beforeEach）: 路由跳转前执行逻辑
    后置守卫（afterEach）: 路由跳转后执行逻辑
    独享路由守卫（beforeEnter）: 某个路由单独使用