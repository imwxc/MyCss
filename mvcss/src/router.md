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