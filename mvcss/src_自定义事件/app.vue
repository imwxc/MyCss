<template>
	<div>
        studentName: {{studentName}}
        <!-- 通过传递函数来实现数据通信 -->
		<MySchool :getSchoolName="getSchoolName"></MySchool>
        <!-- 通过组件自定义事件来实现数据通信 -->
		<!-- <MyStudent v-on:demo="demo" /> -->
        <!-- <MyStudent @demo="demo" /> -->
        <!-- 通过获取组件实例来实现数据通信 @click.native标识使用原生的点击事件-->
        <MyStudent ref="student" @click.native="demo"/>
	</div>
</template>

<script>
import MyStudent from "./components/MyStudent";
import MySchool from "./components/MySchool";
export default {
	name: "App",
	components: {
		MyStudent,
		MySchool
	},
	data() {
		return {
			getSchoolName(name) {
				console.log("app 收到了", name);
			},
            studentName: ''
		};
	},
	methods: {
		demo(e) {
			console.log("demo ", e);
            this.studentName = e
		}
	},
    mounted(){
        // this.$refs.student.$on('demo',this.demo) // 绑定自定义事件 ， 回调函数的this需要指向父组件
        this.$refs.student.$on('demo',(e)=>{ // 绑定自定义事件,自定义回调， 回调函数为箭头函数，本身无this，所以this指向mounted函数中的this
            console.log("demo ", e);
            console.log(" call back this: ",this)
            this.studentName = e
        }) 
        this.$refs.student.$on('demo',function(e){ // 绑定自定义事件,自定义回调，此时回调函数this指向 student 组件的vc
            console.log("demo ", e);
            console.log(" call back this: ",this)
            this.studentName = e
        }) 
        // this.$refs.student.$once('demo',this.demo) // 绑定自定义事件（事件只执行一次）
    }
};
</script>

<style></style>
·
