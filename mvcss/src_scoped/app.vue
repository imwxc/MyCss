<template>
  <div>
      <MySchool></MySchool>
      <MyStudent />
      <MyStudent />
      <MyStudent />
  </div>
</template>

<script>
import MyStudent from './components/MyStudent';
import MySchool from './components/MySchool'
export default {
    name: "App",
    components:{
        MyStudent,
        MySchool
    },
    methods:{
    }
}
</script>

<style>

</style>