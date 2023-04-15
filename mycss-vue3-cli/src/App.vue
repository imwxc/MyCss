<template>
	<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
	<div>
		<div>测试setup写法{{ name }}{{ age }}</div>
        <h3>{{ job.type }} + {{ job.salary }}</h3>
		<h3>{{ job.a.b.c }}</h3>
        <ul>
            <li v-for="a in job.lis" :key="a">{{ a }}</li>
        </ul>
        <button @click="changInfo">修改信息</button>
	</div>
</template>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
<script>
import { ref, reactive } from 'vue';
export default {
	name: "App",
	setup(props) {
		let name = ref("name"); // reference 
		let age = ref(12);
        let job = reactive({
            type : 111,
            salary: '30k',
            a:{
                b:{
                    c: 999
                }
            },
            lis:['11', 44,55]
        })
        // let num = reactive(666)
        function changInfo(){
            // name.value = 'name1'
            // age.value =18
            console.info('changInfo', job )
            job.type = 222
            job.a.b.c = 111
            job.lis[2] = 5555
        }
		return {
			name,
			age,
            changInfo,
            job
		};
	},
};
</script>
