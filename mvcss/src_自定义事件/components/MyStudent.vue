<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h1>{{ msg }}</h1>
		<h4>name:{{ name }}</h4>
		<h4>address:{{ address }}</h4>
		<h4>age:{{ age }}</h4>
		<button @click="demo">点击触发demo</button>
		<button @click="demo2">点击解绑demo</button>
		<button @click="demo3">销毁组件</button>
	</div>
</template>

<script>
// 组件交互的代码
export default {
	name: "MyStudent",
	data() {
		return {
			name: "张三",
			age: 999,
			msg: "MSG",
			address: "beijing"
		};
	},
	methods: {
		demo() {
			this.$emit("demo", this.name);
			this.$emit('m1')
		},
		demo2() {
			this.$off('demo') // 只适用于解绑一个
			this.$off(['demo','m1']) // 适用于解绑多个
			this.$off() // 解绑所有自定义事件
		},
		demo3(){
			this.$destroy() // 销毁后组件的自定义事件被解绑，原生事件无影响
		}
	},
	destroyed(){
		console.log("destroy")
	}
};
</script>

<style></style>
