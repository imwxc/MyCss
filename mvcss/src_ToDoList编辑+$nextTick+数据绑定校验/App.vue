<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<MyInput @receiveTask="receiveTask" />
			<div v-show="taskList.length">
				<List :taskList="taskList" />
				<Bottom :taskList="taskList" @emptyTaskList="emptyTaskList" />
			</div>
		</div>
	</div>
</template>

<script>
import Bottom from "./components/Bottom.vue";
import List from "./components/List.vue";
import MyInput from "./components/Input.vue";
import { nanoid } from "nanoid";
import pubsub from 'pubsub-js'
import * as utils from "./utils/util";
export default {
	name: "App",
	components: {
		Bottom,
		List,
		MyInput
	},
	data() {
		return {
			taskList: JSON.parse(localStorage.getItem("taskList")) || []
		};
	},
	methods: {
		receiveTask(task) {
			//需要使用Vue能够监听的方式来改变数组，不然视图不会更新
			utils.ListUnshift(this.taskList, task);
		},
		removeTask(id) {
			utils.ListDelete(this.taskList, "id", id);
		},
		emptyTaskList() {
			utils.ListUpdate(this.taskList);
		}
	},
	mounted(){
		this.pubId = pubsub.subscribe('removeTask', (_, id)=>{
			utils.ListDelete(this.taskList, "id", id);
		})
	},
	watch: {
		// 需要深度监听来改变数组中的每一项
		taskList: {
			deep: true,
			handler(value) {
				localStorage.setItem("taskList", JSON.stringify(value));
			}
		}
	},
	beforeDestroy() {
		pubsub.unsubscribe(this.pubId)
	}

};
</script>

<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
		0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-edit{
	color: #fff;
	background-color: skyblue;
	border: 1px solid skyblue;
	margin-right : 4px;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}
.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
