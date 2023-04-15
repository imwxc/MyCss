<template>
	<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
	<div>
		<h2>当前求和为{{ sum }}</h2>
		<button @click="sum++">点击+1</button>
		<h2>-------------------------------------</h2>
		<h2>当前信息为:{{ msg }}</h2>
		<button @click="msg += '!'">修改信息</button>
		<h2>-------------------------------------</h2>
		<h2>当前person为: 姓名：{{ person.name }} 年龄: {{ person.age }}</h2>
		<h3>薪资:{{ person.job.j1.salary }}K</h3>
		<button @click="person.age++">年龄+1</button>
		<button @click="person.name += '1123'">修改姓名</button>
		<button @click="person.job.j1.salary++">涨薪</button>
	</div>
</template>

<style lang="less"></style>
<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
	name: "Demo3",
	props: ["name", "msg"],
	emits: ["hello"],
	setup(props, context) {
		let sum = ref(0);
		// case1 监视ref定义的一个变量
		// watch(sum,(newVal,oldVal)=>{
		//     console.info(`watch sum $newVal: ${newVal}, $oldVal: ${oldVal}`)
		// })
		let msg = ref(0);
		//case2 监视ref定义的多个变量
		// let watchVar = [sum,msg]
		// watch(watchVar,(newVal,oldVal)=>{
		//     console.info(`watch ${Object.keys(watchVar)[newVal[0]]} ${newVal[0]} $newVal: ${newVal[1]}, $oldVal: ${oldVal}`, )
		// }, {immediate: true})

		// case3 监视reactive定义的对象
		// let person = reactive({
		// 	name: "111",
		// 	age: 222,
		// 	job: {
		// 		j1: {
		// 			salary: 10,
		// 		},
		// 	},
		// });
		// // reactive 定义的变量无法捕获oldVal, deep也是失效的
		// watch(
		// 	person,
		// 	(newVal, oldVal) => {
		// 		console.info(`person`, newVal, oldVal);
		// 	},
		// 	{ deep: false }
		// );

		// case4 监视之监听reactive对象的某一个属性
		// let person = reactive({
		// 	name: "111",
		// 	age: 222,
		// 	job: {
		// 		j1: {
		// 			salary: 10,
		// 		},
		// 	},
		// });
		// // reactive 定义的变量无法捕获oldVal, deep也是失效的
		// watch(
		// 	()=>person.age,
		// 	(newVal, oldVal) => {
		// 		console.info(`person.age`, newVal, oldVal);
		// 	}
		// );

		// case5 监视之监听reactive对象的某些属性
		// let person = reactive({
		//     name: "111",
		//     age: 222,
		//     job: {
		//         j1: {
		//             salary: 10,
		//         },
		//     },
		// });
		// reactive 定义的变量无法捕获oldVal, deep也是失效的
		// watch([() => person.name, () => person.age], (newVal, oldVal) => {
		//     console.info(`person.name or age`, newVal, oldVal);
		// });

		// 特殊情况 监视reactive变量的某个属性 且 该属性为对象时, 需开启deep才能监视
		// watch(() => person.job, (newVal, oldVal) => {
		//     console.info(`person.job`, newVal, oldVal);
		// }, {deep: true});

		let person = ref({
			name: "111",
			age: 222,
			job: {
				j1: {
					salary: 10,
				},
			},
		});

        // 监视了 ref声明的基本类型变量,可以正常监听
		watch(sum, (newVal, oldVal) => {
			console.info(`sum`, newVal, oldVal);
		});

        /**监视了ref声明的对象,其value为一个Proxy,person改变时Proxy不变,所以无法监听,需要开启deep才可以监听
         *  因为当传入了 ref时,会去取其value来初始化getter和setter,
         *  但是ref声明的对象其value为Proxy,对Proxy无法初始化getter和setter
         *  开启了 deep后, 会在watch中递归调用当前对象的每一个子属性,所以开启了deep后会生效
         * 
         * 
        */
		// watch(
		// 	person,
		// 	(newVal, oldVal) => {
		// 		console.info(`sum`, newVal, oldVal);
		// 	},
		// 	{ deep: true }
		// );

        watchEffect();

		return {
			sum,
			msg,
			person,
		};
	},
};
</script>
