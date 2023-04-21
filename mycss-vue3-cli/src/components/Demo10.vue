<template>
    <div class="demo10">
        <h2>后代: {{ car }}</h2>
        <button @click="showPop = true">展示弹窗</button>
        <teleport to="body">
            <div v-if="showPop" class="popup">
                <div class="container">
                    <h2>我是一个弹窗</h2>
                    <button @click="showPop = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>
<script lang="ts">
import { ref, reactive, inject } from "vue";
// import Demo10 from "./components/Demo10.vue";
export default {
    name: "Demo10",
    components: {
        // Demo10
    },
    setup() {
        return {
            car: inject("car"),
            showPop: ref(false),
        };
    },
};
</script>
<style lang="less">
.demo10 {
    padding: 10px;
    background-color: aqua;
}
.popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        background-color: cornflowerblue;
    }
}
</style>
