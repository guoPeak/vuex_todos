<template>
  <section class="todoapp">
    <!-- Header.vue -->
    <Header></Header>

    <!-- TodoItem.vue -->
    <TodoItem></TodoItem>

    <!-- Footer.vue -->
    <Footer></Footer>
  </section>
</template>

<script>
// 导入三个组件
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'

export default {
  components: {
    Header,
    TodoItem,
    Footer
  }
}
</script>

<style>

</style>
