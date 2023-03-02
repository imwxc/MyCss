import { mapGetters } from 'vuex';
<template>
	<div class="container">
		<h1>人员列表</h1>
		<input type="text" placeholder="请输入名字" v-model="newPersonName" />
		<button @click="addPerson">添加</button>
		<ul>
			<li v-for="item in personList" :key="item.id">{{ item.name }}</li>
		</ul>
		<h3>count组件求和为: {{sum}}</h3>
	</div>
</template>

<script>
//  mapMutations, mapActions 在使用时如果需要传参，需要在template绑定事件时就将参数传递进去
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { nanoid } from "nanoid";
export default {
	name: "Persons",
	data() {
		return {
			newPersonName: ""
		};
	},
	computed: {
		// ...mapState(["personList"]),
		// ...mapGetters({}),
		personList(){
			return this.$store.state.personList
		},
		sum(){
			return this.$store.state.countNum
		}
	},

	components: {},
	methods: {
		addPerson() {
			const personObg = {id: nanoid(), name: this.newPersonName}
			this.$store.commit('ADD_PERSON',personObg);
			this.newPersonName = ''
		},
		...mapMutations({}),
		...mapActions({})
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
button {
	margin-left: 5px;
}
</style>
