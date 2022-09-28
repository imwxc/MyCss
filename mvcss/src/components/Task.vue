<template>
	<div>
		<li>
			<label>
				<input type="checkbox" v-model="item.complated" />
				<span>{{ item.title }}</span>
			</label>
			<button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
		</li>
	</div>
</template>

<script>
export default {
	name: "Task",
	props: {
		item: {
			type: Object,
			value: {},
		},
		index: {
			type: Number,
			value: -1,
		},
        removeTask:{
            type:Function
        }
	},
    methods: {
        handleDelete(id){
            if(confirm("确定删除？")){
                // 通知App删除对象
				this.$emit('removeTask',id)
            }
        }
    }
};
</script>

<style scoped>
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	visibility: hidden;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

li:hover {
	background-color: #ddd;
}

li:hover button {
	visibility:visible;
}
</style>
