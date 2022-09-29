<template>
	<div>
		<button @click="click">显示/隐藏</button>
		<transition name="hello" :appear="true"><h1 v-show="show">nihaoa!</h1></transition>
	</div>
</template>

<script>
export default {
	name: "Test",
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

.hello-enter-active {
	animation: h1aaAin 1s ease-in-out;
}

.hello-leave-active {
	animation: h1aaAin 1s ease-in-out reverse;
}

@keyframes h1aaAin {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0px);
	}
}
</style>
