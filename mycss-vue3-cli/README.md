# mycss-vue3-cli

### setup
    1.Vue3的新配置项，值为一个函数
    2.setup是所有组合api的地方
    3.组件中用的数据方法都在setup中配置
    4.seup返回值：
        1.返回一个对象则 对象中的属性方法均可在模板中使用
        2.返回一个渲染函数，可以自定义渲染内容
    5.注意点：
        1.尽量不和vue2配置混用
        2.setup中不能访问vue2的配置
        3.重名时vue3优先
        4.当组件为同步调用时setup不能为async函数
        5.组件为异步调用时，需要使用Suspense搭配进行，此时异步组件的setup可以返回promise
    
### ref函数
    作用：定义一个响应式的数据
    语法：const xxx = ref(initVal)
        创建一个包含响应式数据的引用对象
        JS中操作数据 xxx.value
        模板中读取数据不用 .value
    备注：
        接受的数据可以是基本类型和对象类型
        基本类型的响应式更新靠 getter 和 setter完成
        对象类型的响应式更新vue3中的reactive函数完成

### reactive函数
    作用：定义对象类型的响应式数据
    语法：const 代理对象 = reactive(源对象) 返回一个Proxy的实例对象
    一般使用reactive + obj包裹基本类型来增强语义
    内部基于ES6的 Proxy实现，通过代理对内部源对象数据进行操作。

### Vue3的响应式原理
    Vue2的原理：
        实现原理
            对象：通过Object.defineProperty() 对属性的读取修改进行拦截
            数组：通过重写更新数组的方法来实现拦截（对数组变更的方法进行包裹）
        问题：
            新增属性、删除属性、界面不更新
            直接通过数组下标修改、界面不更新
    Vue3的原理：
        实现原理：
            通过 Proxy： 拦截对象中任意属性的变化：属性的读写、添加、删除
            通过 Reflect： 对源对象的属性进行操作

### ref 和 reactive对比
    1.定义数据角度
        ref用来定义基本类型数据
        reactive用来定义对象 & 数组
        ref定义对象和数组时会自动使用reactive
    2.原理
        ref使用Object.defineProperties()的get和set来实现数据劫持
        reactive通过Proxy来实现数据劫持，并使用Reflect操作源对象
    3.使用角度
        ref定义的属性需要使用.value来操作
        reactive不需要.value

### setup使用的注意点
    Vue2补充
        $attrs: 用于接收没有声明的props
        $slot: 只要父组件传了就会在VC上保存，只是不渲染
    setup执行时机
        在beforeCreate之前执行，此时this为undefined
    setup参数：
        props：对象包含了传入的props
        context：上下文，包含了未声明的props和未声明的slots以及emit（事件对象）

### computed函数
    // 简写 没有考虑计算属性被修改的情况
    person.fullName = computed(()=>(person.fn + person.ln))

    // 完整写法考虑计算属性被修改的情况
    person.fullName = computed({
        get:()=>(person.fn + person.ln),
        set:(value)=>{
            person.fn = value[0]
            person.ln = value[1]
        }
    })

### watch函数
    case1 监视ref定义的一个变量
    watch(sum,(newVal,oldVal)=>{
         console.info(`watch sum $newVal: ${newVal}, $oldVal: ${oldVal}`)
     })

    case2 监视ref定义的多个变量
    let watchVar = [sum,msg]
    watch(watchVar,(newVal,oldVal)=>{
        console.info(`watch ${Object.keys(watchVar)[newVal[0]]} ${newVal[0]} $newVal: ${newVal[1]}, $oldVal: ${oldVal}`, )
    }, {immediate: true})

    case3 监视reactive定义的对象
    reactive 定义的变量无法捕获oldVal, deep也是失效的
    watch(
        person,
        (newVal, oldVal) => {
            console.info(`person`, newVal, oldVal);
        },
        { deep: false }
    );
   
    case4 监视之监听reactive对象的某一个属性
    watch(
        ()=>person.age,
        (newVal, oldVal) => {
            console.info(`person.age`, newVal, oldVal);
        }
    );

    case5 监视之监听reactive对象的某些属性
    reactive 定义的变量无法捕获oldVal, deep也是失效的
    watch([() => person.name, () => person.age], (newVal, oldVal) => {
        console.info(`person.name or age`, newVal, oldVal);
    });

    特殊情况 监视reactive变量的某个属性 且 该属性为对象时, 需开启deep才能监视
    watch(() => person.job, (newVal, oldVal) => {
        console.info(`person.job`, newVal, oldVal);
    }, {deep: true});

