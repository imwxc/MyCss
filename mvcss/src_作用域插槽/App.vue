<template>
	<div class="container">
		<Category :title="'游戏'">
			<template scope="game1">
				<ul>
					<li v-for="(item, index) in game1.games" :key="index">
						{{ item }}
					</li>
				</ul>
			</template>
		</Category>
		<Category :title="'游戏'">
			<template scope="game2">
				<ol>
					<li v-for="(item, index) in game2.games" :key="index">
						{{ item }}
					</li>
				</ol>
			</template>
		</Category>
		<Category :title="'游戏'">
			<template slot-scope="{games}">
			<h4 v-for="(item, index) in games" :key="index">
				{{ item }}
			</h4>
			</template>

		</Category>
	</div>
</template>

<script>
import Category from "./components/Category";
export default {
	name: "App",
	data() {
		return {
			foods: ["food1", "food2", "food3", "food4"],
			movies: ["movies1", "movies2", "movies3", "movies4"]
		};
	},
	components: {
		Category
	}
};
/*****
 * 插槽：
 * 	默认插槽： 子组件中定义 slot 父组件中降数据以及html结构定义
 *  具名插槽： 子组件中定义多个slot时 ， 使用 name来区分， 父组件通过 slot='' 或者 v-slot:'' 将html结构插入到对应插槽
 *  作用域插槽： 父组件需要使用到子组件中数据来定义结构时使用（数据在子组件中，父组件负责控制html结构）： 通过slot-scpoe="{keys..}" 来 在slot使用的html中使用子组件中定义的数据
 */
</script>

<style scoped>
/*base*/
body {
	background: #fff;
}
.container {
	display: flex;
	justify-content: space-around;
}
</style>
