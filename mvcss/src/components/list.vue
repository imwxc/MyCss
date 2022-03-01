<template>
	<div>
		<ul class="todo-main">
			<li>
				<label>
					<input type="checkbox" />
					<span>yyyy</span>
				</label>
				<button class="btn btn-danger" style="display: none">
					删除
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import Task from "./Task";
export default {
	name: "list",
	components: {
		Task,
	},
};
</script>

<style scoped>
/*main*/
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
}
</style>
