<template>
    <div>
        <input v-model="keyword" type="text"  />
        <h3>{{ keyword }}</h3>
    </div>
</template>
<script lang="ts">
import { ref, customRef } from "vue";
export default {
    name: "Demo7",
    setup() {
        // 自定义ref
        function myRef(val:string) {
            console.info('myRef 读取了 val:', val)
            let timer: number;
            return customRef((track, trigger) => ({
                // value: val,
                get() {
                    console.info('myRef 读取了 val:', val)
                    track() // 通知vue追踪数据变化
                    return val;
                },
                set(newVal: string) {
                    console.info('myRef 写入了 newVal:', newVal)
                    clearTimeout(timer)
                    timer = setTimeout(()=>{
                        val = newVal
                    trigger() // 通知vue重新解析template
                    }, 500)
                },
            }));
        }
        // let keyword = ref('hello') // 使用Vue 的 ref
        let keyword = myRef("hello"); // 使用自定义ref
        return {
            keyword,
        };
    },
};
</script>

<style lang="less"></style>
