import usePoint from '@/hooks/usePoint';
<template>
    <div>
        <div>测试setup写法{{ name }}{{ age }}</div>
        <h2>当前鼠标点击坐标为： x {{ point.x }} ， y{{ point.y }}</h2>
        {{ point.id }}
        <h2>----------------------------------------------</h2>
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
    name: "Demo",
    // props: ["name", "msg"],
    emits: ["hello"],
    setup() {
        // context.emit('hello')
        let name = ref("name"); // reference
        let age = ref(12);

        // 使用组合式来声明生命周期
        /*
        beforeCreate 和  created 都视作在etup
         */
        onBeforeMount(() => {
            console.info("---------onBeforeMount---------");
        });
        onMounted(() => {
            console.info("---------onMounted---------");
        });
        onBeforeUpdate(() => {
            console.info("---------onBeforeUpdate---------");
        });

        onUpdated(() => {
            console.info("---------onUpdated---------");
        });

        onBeforeUnmount(() => {
            console.info("---------onBeforeUnmount---------");
        });
        onUnmounted(() => {
            console.info("---------onUnmounted---------");
        });

        return {
            name,
            age,
            point: usePoint()
        };
    },
    // 通过配置项的形式使用生命周期
    /*     beforeCreate() {
        console.info('-----beforeCreate----')
    },
    created() {
        console.info('-----created-----')
    },
    beforeMount() {
        console.info('---------beforeMount---------')
    },
    mounted() {
        console.info('--------mounted---------')
    },
    beforeUpdate() {
        console.info('-------beforeUpdate--------')
    },
    updated() {
        console.info('-------------updated------------')
    },
    beforeUnmount() {
        console.info('-----------beforeUnmount------------')
    },
    unmounted() {
        console.info('----------unmounted---------------')
    }, */
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
