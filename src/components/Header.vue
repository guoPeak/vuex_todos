<template>
  <header class="header">
    <h1>todos</h1>
    <input
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    v-model="todoName"
    @keyup.enter="addTodoItem({name: todoName})">
  </header>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  computed: {
    todoName: {
      get () {
        return this.$store.state.todoName
      },
      set (value) {
        this.$store.commit('updateTodoName', { todoName: value })
      }
    }
  },

  methods: mapMutations(['addTodoItem'])

  // {
  //   addTodoName () {
  //     this.$store.commit('addTodoItem', { name: this.todoName })
  //   }
  // }
}
</script>

<style>

</style>
