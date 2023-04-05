<template>
	<div class="container">
		Banner的内容
		<button @click="goBack()">后退</button>
		<button @click="goForward()">前进</button>
	</div>
</template>

<script lang="ts">
// import { nanoid } from "nanoid";
import Vue from "vue"
export default Vue.extend({
	name: "Banner",
	data() {
		return {
			newPersonName: ""
		};
	},
	computed: {
	},

	components: {},
	methods: {
		goBack(){
			this.$router.back();
		},
		goForward(){
			this.$router.forward();
		}
	} 
});
</script>

<style scoped>
/*base*/
body {
	background: #fff;
}
button {
	margin-left: 5px;
}
</style>
