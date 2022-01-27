<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h4>name:{{ name }}</h4>
    <h4>address:{{ address }}</h4>
    <h4>age:{{ age }}</h4>
  </div>
</template>

<script>
// 组件交互的代码
export default {
//   props: ["name", "address", "age"], // 简单接受

// 限制接受的数据类型
// props:{
//     name:String,
//     address:String,
//     age:Number
// },
// 限制接受的数据类型+默认值+必要性
props:{
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        default:999
    }
},
  name: "MyStudent",
  data(params) {
    return {
      msg: "MSG",
    };
  },
  methods: {},
};
</script>

<style></style>
