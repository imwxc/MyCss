<template>
	<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
	<div>测试setup写法{{ name }}{{ age }}</div>
</template>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import h from "vue";
export default {
	name: "App",
	setup(props) {
		let name = "name";
		let age = 12;
		function hello(params) {
			alert(`'哦我叫'+${name}+${age}`);
		}
		// return ()=>h('h1','header')
		return {
			name,
			age,
			hello,
		};
	},
};
</script>
