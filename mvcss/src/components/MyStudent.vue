<template>
  <!-- 组件的结构 -->
    <div class="demo">
        <h2>MyStudentname:{{ MyStudentname }}</h2>
        <h2>MyStudentaddress:{{ MyStudentaddress }}</h2>
    </div>
</template>

<script>
// 组件交互的代码
    export default {
        name:"MyStudent",
        data(params) {
            return { 
            MyStudentname: "MyStudent123",
            MyStudentaddress: "MyStudentAddress123",
            };
        },
        methods: {},
    };
</script> 

<style>
</style>
 