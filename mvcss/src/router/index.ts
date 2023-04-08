import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";
// 创建路由器
const router = new VueRouter({
	mode: 'hash', // hash 模式
	routes: [
		{
			path: "/about",
			component: About,
			name: "guanyu",
		},
		{
			path: "/home",
			component: Home,
			children: [
				{
					path: "news",
					component: News,
					meta: {
						isAuth: true,
					},
                    // 独享路由守卫
					beforeEnter: (to, from, next) => {
						next();
					},
				},
				{
					path: "message",
					component: Message,
					children: [
						{
							path: "detail", // 解析params时需要在path中进行配置
							// path: 'detail',
							component: Detail,
							name: "xiangqing",
							// props 第一种写法, 会以props传给details组件
							// props: {
							//     a:1,
							//     b:2
							// }
							//props 第二种写法, boolean 为true时，路由组件收到的所有params参数都传给组件
							// props: true

							// props 第三种写法 function
							props($route) {
								console.log($route);
								// const { id , title } = $route.params
								const { id, title } = $route.query;
								return {
									id,
									title,
								};
							},
						},
					],
				},
			],
		},
	],
});

// 全局前置路由守卫——初始化 & 每次路由切换之前调用
router.beforeEach((to, from, next) => {
	// 前置路由守卫
	// if(localStorage.getItem('school') === 'school'){
	//     next();
	// }else{
	//     alert('学校名错误')
	// }
	// 路由时配置meta 中的属性
	if (to.meta.isAuth) {
		// 判断是否需要鉴权
		alert(`${to.path}需要鉴权`);
		next();
	}
	console.log(to, from);
	next();
});

// 全局后置路由守卫——初始化 & 每次路由切换之后调用
router.afterEach((to, from) => {
	// 前置路由守卫
	// if(localStorage.getItem('school') === 'school'){
	//     next();
	// }else{
	//     alert('学校名错误')
	// }
	// 路由时配置meta 中的属性 为路由元信息
	if (to.meta.isAuth) {
		// 判断是否需要鉴权
		alert(`${to.path}需要鉴权`);
	}
	console.log(to, from);
});

export default router;
// module.exports = router
