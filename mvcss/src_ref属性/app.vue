<template>
  <div>
      <h1 id="title" ref="title">hello</h1>
      <button @click="showDom">点击输出</button>
      <MySchool ref="school1"/>
      <MySchool/>
      <MySchool/>
  </div>
</template>

<script>
import MySchool from "./components/MySchool"
export default {
    name: "App",
    components:{
        MySchool
    },
    methods:{
        showDom(){
            console.log("@@@",this.$refs.title) // 输出DOM节点
            console.log("\n\n@@@",this.$refs.school1) // 输出VC
        }
    }
}
</script>

<style>

</style>