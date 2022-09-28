<template>
	<div>
		<ul class="todo-main">
			<Task
				v-for="(item, index) in taskList"
				:key="item.id"
				:index="index"
				:item="item"
                :removeTask="removeTask"
			/>
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
	props: {
		taskList: {
			type: Array,
			value: [],
		},
        removeTask:{
            type:Function
        }
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
