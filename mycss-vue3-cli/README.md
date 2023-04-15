# mycss-vue3-cli

### setup
    1.Vue3的新配置项，值为一个函数
    2.setup是所有组合api的地方
    3.组件中用的数据方法都在setup中配置
    4.seup返回值：
        1.返回一个对象则 对象中的属性方法均可在模板中使用
        2.返回一个渲染函数，可以自定义渲染内容
    5.注意点：
        1.尽量不和vue2配置混用
        2.setup中不能访问vue2的配置
        3.重名时vue3优先
        4.setup不能为async函数
    