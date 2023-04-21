<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
    <div>
        <h3>姓名:{{ name }}</h3>
        <h3>年龄:{{ age }}</h3>
        <h3>姓名:{{ person.name }}</h3>
        <h3>年龄: {{ person.age }}</h3>
        <text> 工作类型: {{ person.jobs.j1.type }} </text>
        <text> 薪资: {{ person.jobs.j1.salary }} </text>

        <button @click="person.name = '222'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="person.jobs.j1.salary='50k'">涨薪</button>
        
    </div>
</template>
<script>
import { reactive, toRef, toRefs, shallowReactive } from 'vue';
export default {
    name: "Demo6",
    setup() {
        let person = reactive({
            name: "Person",
            age: 18,
            fn: "John",
            ln: "Doe",
            jobs: {
                j1: {
                    type: 111,
                    salary: "30k",
                },
            },
        });
        let name = toRef(person, "name");
        let x = toRefs(person)
        // 只考虑第一层响应式
        let sp = shallowReactive({
            name: "Person",
            age: 18,
            fn: "John",
            ln: "Doe",
            jobs: {
                j1: {
                    type: 111,
                    salary: "30k",
                },
            },
        })
        return {
            person,
            name,
            sp,
            ...x
        };
    },
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
