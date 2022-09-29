<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{ finishTakskNum }}</span> / 全部{{ taskList.length }}
		</span>
		<button class="btn btn-danger" @click="clearTasks">
			清除已完成任务
		</button>
	</div>
</template>

<script>
export default {
	name: "bottom",
	props: {
		taskList: {
			type: Array,
		},
	},
	computed: {
		finishTakskNum() {
			return this.taskList.filter((item) => item.complated === true)
				.length;
		},
		isAll: {
			get() {
				return this.finishTakskNum === this.taskList.length;
			},
			set(newValue) {
				this.checkAll(newValue);
			},
		},
	},
	methods: {
		clearTasks() {
			this.$emit('emptyTaskList');
		},
		checkAll(newValue) {
			this.taskList.forEach((item) => (item.complated = newValue));
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
