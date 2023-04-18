<template>
    <div>
        <!-- <div>测试setup写法{{ name }}{{ age }}</div> -->
        <h2>当前鼠标点击坐标为： x {{ point.x }} ， y{{ point.y }}</h2>
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
import usePoint from "@/hooks/usePoint"
export default {
    name: "Demo5",
    emits: ["hello"],
    setup() {
        // context.emit('hello')
        // let name = ref("name"); // reference
        // let age = ref(12);
        const point = usePoint()
        return {
            // name,
            // age
            point,
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
