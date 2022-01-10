// 整个项目的入口文件

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
