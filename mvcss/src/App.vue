<template>
	<div class="root">  
		<Banner/>
		<div class="container">
		<div class="nav">
			<!-- 实现路由切换 -->
			<router-link class="nav-item" active-class="active" to="/home">Home</router-link>
			<router-link class="nav-item" active-class="active" to="/about">
				About
			</router-link>
		</div>
		<div class="sub-container">
			<router-view > </router-view>
		</div>
	</div>
	</div>

</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Banner from "./components/Banner.vue";

export default {
	name: "App",
	data() {
		return {
			active: "",
		};
	},
	methods:{
		clickHome(){ 
			console.log("clickHome")
		},
		clickAbout(){
			console.log("clickAbout")
		}
	},
	components: {
		Home,
		About,
		Banner
	},
};
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
.root{
	display: flex;
	flex-direction: column;
}
.container {
	display: flex;
	flex-direction: row;
	.nav {
		display: flex;
		flex-direction: column;
		.nav-item {
			padding: 12px;
			border: 1px solid;
			background-color: white;
			&.active {
				background-color: aqua;
			}
		}
	}
	.sub-container {
		padding: 12px;
		border: 1px solid;
		background-color: white;
	}
}
</style>
