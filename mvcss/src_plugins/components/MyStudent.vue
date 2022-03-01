<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h1>{{ msg }}</h1>
		<h4 @click="showName">name:{{ name }}</h4>
		<h4>address:{{ address }}</h4>
		<h4>age:{{ age }}</h4>
	</div>
</template>

<script>
// 组件交互的代码
import { mixin } from "./mixin";
export default {
	name: "MyStudent",
	data() {
		return {
			name: "张三",
			age: 999,
			msg: "MSG",
			address: "beijing",
		};
	},
	methods: {
		updateAge() {
			this.age++;
		},
	},
	mixins: [mixin],
};
</script>

<style></style>
