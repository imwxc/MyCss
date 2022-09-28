<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h2>name:{{ name }}</h2>
		<h2>address:{{ address }}</h2>
		<button @click="demo">点击触发demo</button>
	</div>
</template>

<script>
// 组件交互的代码
export default {
	name: "MySchool",
	props: {
		getSchoolName: {
			type: Function
		}
	},
	data(params) {
		return {
			...params,
			name: "123",
			address: "Address123",
		};
	},
	methods: {
		demo(){
			this.getSchoolName(this.name)
		}
	}
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
	background-color: skyblue ;
}
</style>>
