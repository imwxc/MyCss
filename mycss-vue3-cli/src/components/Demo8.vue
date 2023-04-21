<template>
    <div class="demo8">
        <h2>祖: {{ car }}</h2>
        <Demo9 />
    </div>
</template>
<script lang="ts">
import { ref, reactive, provide } from "vue";
import Demo9 from "./Demo9.vue";
export default {
    name: "Demo8",
    components: {
        Demo9
    },
    setup() {
        let car = reactive({
            name: "跑车",
            price: 90
        })
        provide('car', car)
        return {
            car
        };
    }
};
</script>
<style lang="less">
.demo8 {
    padding: 10px;
    background-color: gray;
}
</style>

