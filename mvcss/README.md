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

## ref属性：  
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

