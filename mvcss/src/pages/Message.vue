<template>
	<div>
		<div class="container">
			<ul>
				<li v-for="m in messageList" :key="m.id">
                    <!-- query传参 字符串写法 -->
					<!-- <router-link :to="parseUrl(m)">{{ m.title }}</router-link> -->
                    <!-- query传参 对象写法 -->
                    <router-link :to="parseUrlObj(m)">{{ m.title }}</router-link>
				</li>
			</ul>
		</div>
		<div class="detail-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

// import { nanoid } from "nanoid";
export default {
	name: "Message",
	data() {
		return {
			newPersonName: "",
			messageList: [
				{ id: 1, title: "消息1" },
				{ id: 2, title: "消息2" },
				{ id: 3, title: "消息3" },
			],
		};
	},
	computed: {},
	components: {},
	methods: {
		parseUrl(m) {
			return `/home/message/detail?id=${m.id}&title=${m.title}`;
		},
        parseUrlObj(m){
			return {
                path: '/home/message/detail',
                query: {
                    ...m
                }
            }
		},
	},
};
/*****
 * 插槽：
 * 	默认插槽： 子组件中定义 slot 父组件中降数据以及html结构定义
 *  具名插槽： 子组件中定义多个slot时 ， 使用 name来区分， 父组件通过 slot='' 或者 v-slot:'' 将html结构插入到对应插槽
 *  作用域插槽： 父组件需要使用到子组件中数据来定义结构时使用（数据在子组件中，父组件负责控制html结构）： 通过slot-scpoe="{keys..}" 来 在slot使用的html中使用子组件中定义的数据
 */
</script>

<style lang="less" scoped></style>
