// 整个项目的入口文件

import Vue from "vue"; // 此处引入的是runtime版本的vue，缺少了模版解析器
import App from "./App.vue";
// import store from "./store/index"
import VueRouter from 'vue-router'
import router from './router'
// 引入elementUI组件库 完整版
// import ElementUI from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css';

// 引入elementUI组件库按需引入
import { Button, Select} from "element-ui";

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

Vue.config.productionTip = false;
// import store from "./store"
/**
 * 不同版本的Vue：
 *    1.普通版和runtime版的区别：
 *        runtime版没有模版解析器
 *
 *    2.runtime版需要使用render函数来渲染收到的函数中的指定内容
 *
 */
Vue.use(VueRouter)
// Vue.use(ElementUI)

// 创建Vue实例对象
new Vue({
	// 将App组件放入容器中
	render: (h) => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this
	},
	// store, 
	router
}).$mount("#app");
