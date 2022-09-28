<template>
	<div>
        <!-- 通过传递函数来实现数据通信 -->
		<MySchool/>
        <!-- 通过组件自定义事件来实现数据通信 -->
		<!-- <MyStudent v-on:demo="demo" /> -->
        <MyStudent/>
        <!-- 通过获取组件实例来实现数据通信 @click.native标识使用原生的点击事件-->
        <!-- <MyStudent ref="student" @click.native="demo"/> -->
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
		};
	},
};
</script>

<style></style>
·
