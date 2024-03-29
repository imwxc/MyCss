# 笔记

## 脚手架文件结构：

    ├── README.md
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    ├── src
    │   ├── app.vue
    │   ├── assets
    │   │   └── logo.png
    │   ├── components
    │   │   ├── MySchool.vue
    │   │   └── MyStudent.vue
    │   ├── demoCode
    │   └── main.js
    └── vue.config.js

## 脚手架默认配置：

    使用 vue.config.js 可以个性化配置

## 不同版本的 Vue：

    1.普通版和 runtime 版的区别：runtime 版没有模版解析器

    2.runtime版需要使用render函数来渲染收到的函数中的指定内容

## ref 属性：

    1.用来给元素或子组件注册引用信息
    2.获取真实DOM对象或组件的VC
    3.使用方式：
        打标识 <h1 id="title" ref="title">hello</h1>
        获取： this.$refs.title

## 配置项 props：

    组件接受外部传入的数值
        1.传递数据
            <DEMO name="value"/>
        2.接受数据：
            方式1:
                porps:['name']
            方式2:
                props:{
                    name: type:Object,
                }
            方式3: props: {
                name:{
                    type:Object,
                    default:{},
                    required:boolean
                }
            }
        3. tips:
            props是只读的，Vue底层会监测修改，如果修改就会有warning，如果需要修改，可以考虑用data变量做中间变量的代理

## mixin(混入):

    将多个组件共用的配置提取出一个对象
    用法：
        1.定义mixin对象：
            const mixin = {...};
        2.使用mixin对象
            (1) 全局混入：Vue.mixin(...);
            (2) 局部混入：mixins:[...];

## 插件

    功能：增强Vue
    本质：包含一个install(Vue,...agrs)方法，第一个参数是Vue,后面的参数是插件使用者传递的数据
    定义：
        {}.install = function(Vue , ...args){
            1. 添加全局过滤器
            2. 全局自定义指令
            3. 全局mixin
            4. prototype添加方法
            ...
        }
    使用：
        Vue.use(plugins , ...agrs)

## scoped样式
    作用：样式局部生效，防止冲突
    写法：<style scoped>

## 浏览器本地存储
    