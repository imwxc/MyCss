<template>
	<div class="container">
		<ul>
            <li>news1 <input type="text" value="请输入信息"></li>
            <li>news2 <input type="text" value="请输入信息"></li>
            <li>news3 <input type="text" value="请输入信息"></li>
        </ul>
	</div>
</template>

<script lang="ts">
// import { nanoid } from "nanoid";
import Vue from "vue";
export default Vue.extend({
	name: "News",
	data() {
		return {
			newPersonName: "",
		};
	},
	computed: {},
	components: {},
	methods: {},
	// 路由使用中
	activated(){

	},
	//路由未使用
	deactivated(){
		
	}
});
/*****
 * 插槽：
 * 	默认插槽： 子组件中定义 slot 父组件中降数据以及html结构定义
 *  具名插槽： 子组件中定义多个slot时 ， 使用 name来区分， 父组件通过 slot='' 或者 v-slot:'' 将html结构插入到对应插槽
 *  作用域插槽： 父组件需要使用到子组件中数据来定义结构时使用（数据在子组件中，父组件负责控制html结构）： 通过slot-scpoe="{keys..}" 来 在slot使用的html中使用子组件中定义的数据
 */
</script>

<style lang='less' scoped>
</style>
