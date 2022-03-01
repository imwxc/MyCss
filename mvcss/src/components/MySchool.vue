<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h2>name:{{ name }}</h2>
		<h2>address:{{ address }}</h2>
	</div>
</template>

<script>
// 组件交互的代码
// 引入混合
import { mixin } from "./mixin";
export default {
	name: "MySchool",
	data(params) {
		return {
			...params,
			name: "123",
			address: "Address123",
		};
	},  
	mixins: [mixin],
};
</script>

<style>
/* 组件的样式 */
.demo {
	background-color: aqua;
}
</style>
