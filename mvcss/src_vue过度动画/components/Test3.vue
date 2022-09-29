<template>
	<div>
		test2
		<button @click="click">显示/隐藏</button>
		<transition name="animate__animated animate__bounce" :appear="true" enter-active-class="animate__swing" leave-active-class="animate__zoomOut">
			<h1 v-show="show">nihaoa!</h1>
		</transition>
		<!-- 多个元素的过度 -->
		<!-- <transition-group name="hello" :appear="true">
			<h1 v-show="show" key="1">nihaoa!11</h1>
			<h1 v-show="show" key="2">nihaoa!22</h1>
		</transition-group> -->
	</div>
</template>

<script>
import "animate.css";
export default {
	name: "Test3",
	data() {
		return {
			show: true
		};
	},
	methods: {
		click() {
			this.show = !this.show;
		}
	}
};
</script>

<style scoped>
/*base*/
body {
	background: #fff;
}
h1 {
	background-color: orange;
}
</style>
