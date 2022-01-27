<template>
  <!-- 组件的结构 -->
    <div class="demo">
        <h2>name:{{ name }}</h2>
        <h2>address:{{ address }}</h2>
    </div>
</template>

<script>
// 组件交互的代码
    export default {
        name:"MySchool",
        data(params) {
            return {
            name: "123",
            address: "Address123",
            };
        },
        methods: {},
    };
</script> 

<style>
/* 组件的样式 */
.demo{
    background-color: aqua;
}
</style>
