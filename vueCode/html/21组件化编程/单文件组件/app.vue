<template>
  <div>
      <MySchool></MySchool>
      <MyStudent></MyStudent>
  </div>
</template>

<script>
import MySchool from "./MySchool.vue"
import MyStudent from "./MyStudent.vue"
export default {
    name: "App",
    components:{
        MyStudent,
        MySchool
    }
}
</script>

<style>

</style>