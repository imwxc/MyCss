<template>
    <div class="demo11">
        <h2>Demo11: {{ 0 }}</h2>
    </div>
</template>
<script lang="ts">
import { ref } from "vue";
// import Demo10 from "./components/Demo10.vue";
export default {
    name: "Demo11",
    async setup() {
        let sum = ref(0);
        const demo11 =  new Promise((resolve) => {
            setTimeout(()=>{
                resolve({sum})
            }, 3000)
        })
        return await demo11;
    },
};
</script>
<style lang="less">
.demo11 {
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
