<template>
  <div>
      <img src="./assets/logo.png" alt="logo">
      <MySchool></MySchool>
      <MySchool></MySchool>
      <MySchool></MySchool>
  </div>
</template>

<script>
import MySchool from "./MySchool.vue"
export default {
    name: "App",
    components:{
        MySchool
    }
}
</script>

<style>

</style>