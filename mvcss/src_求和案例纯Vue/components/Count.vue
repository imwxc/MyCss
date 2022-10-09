<template>
	<div class="container">
		<h1>当前求和为：{{ countNum }}</h1>
		<select v-model="addNum">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
        <button @click="increase"> + </button>
        <button @click="decrease"> - </button>
        <button @click="oddNumberIncrease"> 当前为奇数时加 </button>
        <button @click="waitIncrease"> 等500ms再加 </button>
	</div>
</template>

<script>
export default {
	name: "Count",
	data() {
		return {
            countNum: 0, // 当前的和
            addNum: 1, // 选择的数字
        };
	},
	components: {},
    methods: {
        increase(){

        },
        decrease(){

        },
        oddNumberIncrease(){

        },
        waitIncrease(){

        }
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
