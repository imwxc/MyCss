export const obj = {
	install(Vue) {
		console.error("obj install a:", Vue);
		Vue.filter("mySlice", (value) => value.slice(0, 4));
		Vue.directive("fbind", {
			focusBind1: {
				// 指令和元素成功绑定时
				// 写样式和初始值
				// 函数中的this全部为window

				bind(element, binding) {
					element.value = binding.value;
				},
				// 指令所在元素被插入页面时
				// 写获取焦点或者获取父元素
				inserted(element, binding) {
					element.focus();
				},
				// 指令所在的模版被重新解析时
				update(element, binding) {
					element.value = binding.value;
				},
			},
		});
		// 给Vue原型添加方法，vm和vc都能用
		Vue.prototype.hello = () => {
			alert("hello 111222333");
		};

		Vue.mixin({
			data() {
				return {
					x: 1000,
					y: 2,
				};
			},
			mounted() {
				console.error("hello111");
			},
		});
	},
};
