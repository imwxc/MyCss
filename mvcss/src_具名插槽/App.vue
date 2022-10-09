<template>
	<div class="container">
		<Category :title="'美食'">
			<ul slot="center">
				<li v-for="(item, index) in foods" :key="index">
					{{ item }}
				</li>
			</ul>
			<a href="www.baidu.com" slot="footer">更多美食</a>
		</Category>
		<Category :title="'游戏'" >
			<ul slot="center">
				<li v-for="(item, index) in games" :key="index">
					{{ item }}
				</li>
			</ul>
		</Category>
		<Category :title="'电影'" >
			<ul slot="center">
				<li v-for="(item, index) in movies" :key="index">
					{{ item }}
				</li>
			</ul>
			<template slot="footer">
				<div style="display:flex;justify-content: space-around;">
					<a href="www.baidu.com" slot="footer">热门</a>
					<a href="www.baidu.com" slot="footer">经典</a>
					<a href="www.baidu.com" slot="footer">推荐</a>
				</div>
				<a href="www.baidu.com" slot="footer">更多电影</a>
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
			games: ["games1", "games2", "games3", "games4"],
			movies: ["movies1", "movies2", "movies3", "movies4"]
		};
	},
	components: {
		Category
	}
};
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
