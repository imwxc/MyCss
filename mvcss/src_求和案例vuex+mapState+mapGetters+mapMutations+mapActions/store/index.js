// 该文件用于创建 vuex 的 store
import Vue from "vue";
import Vuex from "vuex";

// 准备actions，用于响应组件动作
// 网络请求以及复杂逻辑逻辑可以在actions中进行实现和调用， 这样可以提高代码复用，减少逻辑复杂度
const actions = {
	increase(context, value) {
		// console.log("actions", context, value);
		context.commit("INCREASE", value);
	},
	decrease(context, value) {
		context.commit("DECREASE", value);
	},
	increaseOdd(context, value) {
		if (context.state.countNum % 2) {
			context.commit("INCREASE", value);
		}
	},
	increaseWait(context, value) {
		setTimeout(() => {
			context.commit("INCREASE", value);
		}, 500);
	}
};

const mutations = {
	INCREASE(state, value) {
		state.countNum += value;
		// console.log("mutations", state, value);
	},
	DECREASE(state, value) {
		state.countNum -= value;
	}
};

const state = {
	countNum: 0, // 当前的和
    school: 'school',
    name: 'name111',
};

const getters = {
	bigSum(state) {
		return state.countNum * 10;
	}
};

// 需要在use之后才可以使用store
Vue.use(Vuex);
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
