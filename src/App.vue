<template>
  <div id="app">
    <TodoList></TodoList>
  </div>
</template>

<script>
// 导入 todoList组件
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>

</style>
