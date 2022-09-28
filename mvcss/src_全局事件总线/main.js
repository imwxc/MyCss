// 整个项目的入口文件

import Vue from "vue"; // 此处引入的是runtime版本的vue，缺少了模版解析器
import App from "./app.vue";

Vue.config.productionTip = false;
/**
 * 不同版本的Vue：
 *    1.普通版和runtime版的区别：
 *        runtime版没有模版解析器
 *
 *    2.runtime版需要使用render函数来渲染收到的函数中的指定内容
 *
 */
// const Demo = Vue.extend({});
// const d = new Demo;
// Vue.prototype.x = d;
// 创建Vue实例对象
new Vue({
	// 将App组件放入容器中
	render: (h) => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this; // 初始化全局事件总线
	}
}).$mount("#app");
