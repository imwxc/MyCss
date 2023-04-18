<template>
    <div>
        <!-- <div>测试setup写法{{ name }}{{ age }}</div> -->
        <h2>当前鼠标点击坐标为： x{{ x }} ， y{{ y }}</h2>
    </div>
</template>
<script lang="ts">
import {
    ref,
    reactive,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} from "vue";
export default {
    name: "DemoFive",
    emits: ["hello"],
    setup() {
        // context.emit('hello')
        // let name = ref("name"); // reference
        // let age = ref(12);
        let ponit = reactive({
            x: 999,
            y: 0,
        });
        return {
            // name,
            // age
            ponit,
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
