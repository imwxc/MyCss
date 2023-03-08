<template>
	<div>
		<div class="container">
			home的内容
			<div class="sub-banner">二级导航</div>
			<div class="trip-container">
				<div class="sub-nav">
					<router-link
						class="nav-item"
						active-class="active"
						to="/home/news"
						>news</router-link
					>
					<router-link
						class="nav-item"
						active-class="active"
						to="/home/message"
						>message</router-link
					>
				</div>
				<div class="sub-router-view">
					<!-- include 输入组件name  -->
					<keep-alive :include="['News','Message']">
						<router-view> </router-view>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
// import { nanoid } from "nanoid";
import Vue from "vue";
export default Vue.extend({
	name: "Home",
	data() {
		return {
			newPersonName: "",
		};
	},
	computed: {},

	components: {},
	methods: {},
});
/*****
 * 插槽：
 * 	默认插槽： 子组件中定义 slot 父组件中降数据以及html结构定义
 *  具名插槽： 子组件中定义多个slot时 ， 使用 name来区分， 父组件通过 slot='' 或者 v-slot:'' 将html结构插入到对应插槽
 *  作用域插槽： 父组件需要使用到子组件中数据来定义结构时使用（数据在子组件中，父组件负责控制html结构）： 通过slot-scpoe="{keys..}" 来 在slot使用的html中使用子组件中定义的数据
 */
</script>

<style lang="less" scoped>
/*base*/
body {
	background: #fff;
}
button {
	margin-left: 5px;
}
div {
	border: 1px solid;
	padding: 4px;
}
.container {
	display: flex;
	flex-direction: column;
}
.sub-nav {
	.nav-item {
		padding: 4px;
		border: 1px solid aqua;
	}
}
</style>
