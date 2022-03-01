<template>
  <div>
      <MySchool></MySchool>
      <MyStudent name="Student1" address="add1" age="18"/>
      <MyStudent name="Student2" address="add2" age="19"/>
      <MyStudent name="Student3" address="add3" :age="222"/>
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