### watchEffect函数
    watch需要指明监视的变量以及监视的回调
    watchEffect函数不用知名监视的变量, 会监视在回调函数中所有使用到的 ref or reactive变量
    watchEffect有些类似computed
        但是computed注重计算后的值,需要返回结果
        watchEffect注重监视过程,无需返回结果

### vue3生命周期
    和vue2的不同点：
        beforeDestroy --> beforeUnmount
        destroyed --> unMounted

### 自定义hook
    本质是一个函数，将setup中的一系列组合操作进行封装
    类似vue2的mixin
    优点： 复用和封装代码

### toRef 和 toRefs
    作用：创建一个ref对象，将其value指向另一个对象中的某个属性
    语法： const xx = toRef(obj, 'key')
    应用：reactive对象的某个属性暴露对外使用
    toRefs：将传入的obj的所有属性都转为 ref对象

### 其他组合api
    1.shallowReactive 和 shallowRef 
        shallowReactive：只处理对象最外层属性的响应式
        shallowRef: 只处理基本数据类型的响应式， 不进行对象的响应式处理
        使用时机：
            若有对象层级较深，只希望外层属性变化时响应 使用 shallowReactive
            若对象数据，后续功能不修改该对象中的属性，而是使用新对象替换 使用 shallowRef
    
    2. readonly 和 shallowReadonly
        readonly 让一个响应式数据变为深度只读
        shallowReadonly 让一个响应式数据变为浅度只读（只有浅层属性只读）
        场景： 不希望数据被改动

    3.toRaw 和 markRaw
        toRaw：将一个reactive的响应式数据转为 普通的不可响应数据（ref声明的不可使用）
            场景：用于读取响应式对象所对应的普通对象，对普通对象的所有操作都不会引起页面更新
        markRaw： 将一个对象标记为不可响应的
            场景：有些值不应该被设置为响应式的， 例如第三方类库
                渲染具有不可变数据的大列表时，跳过响应式转换可以提高性能

    4. customRef 自定义ref  
        作用：创建一个自定义的ref， 并对其依赖项跟踪和更新触发进行显式控制
        例子： 见Demo7（实现防抖效果） 
    
    5. provide 和 inject
       作用： 实现祖孙组件间通信
       方法：祖组件通过provide选项提供数据，子组件使用inject 来使用数据
       使用：参照Demo8

    6. 响应式数据的判断
       isRef：检查一个对象是否为一个ref对象
       isReactive： 检查一个对象是否由reactive创建的
       isReadonly： 检查一个对象是否有readonly创建的只读代理
       isProxy： 检查一个对象是否由 reactive 或 readonly 创建的代理

### 组合式api的优势
    1. options API存在的问题：
       传统的optionsApi中，新增或修改时，需要在data，methods，computed中修改
    2. composition Api优势
       需求相关的代码可以有序组合在一起，

### 新的组件
    1. Fragment
       在Vue2中， 组件必须有一个根标签
       在Vue3中， 组件可以没有根标签， 内部会将多个标签包含在Fragment虚拟元素中
       好处: 减少层级和内存占用  

    2. TelePort
       能够将组件的html结构移动到指定位置的技术
       示例参照 Demo10

    3. Suspense
       异步组件的展示以及placeHolder的展示组件
       示例参照 Demo11

    
