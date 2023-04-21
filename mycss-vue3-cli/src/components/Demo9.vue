<template>
    <div class="demo9">
        <h2>父组件：</h2>
        <Demo10 />
    </div>
</template>
<script lang="ts">
import { ref, reactive } from "vue";
import Demo10 from "./Demo10.vue";
export default {
    name: "Demo9",
    components: {
        Demo10
    },
    setup() {
        return {

        }
    }
};
</script>
<style lang="less">
.demo9 {
    padding: 10px;
    background-color:antiquewhite;
}
</style>

