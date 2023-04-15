<template>
	<!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
	<div>
		<div>测试setup写法{{ name }}{{ age }}</div>
        <h3>{{ job.type }} + {{ job.salary }}</h3>
        <h2>
            姓：<input type="text" v-model="person.fn"><br/>
            名：<input type="text" v-model="person.ln">
        </h2>
		<h3>姓名:{{ person.fullName }}</h3>
        <!-- <ul>
            <li v-for="a in job.lis" :key="a">{{ a }}</li>
        </ul> -->
        <button @click="hellot">点击触发事件</button>
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
import { ref, reactive, computed } from 'vue';
export default {
	name: "Demo2",
    props: ['name', 'msg'],
    emits: ['hello'],
	setup(props, context) {
        console.info('Demo setup', props, context)
        console.info('context attrs', context.attrs)
        console.info('context emit', context.emit)
        console.info('context slots', context.slots)
        // context.emit('hello')
		let name = ref("name"); // reference 
		let age = ref(12);
        let job = reactive({
            type : 111,
            salary: '30k',
            // a:{
            //     b:{
            //         c: 999
            //     }
            // },
            // lis:['11', 44,55]
        })
        let person = reactive( {
            fn: 'a',
            ln: 'b'
        })

        // 简写 没有考虑计算属性被修改的情况
        // person.fullName = computed(()=>(person.fn + person.ln))

         // 完整写法考虑计算属性被修改的情况
         person.fullName = computed({
            get:()=>(person.fn + person.ln),
            set:(value)=>{
                person.fn = value[0]
                person.ln = value[1]
            }
         })

        function hellot(){
            context.emit('hello')
        }
        // let num = reactive(666)
        // function changInfo(){
        //     // name.value = 'name1'
        //     // age.value =18
        //     console.info('changInfo', job )
        //     job.type = 222
        //     job.a.b.c = 111
        //     job.lis[2] = 5555
        // }
		return {
			name,
			age,
            // changInfo,
            job,
            hellot,
            person
		};
	},
};
</script>
