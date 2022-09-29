<template>
	<div>
		test2
		<button @click="click">显示/隐藏</button>
		<transition name="hello" :appear="true">
			<h1 v-show="show">nihaoa!</h1>
		</transition>
		<!-- 多个元素的过度 -->
		<transition-group name="hello" :appear="true">
			<h1 v-show="show" key="1">nihaoa!11</h1>
			<h1 v-show="show" key="2">nihaoa!22</h1>
		</transition-group>
	</div>
</template>

<script>
export default {
	name: "Test2",
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

.hello-enter-active,
.hello-leave-active {
	transition: 0.5s ease-in-out;
}

/* 离开起点 */
.hello-leave,
.hello-enter-to {
	transform: translateX(0px);
}
/* 进入起点 */
.hello-enter,
.hello-leave-to {
	transform: translateX(-100%);
}
</style>
