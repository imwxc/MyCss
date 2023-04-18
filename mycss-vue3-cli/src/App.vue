<template>
	<div>
        <h2>--------------------------------------------------</h2>
        <!-- <Demo @hello="showHello" name="111" msg="222">
            <template v-slot:123>
                <h2> 12312313</h2>
            </template>
        </Demo> -->
        <!-- <Demo2 /> -->
        <!-- <Demo3 /> -->
        <!-- <button @click="showC">控制展示</button>  -->
        <!-- <Demo4 v-if="showDemo"/> -->
        <Demo5 />
		<!-- <h3>{{ job.a.b.c }}</h3> -->
        <!-- <ul>
            <li v-for="a in job.lis" :key="a">{{ a }}</li>
        </ul>
        -->
        
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
import Demo from './components/Demo.vue'
import Demo2 from './components/Demo2.vue';
import Demo3 from './components/Demo3.vue';
import Demo4 from './components/Demo4.vue';
import Demo5 from './components/Demo5.vue';
export default {
	name: "App",
    components: {
        Demo,
        Demo2,
        Demo3,
        Demo4,
        Demo5
    },
    setup(){
        let showDemo = ref(true);
        function showC(){
            showDemo.value = !showDemo.value
        }
        return {
            showDemo,
            showC
        }
    }
    // setup(){
    //     return {
    //         showHello: ()=>{
    //             alert('hello')
    //         }
    //     }
    // }
	// setup(props) {
	// 	let name = ref("name"); // reference 
	// 	let age = ref(12);
    //     let job = reactive({
    //         type : 111,
    //         salary: '30k',
    //         // a:{
    //         //     b:{
    //         //         c: 999
    //         //     }
    //         // },
    //         // lis:['11', 44,55]
    //     })
    //     // let num = reactive(666)
    //     // function changInfo(){
    //     //     // name.value = 'name1'
    //     //     // age.value =18
    //     //     console.info('changInfo', job )
    //     //     job.type = 222
    //     //     job.a.b.c = 111
    //     //     job.lis[2] = 5555
    //     // }
	// 	return {
	// 		name,
	// 		age,
    //         // changInfo,
    //         job
	// 	};
	// },
};
</script>
