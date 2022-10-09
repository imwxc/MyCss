<template>
	<div class="category">
        <h3>{{title}}分类</h3>
        <slot>插槽的默认值</slot>
	</div>
</template>

<script>
export default {
	name: "Category",
    props: ['listData','title'],
	data() {
		return {

        };
	},
};
</script>

<style scoped>
/*base*/
body {
	background: #fff;
}
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
</style>
