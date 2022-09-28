<template>
	<!-- 组件的结构 -->
	<div class="demo">
		<h2>name:{{ name }}</h2>
		<h2>address:{{ address }}</h2>
	</div>
</template>

<script>
// 组件交互的代码
export default {
	name: "MySchool",
	data(params) {
		return {
			...params,
			name: "123",
			address: "Address123",
		};
	},
	mounted(){
		this.$bus.$on('student2school',(data)=>{
			console.log('on student2school',data)
		})
	},
	// 销毁前解除总线事件占用
	beforeDestroy(){
		this.$bus.$off('student2school')
	}
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
	background-color: skyblue ;
}
</style>>
