import { mapGetters } from 'vuex';
<template>
	<div class="container">
		<h1>当前求和为：{{ countNum }}</h1>
		<h3>当前求和后复杂运算结果为：{{ bigSum }}</h3>
		<h4>学校: {{ school }}</h4>
		<h4>name: {{ name }}</h4>
		<select v-model="addNum">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="increase(addNum)">+</button>
		<button @click="decrease(addNum)">-</button>
		<button @click="oddNumberIncrease(addNum)">当前为奇数时加</button>
		<button @click="waitIncrease(addNum)">等500ms再加</button>
	</div>
</template>

<script>
//  mapMutations, mapActions 在使用时如果需要传参，需要在template绑定事件时就将参数传递进去
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
	name: "Count",
	data() {
		return {
			addNum: 1 // 选择的数字
		};
	},
	computed: {
		// 手动写计算属性
		// countNum(){
		//     return this.$store.state.countNum
		// },
		// name(){
		//     return this.$store.state.name
		// },
		// school(){
		//     return this.$store.state.school
		// },
		// 借助mapState从state中自动生成的计算属性(对象写法，计算属性名和state中变量名不一致)
		// ...mapState({
		// 	countNum: "countNum",
		// 	school: "school",
		// 	name: "name"
		// }),
		// 借助mapState从state中自动生成的计算属性(数组写法，计算属性名和state中变量名一致)
		...mapState(["countNum", "school", "name"]),
		/**************************************************************** */
		// 手动生成的计算属性
		// bigSum() {
		// 	return this.$store.getters.bigSum;
		// },
		// mapGetters生成的计算属性
		...mapGetters({
			bigSum: "bigSum"
		})
	},

	components: {},
	mounted() {
		console.log(
			"mapState",
			mapState({
				countNum: "countNum",
				school: "school",
				name: "name"
			})
		);
	},
	methods: {
		// increase() {
		// 	// console.log("increase",this  ,this.addNum)
		// 	// this.$store.dispatch('increase', this.addNum)
		// 	this.$store.commit("INCREASE", this.addNum);
		// },
		// decrease() {
		// 	// this.$store.dispatch('decrease',this.addNum)
		// 	this.$store.commit("DECREASE", this.addNum);
		// },
		...mapMutations({
			increase: "INCREASE",
			decrease: "DECREASE"
		}),
		// oddNumberIncrease() {
		// 	this.$store.dispatch("increaseOdd", this.addNum);
		// },
		// waitIncrease() {
		// 	this.$store.dispatch("increaseWait", this.addNum);
		// },
		...mapActions({
			oddNumberIncrease: "increaseOdd",
			waitIncrease: "increaseWait"
		})
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
