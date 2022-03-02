<template>
	<div>
		<li>
			<label>
				<input
					type="checkbox"
					:checked="item.complated"
					@change="handleChange(item.id)"
				/>
				<span>{{ item.title }}</span>
			</label>
			<button class="btn btn-danger" style="display: none">删除</button>
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
		changeStatus: {
			type: Function,
		},
	},
	methods: {
		handleChange(id) {
			console.log("点击勾选框的ID ：", id);
			//通知app将对应状态取反
			this.changeStatus(id);
		},
	},
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
	display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}
</style>
