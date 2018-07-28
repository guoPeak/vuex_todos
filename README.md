# Vuex

- 前提：只有在必要的情况下才使用Vuex工具，如果不需要Vuex，那就别用它
  - 使用 Vuex 之后，会附加更多框架的概念进来，会增加项目的复杂度！！！

## 是什么

- Vuex 是一个Vue的状态管理工具
- 状态，即：数据（组件、实例中的data）
- 状态管理，就是管理Vue项目中的数据

## 能做什么

- 用来解决：组件通讯问题
- 优势：采用集中式，管理Vue项目中用到的所有数据

## 为什么需要使用Vuex

- 问题：为什么需要使用 Vuex 来管理Vue项目中的数据？

```html
在大型项目中，组件之间的通讯会变得混乱，为了更好的管理组件之间的通讯，也为了更容易的管理和
调试项目，就需要一个工具来管理整个项目中的数据。这个工具就是：Vuex
```

## 状态管理的介绍

- 最早的状态管理概念是在 React 中给提出的，Flux

## Vuex 的使用

- 1 安装：`npm install vuex --save`
- 2 先引入 Vue，再引入 vuex
  - 因为 Vuex 是依赖于 Vue 的

## Vuex中的核心概念

- store：数据仓库
  - 1 提供了state
  - 2 提供了操作state的方法（mutations）
- state：状态，也就是 数据
- mutations：操作数据的方法
  - 只要修改state，就要通过 mutations 来修改！！！
- actions：异步操作数据
  - 1 包含异步操作
  - 2 最终，还是通过 mutations 来修改state
- getters：Vuex的计算属性
  - 如果需要从现有的state中派生出一些状态，那就使用 getters
  - 比如： 未完成任务数量 状态就可以从 任务列表（todoList） 中派生出来

## state 的操作

- 可以直接在任何一个组件中使用 store 中提供的数据
- 但是，更好的方式是：先将store中数据，放到组件中一份，然后，组件中直接使用组件自己的数据
- 如何将 store 中的数据放到组件中？？？

```js
// 作用：将 store.state 中的 todoList 数据，添加到 当前组件的 计算属性 中，并且计算属性名称 与 store 中的名称相同
{
  // computed: {
  //   count () {}
  // }

  computed: mapState(['todoList'])
}
```

## actions 和 mutations 的区别

- [vuex中为什么把把异步操作封装在action，把同步操作放在mutations？ - 尤雨溪的回答 - 知乎](https://www.zhihu.com/question/48759748/answer/112823337)

## mapXXX

- `mapState(['todoList'])`
- `mapGetters(['unCompletedCount'])`

```js
// 计算属性的语法：
computed: {
  computedA () {},
  computedB () {},
}

// mapState(['todoList']) 的返回值是：对象
// mapGetters(['unCompletedCount']) 的返回值是：对象
computed: mapState(['todoList'])
computed: mapGetters(['unCompletedCount'])

// 将 state 和 getters 同时映射到计算属性中
computed: {
  ...mapState(['todoList']),
  ...mapGetters(['unCompletedCount'])
}
```

- `mapMutations(['addTodo'])`
- `mapActions(['clearCompletedAsync'])`

```js
methods: {
  ...mapMutations(['addTodo']),
  ...mapActions(['clearCompletedAsync'])
}
```

## Vuex使用的原则

- 1 整个项目中只推荐有一个store
  - [state 的说明](https://vuex.vuejs.org/zh/guide/state.html)
- 2 使用 Vuex 的两种模式
  - 2.1 将项目中的所有数据全部放到 Vuex 中，进行统一管理
  - 2.2 组件有自己的私有的数据，多个组件中需要共享的数据才放到 Vuex 中（一般都是这种模式）
    - 比如：todoName这个数据就可以放在 Header 组件中
