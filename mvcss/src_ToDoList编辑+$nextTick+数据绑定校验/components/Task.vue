<template>
	<div>
		<li>
			<label>
				<input type="checkbox" v-model="item.complated" />
				<span v-show="!item.editing">{{ item.title }}</span>
				<!-- :value + @input 实现数据双向绑定+校验 -->
				<input ref="input" v-show="item.editing" type="text" :value="item.title" @input="input(item , $event.target.value)" @blur="save(item)" @keyup.enter="save(item)" />
			</label>
			<button class="btn btn-danger" @click="handleDelete(item.id)">
				删除
			</button>
			<button v-show="!item.editing" class="btn btn-edit" @click="handleEdit(item)">
				编辑
			</button>
		</li>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default{
	name: "Task",
	props: {
		item: {
			type: Object,
			value: {}
		},
		index: {
			type: Number,
			value: -1
		}
	},
	methods: {
		handleDelete(id) {
			if (confirm("确定删除？")) {
				// 通知App删除对象
				pubsub.publish("removeTask", id)
			}
		},
		handleEdit(item){
			// 进行编辑
			console.log('save',item)
			item.editing = true;
			this.$nextTick(()=>{
				this.$refs.input.focus();
			})
		},
		save(item){
			console.log('save')
			item.editing = false;
		},
		input(item, newVal){
			console.log('input',item.title,newVal)
			if(newVal && newVal.length){
				item.title = newVal 
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
	visibility: visible;
}
</style>
